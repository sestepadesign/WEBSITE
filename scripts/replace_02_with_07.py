from PIL import Image
import os

src_j = r"J:\Meu Drive\S'ESTEPA 2026\FOTOS 2026\SANTA EUGENIA (JAUME)\SELECCIONADAS Y EDITADAS PARA SESTEPA DESIGN\garden design mallorca santa eugenia sestepa landscape design (7).png"
orig_g = r"g:\Meu Drive\1. WEBSITES\sestepa-design\originais-grandes\santa-eugenia\garden design mallorca santa eugenia sestepa landscape design (7).png"
dest_webp = r"g:\Meu Drive\1. WEBSITES\sestepa-design\codigo\public\portfolio\terrace-garden-santa-eugenia\images\garden-design-mallorca-santa-eugenia-sestepa-02.webp"

# Read from J: or orig_g
input_path = src_j if os.path.exists(src_j) else orig_g

with Image.open(input_path) as im:
    if im.mode != "RGB":
        im = im.convert("RGB")
    w, h = im.size
    ratio = min(1920 / w, 1280 / h, 1.0)
    new_size = (int(w * ratio), int(h * ratio))
    if new_size != (w, h):
        im = im.resize(new_size, Image.Resampling.LANCZOS)
    im.save(dest_webp, "WEBP", quality=85, method=6)
    print(f"Replaced 02.webp with photo (7) ({im.size[0]}x{im.size[1]})")
