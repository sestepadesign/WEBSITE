import os
from PIL import Image

src_dir = r"G:\Meu Drive\1. WEBSITES\sestepa-design\originais-grandes\santa-eugenia"
pub_dir = r"g:\Meu Drive\1. WEBSITES\sestepa-design\codigo\public\portfolio\terrace-garden-santa-eugenia\images"

# The 3 principal photos first:
# 1. Hero: garden design mallorca santa eugenia sestepa landscape design (6).png
# 2. garden design mallorca santa eugenia sestepa landscape design (4).png
# 3. garden design mallorca santa eugenia sestepa landscape design (2).png
principal_photos = [
    "garden design mallorca santa eugenia sestepa landscape design (6).png",
    "garden design mallorca santa eugenia sestepa landscape design (4).png",
    "garden design mallorca santa eugenia sestepa landscape design (2).png"
]

all_entries = os.listdir(src_dir)
other_photos = sorted([
    f for f in all_entries 
    if os.path.isfile(os.path.join(src_dir, f)) and f not in principal_photos and f.lower().endswith(('.png', '.jpg', '.jpeg'))
])

ordered_project_photos = principal_photos + other_photos

print(f"Total project photos to process: {len(ordered_project_photos)}")
for i, f in enumerate(ordered_project_photos, 1):
    print(f"  {i:02d}: {f}")

for idx, f in enumerate(ordered_project_photos, start=1):
    src_p = os.path.join(src_dir, f)
    out_name = f"garden-design-mallorca-santa-eugenia-sestepa-{idx:02d}.webp"
    out_p = os.path.join(pub_dir, out_name)
    
    with Image.open(src_p) as im:
        if im.mode != "RGB":
            im = im.convert("RGB")
        w, h = im.size
        ratio = min(1920 / w, 1280 / h, 1.0)
        new_size = (int(w * ratio), int(h * ratio))
        if new_size != (w, h):
            im_resized = im.resize(new_size, Image.Resampling.LANCZOS)
        else:
            im_resized = im
        im_resized.save(out_p, "WEBP", quality=85, method=6)
        print(f"Generated {out_name} from {f} ({im_resized.size[0]}x{im_resized.size[1]})")

# Card: 4:3 from Hero (garden design mallorca santa eugenia sestepa landscape design (6).png)
hero_src = os.path.join(src_dir, principal_photos[0])
card_p = os.path.join(pub_dir, "garden-design-mallorca-santa-eugenia-sestepa-card.webp")
with Image.open(hero_src) as im:
    if im.mode != "RGB":
        im = im.convert("RGB")
    w, h = im.size
    target_w, target_h = 700, 525
    target_ratio = target_w / target_h
    current_ratio = w / h
    if current_ratio > target_ratio:
        new_w = int(h * target_ratio)
        left = (w - new_w) // 2
        im_crop = im.crop((left, 0, left + new_w, h))
    else:
        new_h = int(w / target_ratio)
        top = (h - new_h) // 2
        im_crop = im.crop((0, top, w, top + new_h))
    im_card = im_crop.resize((target_w, target_h), Image.Resampling.LANCZOS)
    im_card.save(card_p, "WEBP", quality=85, method=6)
    print("Generated card from Hero")

print("Project photos batch conversion completed.")
