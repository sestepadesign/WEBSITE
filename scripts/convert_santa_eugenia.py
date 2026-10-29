from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "public" / "portfolio" / "terrace-garden-santa-eugenia" / "images"

# Photo 1 (Cover / Hero): Staircase in perspective with blooming agapanthus
src_01 = BASE / "1. garden design mallorca santa eugenia sestepa landscape design (5).jpg"
dst_01 = BASE / "garden-design-mallorca-santa-eugenia-sestepa-01.webp"
dst_card = BASE / "garden-design-mallorca-santa-eugenia-sestepa-card.webp"

# Photo 2: House lawn with olive tree and iron sphere sculptures
src_02 = BASE / "garden design mallorca santa eugenia sestepa landscape design (2).jpg"
dst_02 = BASE / "garden-design-mallorca-santa-eugenia-sestepa-02.webp"

# Photo 3: Straight view of staircase with blooming agapanthus
src_03 = BASE / "garden design mallorca santa eugenia sestepa landscape design (4).jpg"
dst_03 = BASE / "garden-design-mallorca-santa-eugenia-sestepa-03.webp"

def convert_webp(src_path: Path, dst_path: Path, max_w=1920, quality=85):
    with Image.open(src_path) as im:
        im = im.convert("RGB")
        w, h = im.size
        if w > max_w:
            new_h = int(h * (max_w / w))
            im = im.resize((max_w, new_h), Image.Resampling.LANCZOS)
        im.save(dst_path, "WEBP", quality=quality, method=6)
        print(f"Saved {dst_path.name} ({im.size[0]}x{im.size[1]})")

def make_card(src_path: Path, dst_path: Path, width=700, height=525, quality=85):
    with Image.open(src_path) as im:
        im = im.convert("RGB")
        # Center crop to 4:3
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
        print(f"Saved card {dst_path.name} ({width}x{height})")

if __name__ == "__main__":
    convert_webp(src_01, dst_01)
    make_card(src_01, dst_card)
    convert_webp(src_02, dst_02)
    convert_webp(src_03, dst_03)
    print("Done Santa Eugenia optimization.")
