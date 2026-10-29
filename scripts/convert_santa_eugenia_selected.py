import os
from PIL import Image

src_dir = r"g:\Meu Drive\1. WEBSITES\sestepa-design\originais-grandes\santa-eugenia"
out_dir = r"g:\Meu Drive\1. WEBSITES\sestepa-design\codigo\public\portfolio\terrace-garden-santa-eugenia\images"

# Exact 3 selected files from the screenshot:
# garden design mallorca santa eugenia sestepa landscape design (2).png -> ...-01.webp & ...-card.webp
# garden design mallorca santa eugenia sestepa landscape design (4).png -> ...-02.webp
# garden design mallorca santa eugenia sestepa landscape design (6).png -> ...-03.webp

def optimize_image(src_name, out_name, max_w=1920, max_h=1280, quality=85):
    src_path = os.path.join(src_dir, src_name)
    out_path = os.path.join(out_dir, out_name)
    with Image.open(src_path) as im:
        if im.mode != "RGB":
            im = im.convert("RGB")
        w, h = im.size
        # fit within max_w x max_h preserving aspect ratio
        ratio = min(max_w / w, max_h / h, 1.0)
        new_size = (int(w * ratio), int(h * ratio))
        if new_size != (w, h):
            im = im.resize(new_size, Image.Resampling.LANCZOS)
        im.save(out_path, "WEBP", quality=quality, method=6)
        print(f"Saved {out_name} ({im.size[0]}x{im.size[1]})")

def make_card(src_name, out_name, target_w=700, target_h=525, quality=85):
    # 4:3 card crop
    src_path = os.path.join(src_dir, src_name)
    out_path = os.path.join(out_dir, out_name)
    with Image.open(src_path) as im:
        if im.mode != "RGB":
            im = im.convert("RGB")
        w, h = im.size
        target_ratio = target_w / target_h
        current_ratio = w / h
        if current_ratio > target_ratio:
            new_w = int(h * target_ratio)
            left = (w - new_w) // 2
            im = im.crop((left, 0, left + new_w, h))
        else:
            new_h = int(w / target_ratio)
            top = (h - new_h) // 2
            im = im.crop((0, top, w, top + new_h))
        im = im.resize((target_w, target_h), Image.Resampling.LANCZOS)
        im.save(out_path, "WEBP", quality=quality, method=6)
        print(f"Saved card {out_name} ({target_w}x{target_h})")

# Generate 01, card, 02, 03
optimize_image("garden design mallorca santa eugenia sestepa landscape design (2).png", "garden-design-mallorca-santa-eugenia-sestepa-01.webp")
make_card("garden design mallorca santa eugenia sestepa landscape design (2).png", "garden-design-mallorca-santa-eugenia-sestepa-card.webp")
optimize_image("garden design mallorca santa eugenia sestepa landscape design (4).png", "garden-design-mallorca-santa-eugenia-sestepa-02.webp")
optimize_image("garden design mallorca santa eugenia sestepa landscape design (6).png", "garden-design-mallorca-santa-eugenia-sestepa-03.webp")

print("All 3 selected photos converted to high quality WebP successfully.")
