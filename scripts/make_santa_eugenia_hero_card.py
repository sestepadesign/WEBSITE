import os
from PIL import Image

src_dir = r"g:\Meu Drive\1. WEBSITES\sestepa-design\originais-grandes\santa-eugenia"
out_dir = r"g:\Meu Drive\1. WEBSITES\sestepa-design\codigo\public\portfolio\terrace-garden-santa-eugenia\images"

src_photo = os.path.join(src_dir, "garden design mallorca santa eugenia sestepa landscape design (6).png")
card_path = os.path.join(out_dir, "garden-design-mallorca-santa-eugenia-sestepa-card.webp")

with Image.open(src_photo) as im:
    if im.mode != "RGB":
        im = im.convert("RGB")
    w, h = im.size
    target_w, target_h = 700, 525
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
    im.save(card_path, "WEBP", quality=85, method=6)
    print(f"Generated card from photo 03 (Agapanthus close up): {card_path}")
