import os
import sys
from PIL import Image

def generate_og_image():
    # Source image candidate paths
    candidates = [
        os.path.join("public", "portfolio", "sant-llorenc", "images tratadas com magnific", "FOTOS SELECIONADAS", "garden-design-mallorca-sestepa-landscape-design-sant-llorenc-18.jpg"),
        os.path.join("public", "portfolio", "sant-llorenc", "images tratadas com magnific", "garden-design-mallorca-sestepa-landscape-design-sant-llorenc-18.jpg"),
        os.path.join("public", "portfolio", "sant-llorenc", "images tratadas com magnific", "resultado-ceu-azul", "garden-design-mallorca-sestepa-landscape-design-sant-llorenc-18.jpg"),
        os.path.join("public", "portfolio", "sant-llorenc", "images", "garden-design-mallorca-sestepa-landscape-design-sant-llorenc-18.webp")
    ]
    
    src_path = None
    for cand in candidates:
        full_cand = os.path.join(os.getcwd(), cand) if not os.path.isabs(cand) else cand
        if os.path.exists(full_cand):
            src_path = full_cand
            print(f"Found source image: {src_path}")
            break
            
    if not src_path:
        print("Error: Could not locate source image for Sant Llorenç 18.")
        sys.exit(1)
        
    out_dir = os.path.join("public", "portfolio", "sant-llorenc", "images")
    out_path = os.path.join(out_dir, "garden-design-mallorca-sestepa-landscape-design-sant-llorenc-18.jpg")
    
    os.makedirs(out_dir, exist_ok=True)
    
    # Open image
    img = Image.open(src_path)
    print(f"Original size: {img.size}, mode: {img.mode}, format: {img.format}")
    
    # Convert to RGB if not RGB (e.g. RGBA or P)
    if img.mode != "RGB":
        img = img.convert("RGB")
        
    target_width = 1200
    target_height = 630
    target_ratio = target_width / target_height # ~1.90476
    
    src_width, src_height = img.size
    src_ratio = src_width / src_height
    
    # Center crop to 1.90476 ratio
    if src_ratio > target_ratio:
        # Source is wider than target ratio: crop width
        new_width = int(src_height * target_ratio)
        offset = (src_width - new_width) // 2
        crop_box = (offset, 0, offset + new_width, src_height)
    else:
        # Source is taller than target ratio: crop height (center crop)
        new_height = int(src_width / target_ratio)
        offset = (src_height - new_height) // 2
        crop_box = (0, offset, src_width, offset + new_height)
        
    print(f"Cropping with box: {crop_box}")
    img_cropped = img.crop(crop_box)
    
    # Resize with high quality Lanczos resampling
    img_resized = img_cropped.resize((target_width, target_height), Image.Resampling.LANCZOS)
    
    # Save as JPEG sRGB baseline quality=85
    img_resized.save(
        out_path,
        format="JPEG",
        quality=85,
        optimize=True,
        progressive=False
    )
    
    file_size = os.path.getsize(out_path)
    file_size_kb = file_size / 1024.0
    print(f"Generated OG image: {out_path}")
    print(f"Dimensions: {img_resized.size} (Width: {img_resized.size[0]}, Height: {img_resized.size[1]})")
    print(f"File size: {file_size} bytes ({file_size_kb:.2f} KB)")
    
    if file_size < 307200: # < 300 KB
        print("Success: Image complies with WhatsApp strict < 300 KB limit!")
    else:
        print("Warning: Image exceeds 300 KB limit!")

if __name__ == "__main__":
    generate_og_image()
