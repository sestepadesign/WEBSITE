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
        "clean_extra": False,
    },
    "sant-llorenc": {
        "orig_dir": "sant-llorenc/Sant Llorenç Editadas Sofia Canva/EDITADAS",
        "gdrive_folder_id": "1BvozUtiiVubTIYZha-G0UuHb2cgw7VbQ",
        "target_subdir": "2026-10-5-months",
        "file_prefix": "sant-llorenc-5-months",
        "skip_card": True,
        "clean_extra": False,
    },
    "portals-nous": {
        "orig_dir": "portals-nous",
        "file_prefix": "portals-nous",
        "priority_files": [
            "PORTALS NOULS - SESTEPA DESIGN - ADRIA - MALLORCA - LANDSCAPE (2).jpeg",
            "PORTALS NOULS - SESTEPA DESIGN - ADRIA - MALLORCA - MG_20260310_132927.jpg.jpeg",
            "PORTAL NOUS  IMG_7108.HEIC",
        ],
        "clean_extra": False,
    },
}

def scan_j_drive_sant_llorenc():
    j_root = Path("J:/")
    if not j_root.exists():
        print("[!] Unidade J: nao encontrada ou inacessivel.")
        return None, []

    print("[*] Escaneando unidade J: em busca de pastas de Sant Llorenç...")
    found_folders = []
    try:
        for root_item in j_root.iterdir():
            try:
                if root_item.is_dir():
                    # Check if root_item matches or look inside
                    name_norm = root_item.name.lower().replace("ç", "c")
                    if "llorenc" in name_norm or "sant llorenc" in name_norm:
                        mtime = os.path.getmtime(root_item)
                        found_folders.append((mtime, root_item))
                    
                    # Also search 2-3 levels deep inside main folders
                    for depth1 in root_item.iterdir():
                        if depth1.is_dir():
                            d1_norm = depth1.name.lower().replace("ç", "c")
                            if "llorenc" in d1_norm:
                                mtime = os.path.getmtime(depth1)
                                found_folders.append((mtime, depth1))
                            for depth2 in depth1.iterdir():
                                if depth2.is_dir():
                                    d2_norm = depth2.name.lower().replace("ç", "c")
                                    if "llorenc" in d2_norm:
                                        mtime = os.path.getmtime(depth2)
                                        found_folders.append((mtime, depth2))
                                    for depth3 in depth2.iterdir():
                                        if depth3.is_dir():
                                            d3_norm = depth3.name.lower().replace("ç", "c")
                                            if "llorenc" in d3_norm:
                                                mtime = os.path.getmtime(depth3)
                                                found_folders.append((mtime, depth3))
            except Exception as e:
                continue
    except Exception as e:
        print(f"[!] Erro ao listar raiz de J: {e}")

    if not found_folders:
        print("[!] Nenhuma pasta de Sant Llorenç localizada em J:")
        return None, []

    # Sort by mtime descending (most recent first)
    found_folders.sort(key=lambda x: x[0], reverse=True)
    import datetime
    print(f"[*] Total de pastas encontradas com 'Sant Llorenç': {len(found_folders)}")
    for mt, folder in found_folders[:10]:
        dt_str = datetime.datetime.fromtimestamp(mt).strftime('%Y-%m-%d %H:%M:%S')
        print(f"    - [{dt_str}] {folder}")

    latest_folder = found_folders[0][1]
    latest_dt = datetime.datetime.fromtimestamp(found_folders[0][0]).strftime('%Y-%m-%d %H:%M:%S')
    print(f"[+] Pasta mais recente selecionada: {latest_folder} (Modificada em: {latest_dt})")
    return latest_folder, found_folders

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

    if curated and curated.get("clean_extra"):
        for old_file in list(target_dir.iterdir()):
            if old_file.is_file() and old_file.suffix.lower() == ".webp":
                if old_file.name not in generated_files:
                    print(f"[-] Removendo versao descontinuada: {old_file.name}")
                    old_file.unlink()

    print(f"[V] Concluida com sucesso a otimizacao para {slug}.")

def sync_sant_llorenc_from_j(root: Path):
    latest_folder, all_folders = scan_j_drive_sant_llorenc()
    if not latest_folder:
        return []

    target_numbers = ["4026", "4033", "4061", "4070", "2536", "3718", "3776", "3778"]
    print(f"[*] Buscando arquivos com os codigos do bilhete: {target_numbers}")

    # Search in subfolders, prioritizing newest dates like 26.10.2026, 19.10.2026, etc.
    search_dirs = [latest_folder] + [f[1] for f in all_folders if f[1] != latest_folder]
    
    found_matches = {}
    for sdir in search_dirs:
        try:
            # Collect all files first and sort by date descending
            all_files = []
            for item in sdir.rglob("*"):
                if item.is_file() and item.suffix.lower() in ('.jpg', '.jpeg', '.png', '.heic', '.tif', '.tiff'):
                    all_files.append(item)
            # Sort files with preference for Canon/Camera images and recent dates
            def file_score(f: Path):
                score = 0
                name_u = f.name.upper()
                if name_u.startswith("IMG_") or name_u.startswith("_MG_") or "COPIA" in name_u:
                    score += 10
                if "26.10.2026" in str(f):
                    score += 20
                elif "19.10.2026" in str(f):
                    score += 15
                elif "08.09.2026" in str(f):
                    score += 10
                return score
            all_files.sort(key=file_score, reverse=True)

            for item in all_files:
                for num in target_numbers:
                    # Match exact 4-digit number not part of a longer number
                    if re.search(rf'(?<!\d){num}(?!\d)', item.name, re.IGNORECASE):
                        if num not in found_matches:
                            found_matches[num] = item
                            print(f"[+] Localizado arquivo para codigo {num}: {item}")
        except Exception as e:
            print(f"[!] Erro ao buscar em {sdir}: {e}")

    # Originais destino
    orig_dest = root.parent / "originais-grandes" / "sant-llorenc" / latest_folder.name
    orig_dest.mkdir(parents=True, exist_ok=True)
    print(f"[*] Destino em originais-grandes: {orig_dest}")

    copied_files = []
    for num, fpath in found_matches.items():
        dest_file = orig_dest / fpath.name
        try:
            shutil.copy2(fpath, dest_file)
            print(f"[+] Copiado para originais: {dest_file.name} ({dest_file.stat().st_size} bytes)")
            copied_files.append(dest_file)
        except Exception as e:
            print(f"[!] Erro ao copiar {fpath.name}: {e}")

    return copied_files

def main():
    parser = argparse.ArgumentParser(description="Script Universal de Otimizacao e Conversao WebP (S'Estepa Design)")
    parser.add_argument("--slug", default=None, help="Slug do portfolio")
    parser.add_argument("--dir", default=None, help="Caminho opcional do diretorio de imagens")
    args = parser.parse_args()

    root = Path(__file__).resolve().parent.parent
    target_dir = root / "public" / "portfolio" / args.slug / "images"

    src_dir = Path(args.dir) if args.dir else None
    if args.slug == "sant-llorenc":
        newly_copied = sync_sant_llorenc_from_j(root)
        print(f"[*] Total de arquivos copiados de J: {len(newly_copied)}")
        if newly_copied:
            curated = CURATED_PROJECTS.get(args.slug)
            actual_target_dir = target_dir / curated["target_subdir"] if curated and curated.get("target_subdir") else target_dir
            actual_target_dir.mkdir(parents=True, exist_ok=True)
            
            # Remove any previous attempt >= 42 in this session
            for f in list(actual_target_dir.iterdir()):
                if f.suffix.lower() == ".webp":
                    m = re.search(r'-(\d{2})(?:-portrait)?-', f.name)
                    if m and int(m.group(1)) >= 42:
                        f.unlink()
            start_idx = 42
            print(f"[*] Indice inicial para novas imagens: {start_idx}")
            
            new_webp_files = []
            for idx, f in enumerate(newly_copied, start=start_idx):
                num_str = f"{idx:02d}"
                is_vert = False
                try:
                    with Image.open(f) as test_im:
                        is_vert = test_im.height > test_im.width
                except Exception:
                    pass
                vert_tag = "-portrait" if is_vert else ""
                clean_code = re.sub(r'[^a-z0-9]+', '-', f.stem.lower()).strip('-')
                dst_name = f"garden-design-mallorca-sant-llorenc-5-months-sofia-{num_str}{vert_tag}-{clean_code}-sestepa-design.webp"
                dst_webp = actual_target_dir / dst_name
                convert_webp(f, dst_webp)
                new_webp_files.append(dst_name)
            
            print(f"[+] Total de novos WebP gerados: {len(new_webp_files)}")
            for nwf in new_webp_files:
                print(f"    - {nwf}")
            return
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
