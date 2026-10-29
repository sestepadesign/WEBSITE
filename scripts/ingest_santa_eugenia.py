import os
import shutil
from PIL import Image

src_dir = r"J:\Meu Drive\S'ESTEPA 2026\FOTOS 2026\SANTA EUGENIA (JAUME)\SELECCIONADAS Y EDITADAS PARA SESTEPA DESIGN"
dest_orig = r"g:\Meu Drive\1. WEBSITES\sestepa-design\originais-grandes\santa-eugenia"
dest_thumbs = r"g:\Meu Drive\1. WEBSITES\sestepa-design\codigo\scripts\thumbs"

os.makedirs(dest_orig, exist_ok=True)
os.makedirs(dest_thumbs, exist_ok=True)

files = [f for f in os.listdir(src_dir) if f.lower().endswith(('.png', '.jpg', '.jpeg'))]

print(f"Copying {len(files)} files to originais-grandes...")
for f in files:
    src_path = os.path.join(src_dir, f)
    dst_path = os.path.join(dest_orig, f)
    if not os.path.exists(dst_path) or os.path.getsize(dst_path) != os.path.getsize(src_path):
        print(f"Copying: {f}")
        shutil.copy2(src_path, dst_path)
    
    # Generate small thumb to inspect
    thumb_path = os.path.join(dest_thumbs, os.path.splitext(f)[0] + ".jpg")
    if not os.path.exists(thumb_path):
        with Image.open(dst_path) as im:
            im.thumbnail((800, 600))
            im.convert("RGB").save(thumb_path, "JPEG", quality=80)
        print(f"Created thumb: {thumb_path}")

print("Copy and thumb generation complete.")
