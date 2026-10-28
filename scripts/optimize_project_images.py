import os
import sys
import argparse
from pathlib import Path
from PIL import Image

def convert_webp(src_path: Path, dst_path: Path, max_w=1920, quality=85):
    with Image.open(src_path) as im:
        im = im.convert("RGB")
        w, h = im.size
        if w > max_w:
            new_h = int(h * (max_w / w))
            im = im.resize((max_w, new_h), Image.Resampling.LANCZOS)
        im.save(dst_path, "WEBP", quality=quality, method=6)
        print(f"[+] Salvo: {dst_path.name} ({im.size[0]}x{im.size[1]} px)")

def make_card(src_path: Path, dst_path: Path, width=700, height=525, quality=85):
    with Image.open(src_path) as im:
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
        im.save(dst_path, "WEBP", quality=quality, method=6)
        print(f"[+] Salvo Card 4:3: {dst_path.name} ({width}x{height} px)")

def find_originais_dir(root: Path, slug: str) -> list[Path]:
    originais_root = root.parent / "originais-grandes"
    candidates = [
        originais_root / slug,
        originais_root / "alcanada",
        originais_root / "seaside-house-alcudia",
    ]
    return [p for p in candidates if p.exists()]

def process_dir(target_dir: Path, slug: str, src_dir: Path = None):
    print(f"[*] Processando otimizacao de imagens para: {slug}")
    raw_exts = ('.jpg', '.jpeg', '.png', '.avif')

    target_dir.mkdir(parents=True, exist_ok=True)
    search_dirs = [src_dir] if src_dir else [target_dir]

    all_raw_files = []
    for sdir in search_dirs:
        if sdir and sdir.exists():
            for f in sorted(sdir.iterdir()):
                if f.is_file() and f.suffix.lower() in raw_exts and not f.name.endswith('.webp'):
                    all_raw_files.append(f)

    print(f"[*] Encontradas {len(all_raw_files)} imagens para conversao WebP.")
    for idx, f in enumerate(all_raw_files, 1):
        num_str = f"{idx:02d}"
        dst_webp = target_dir / f"garden-design-mallorca-{slug}-sestepa-{num_str}.webp"
        convert_webp(f, dst_webp)
        if idx == 1:
            dst_card = target_dir / f"garden-design-mallorca-{slug}-sestepa-card.webp"
            make_card(f, dst_card)

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
        orig_dirs = find_originais_dir(root, args.slug)
        if orig_dirs:
            src_dir = orig_dirs[0]

    process_dir(target_dir, args.slug, src_dir)

if __name__ == "__main__":
    main()
