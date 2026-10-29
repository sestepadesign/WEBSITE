import os
from PIL import Image

temp_dir = os.environ.get("TEMP", r"C:\Windows\Temp")
thumbs_dir = r"g:\Meu Drive\1. WEBSITES\sestepa-design\codigo\scripts\thumbs"

for name in ["old_01", "old_02", "old_05"]:
    src = os.path.join(temp_dir, f"{name}.webp")
    dst = os.path.join(thumbs_dir, f"{name}.jpg")
    if os.path.exists(src):
        try:
            with Image.open(src) as im:
                im.thumbnail((800, 600))
                im.convert("RGB").save(dst, "JPEG", quality=80)
            print(f"Saved {dst}")
        except Exception as e:
            print(f"Error converting {name}: {e}")
    else:
        print(f"File not found: {src}")
