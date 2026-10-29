import os
import sys
import re
import argparse
import tempfile
import shutil
from pathlib import Path
from PIL import Image, ImageOps

try:
    import pillow_heif
    pillow_heif.register_heif_opener()
except ImportError:
    try:
        import subprocess
        subprocess.run([sys.executable, "-m", "pip", "install", "pillow-heif"], check=True)
        import pillow_heif
        pillow_heif.register_heif_opener()
    except Exception as e:
        print(f"[!] pillow-heif nao disponivel: {e}")

def convert_webp(src_path: Path, dst_path: Path, max_w=1920, quality=85):
    with tempfile.NamedTemporaryFile(suffix=".webp", delete=False) as tmp:
        tmp_path = Path(tmp.name)
    try:
        with Image.open(src_path) as im:
            im = ImageOps.exif_transpose(im)
            im = im.convert("RGB")
            w, h = im.size
            if w > max_w:
                new_h = int(h * (max_w / w))
                im = im.resize((max_w, new_h), Image.Resampling.LANCZOS)
            im.save(tmp_path, "WEBP", quality=quality, method=6)
        dst_path.parent.mkdir(parents=True, exist_ok=True)
        if dst_path.exists():
            if dst_path.is_dir():
                print(f"[!] dst_path eh um diretorio: {dst_path.name}")
                shutil.rmtree(dst_path)
            else:
                try:
                    os.chmod(dst_path, 0o777)
                    dst_path.unlink()
                except Exception as e:
                    print(f"[!] Erro ao remover destino: {e}")
        shutil.copyfile(tmp_path, dst_path)
        print(f"[+] Salvo: {dst_path.name} ({im.size[0]}x{im.size[1]} px)")
    finally:
        if tmp_path.exists():
            tmp_path.unlink()

def make_card(src_path: Path, dst_path: Path, width=700, height=525, quality=85):
    with tempfile.NamedTemporaryFile(suffix=".webp", delete=False) as tmp:
        tmp_path = Path(tmp.name)
    try:
        with Image.open(src_path) as im:
            im = ImageOps.exif_transpose(im)
            im = im.convert("RGB")
            w, h = im.size
            target_ratio = width / height
            current_ratio = w / h
            if current_ratio > target_ratio:
                new_w = int(h * target_ratio)
                left = (w - new_w) // 2
                im = im.crop((left, 0, left + new_w, h))
            else:
                new_h = int(w / target_ratio)
                top = (h - new_h) // 2
                im = im.crop((0, top, w, top + new_h))
            im = im.resize((width, height), Image.Resampling.LANCZOS)
            im.save(tmp_path, "WEBP", quality=quality, method=6)
        dst_path.parent.mkdir(parents=True, exist_ok=True)
        if dst_path.exists():
            if dst_path.is_dir():
                print(f"[!] dst_path eh um diretorio: {dst_path.name}")
                shutil.rmtree(dst_path)
            else:
                try:
                    os.chmod(dst_path, 0o777)
                    dst_path.unlink()
                except Exception as e:
                    print(f"[!] Erro ao remover destino: {e}")
        shutil.copyfile(tmp_path, dst_path)
        print(f"[+] Salvo Card 4:3: {dst_path.name} ({width}x{height} px)")
    finally:
        if tmp_path.exists():
            tmp_path.unlink()

CURATED_PROJECTS = {
    "terrace-garden-santa-eugenia": {
        "orig_dir": "santa-eugenia",
        "file_prefix": "santa-eugenia",
        "files": [
            "garden design mallorca santa eugenia sestepa landscape design (6).png",
            "garden design mallorca santa eugenia sestepa landscape design (4).png",
            "garden design mallorca santa eugenia sestepa landscape design (2).png",
        ],
        "clean_extra": True,
    },
    "sant-llorenc": {
        "orig_dir": "sant-llorenc/Sant Llorenç Editadas Sofia Canva/EDITADAS",
        "gdrive_folder_id": "1BvozUtiiVubTIYZha-G0UuHb2cgw7VbQ",
        "target_subdir": "2026-10-5-months",
        "file_prefix": "sant-llorenc-5-months",
        "skip_card": True,
        "clean_extra": True,
    },
    "portals-nous": {
        "orig_dir": "portals-nous",
        "file_prefix": "portals-nous",
        "priority_files": [
            "PORTALS NOULS - SESTEPA DESIGN - ADRIA - MALLORCA - LANDSCAPE (2).jpeg",
            "PORTALS NOULS - SESTEPA DESIGN - ADRIA - MALLORCA - MG_20260310_132927.jpg.jpeg",
            "PORTAL NOUS  IMG_7108.HEIC",
        ],
        "clean_extra": True,
    },
}

def download_gdrive_folder(folder_id: str, dest_dir: Path):
    dest_dir.mkdir(parents=True, exist_ok=True)
    existing = [f for f in dest_dir.iterdir() if f.is_file() and not f.name.endswith('.tmp')]
    if existing:
        print(f"[*] Destino ja contem {len(existing)} arquivos: {dest_dir}")
        return
    print(f"[*] Baixando pasta do Google Drive ({folder_id}) para {dest_dir}...")
    try:
        import gdown
    except ImportError:
        print("[*] Instalando modulo gdown...")
        import subprocess
        subprocess.run([sys.executable, "-m", "pip", "install", "gdown"], check=True)
        import gdown

    url = f"https://drive.google.com/drive/folders/{folder_id}"
    try:
        gdown.download_folder(url, output=str(dest_dir), quiet=False, use_cookies=False)
    except Exception as e:
        print(f"[!] Erro no download gdown: {e}")

def find_originais_dir(root: Path, slug: str) -> list[Path]:
    originais_root = root.parent / "originais-grandes"
    candidates = [
        originais_root / slug / "Sant Llorenç Editadas Sofia Canva",
        originais_root / slug,
        originais_root / slug.replace("terrace-garden-", ""),
        originais_root / "alcanada",
        originais_root / "seaside-house-alcudia",
    ]
    return [p for p in candidates if p.exists()]

def process_dir(target_dir: Path, slug: str, src_dir: Path = None):
    print(f"[*] Processando otimizacao de imagens para: {slug}")
    raw_exts = ('.jpg', '.jpeg', '.png', '.avif', '.heic')

    curated = CURATED_PROJECTS.get(slug)
    if curated and curated.get("target_subdir"):
        target_dir = target_dir / curated["target_subdir"]

    target_dir.mkdir(parents=True, exist_ok=True)
    name_prefix = curated["file_prefix"] if curated and "file_prefix" in curated else slug

    all_raw_files = []
    if curated and "files" in curated and src_dir:
        for fname in curated["files"]:
            fpath = src_dir / fname
            if fpath.exists():
                all_raw_files.append(fpath)
            else:
                print(f"[!] Arquivo curado nao encontrado: {fpath}")
    else:
        import zipfile
        search_dirs = [src_dir] if src_dir else [target_dir]
        for sdir in search_dirs:
            if sdir and sdir.exists():
                found_files = []
                direct_files = [f for f in sorted(sdir.iterdir()) if f.is_file() and f.suffix.lower() in raw_exts]
                if direct_files:
                    found_files = direct_files
                else:
                    for f in sorted(sdir.rglob("*")):
                        if f.is_file() and f.suffix.lower() != '.zip' and (f.suffix.lower() in raw_exts or (sdir != target_dir and f.suffix.lower() == '.webp')):
                            found_files.append(f)

                if curated and "priority_files" in curated:
                    priority_matched = []
                    for pf in curated["priority_files"]:
                        pf_clean = re.sub(r'[^a-z0-9]', '', pf.lower())
                        matched = None
                        for rf in found_files:
                            rf_clean = re.sub(r'[^a-z0-9]', '', rf.name.lower())
                            if pf_clean == rf_clean:
                                matched = rf
                                break
                        if matched and matched not in priority_matched:
                            priority_matched.append(matched)
                            print(f"[+] Foto prioritaria identificada: {matched.name}")
                        else:
                            print(f"[!] Foto prioritaria nao localizada: {pf}")
                    remaining = [rf for rf in found_files if rf not in priority_matched]
                    all_raw_files.extend(priority_matched + remaining)
                else:
                    all_raw_files.extend(found_files)

    print(f"[*] Encontradas {len(all_raw_files)} imagens para conversao WebP.")
    generated_files = set()
    for idx, f in enumerate(all_raw_files, 1):
        num_str = f"{idx:02d}"
        if slug == "sant-llorenc":
            is_vert = False
            try:
                with Image.open(f) as test_im:
                    is_vert = test_im.height > test_im.width
            except Exception:
                pass
            vert_tag = "-portrait" if is_vert else ""
            clean_name = f.stem.lower()
            clean_name = clean_name.replace("ç", "c").replace("ñ", "n")
            clean_name = re.sub(r'[^a-z0-9]+', '-', clean_name).strip('-')
            clean_name = clean_name.replace("sant-llorenc-editadas-sofia-canva", "").replace("sant-llorenc", "").strip('-')
            parts = [p for p in clean_name.split('-') if p and not p.isdigit()]
            descriptor = "-".join(parts) if parts else ""
            if descriptor:
                dst_name = f"garden-design-mallorca-sant-llorenc-5-months-sofia-{num_str}{vert_tag}-{descriptor}-sestepa-design.webp"
            else:
                dst_name = f"garden-design-mallorca-sant-llorenc-5-months-sofia-{num_str}{vert_tag}-sestepa-design.webp"
            dst_webp = target_dir / dst_name
        else:
            dst_webp = target_dir / f"garden-design-mallorca-{name_prefix}-sestepa-{num_str}.webp"

        convert_webp(f, dst_webp)
        generated_files.add(dst_webp.name)
        if idx == 1 and not (curated and curated.get("skip_card")):
            dst_card = target_dir / f"garden-design-mallorca-{name_prefix}-sestepa-card.webp"
            make_card(f, dst_card)
            generated_files.add(dst_card.name)

    if slug == "sant-llorenc" or (curated and curated.get("clean_extra")):
        for old_file in list(target_dir.iterdir()):
            if old_file.is_file() and old_file.suffix.lower() == ".webp":
                if old_file.name not in generated_files:
                    print(f"[-] Removendo versao descontinuada: {old_file.name}")
                    old_file.unlink()

    print(f"[V] Concluida com sucesso a otimizacao para {slug}.")

def main():
    parser = argparse.ArgumentParser(description="Script Universal de Otimizacao e Conversao WebP (S'Estepa Design)")
    parser.add_argument("--slug", required=True, help="Slug do portfolio")
    parser.add_argument("--dir", default=None, help="Caminho opcional do diretorio de imagens")
    args = parser.parse_args()

    root = Path(__file__).resolve().parent.parent
    target_dir = root / "public" / "portfolio" / args.slug / "images"

    src_dir = Path(args.dir) if args.dir else None
    if not src_dir:
        curated = CURATED_PROJECTS.get(args.slug)
        if curated and "orig_dir" in curated:
            custom_dir = root.parent / "originais-grandes" / curated["orig_dir"]
            if curated.get("gdrive_folder_id"):
                download_gdrive_folder(curated["gdrive_folder_id"], custom_dir)
            if custom_dir.exists():
                src_dir = custom_dir
            else:
                cand_parent = root.parent / "originais-grandes" / "sant-llorenc"
                if cand_parent.exists():
                    for sub in cand_parent.iterdir():
                        if "sofia" in sub.name.lower() or "canva" in sub.name.lower():
                            src_dir = sub
                            break

    dup_folder = root.parent / "originais-grandes" / "sant-llorenc" / "Sant Llorenç Editadas Sofia Canva" / "EDITADAS-20261029T112930Z-1-001"
    if dup_folder.exists():
        import shutil
        shutil.rmtree(dup_folder)
        print(f"[*] Removida pasta duplicada: {dup_folder.name}")

    if not src_dir:
        orig_dirs = find_originais_dir(root, args.slug)
        if orig_dirs:
            src_dir = orig_dirs[0]

    process_dir(target_dir, args.slug, src_dir)

if __name__ == "__main__":
    main()
