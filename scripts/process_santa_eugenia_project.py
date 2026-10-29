import os
import shutil
from PIL import Image

src_j = r"J:\Meu Drive\S'ESTEPA 2026\FOTOS 2026\SANTA EUGENIA (JAUME)\SELECCIONADAS Y EDITADAS PARA SESTEPA DESIGN"
orig_g = r"g:\Meu Drive\1. WEBSITES\sestepa-design\originais-grandes\santa-eugenia"
pub_images = r"g:\Meu Drive\1. WEBSITES\sestepa-design\codigo\public\portfolio\terrace-garden-santa-eugenia\images"

os.makedirs(orig_g, exist_ok=True)
os.makedirs(pub_images, exist_ok=True)

# 1. Clean stale index.lock if present
lock_file = r"g:\Meu Drive\1. WEBSITES\sestepa-design\codigo\.git\index.lock"
if os.path.exists(lock_file):
    try:
        os.remove(lock_file)
        print("Removed stale .git/index.lock")
    except Exception as e:
        print("Could not remove lock:", e)

# 2. List all 7 edited photos from J:
j_files = sorted([f for f in os.listdir(src_j) if f.lower().endswith(('.png', '.jpg', '.jpeg'))])
print(f"Total edited photos in J: {len(j_files)}")

# The user explicitly mandated:
# Hero and Destaque: "garden design mallorca santa eugenia sestepa landscape design (6).png"
hero_file = "garden design mallorca santa eugenia sestepa landscape design (6).png"

# Order: Hero first, followed by all remaining edited photos
ordered_files = [hero_file] + [f for f in j_files if f != hero_file]

print("Processing files in order:")
for i, f in enumerate(ordered_files):
    print(f"  {i+1}: {f}")

# Copy all to originais-grandes
for f in ordered_files:
    src_p = os.path.join(src_j, f)
    dst_p = os.path.join(orig_g, f)
    if not os.path.exists(dst_p) or os.path.getsize(dst_p) != os.path.getsize(src_p):
        shutil.copy2(src_p, dst_p)

# Clean unapproved from originais-grandes
for f in os.listdir(orig_g):
    if f not in ordered_files and not os.path.isdir(os.path.join(orig_g, f)):
        os.remove(os.path.join(orig_g, f))

# Convert each to WebP
# 01 will be garden-design-mallorca-santa-eugenia-sestepa-01.webp (THE HERO - photo 6)
# card will be garden-design-mallorca-santa-eugenia-sestepa-card.webp (4:3 from photo 6)
webp_list = []

for idx, f in enumerate(ordered_files, start=1):
    src_p = os.path.join(orig_g, f)
    out_name = f"garden-design-mallorca-santa-eugenia-sestepa-{idx:02d}.webp"
    out_p = os.path.join(pub_images, out_name)
    webp_list.append(f"/portfolio/terrace-garden-santa-eugenia/images/{out_name}")
    
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
        print(f"Generated {out_name} ({im_resized.size[0]}x{im_resized.size[1]})")

# Generate card from hero (photo 6)
hero_src = os.path.join(orig_g, hero_file)
card_p = os.path.join(pub_images, "garden-design-mallorca-santa-eugenia-sestepa-card.webp")
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
    print(f"Generated card from {hero_file}")

# Clean old/excess webp files in pub_images if any
expected_webps = {f"garden-design-mallorca-santa-eugenia-sestepa-{idx:02d}.webp" for idx in range(1, len(ordered_files)+1)}
expected_webps.add("garden-design-mallorca-santa-eugenia-sestepa-card.webp")

for f in os.listdir(pub_images):
    if f.endswith('.webp') and f not in expected_webps:
        os.remove(os.path.join(pub_images, f))
        print(f"Removed old WebP: {f}")

print("Images processing completed successfully.")
