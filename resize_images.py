import os
from PIL import Image
import glob

# Paths
dir1 = r"g:\Meu Drive\1. WEBSITES\sestepa-design\codigo\public\portfolio\santa-eugenia\images"
dir2 = r"g:\Meu Drive\1. WEBSITES\sestepa-design\codigo\public\portfolio\terrace-garden-santa-eugenia\images"

def resize_and_convert(directory):
    # Find all images starting with '1. garden' or 'garden design'
    pattern = os.path.join(directory, "*garden design*.*")
    files = glob.glob(pattern)
    
    for file in files:
        if file.lower().endswith('.jpg') and os.path.getsize(file) < 1000000:
            # Skip already small jpgs
            continue
            
        print(f"Processing {file}")
        try:
            img = Image.open(file)
            # Convert to RGB (to save as JPG)
            if img.mode in ("RGBA", "P"):
                img = img.convert("RGB")
            
            # Resize
            max_width = 1920
            if img.width > max_width:
                ratio = max_width / img.width
                new_size = (max_width, int(img.height * ratio))
                img = img.resize(new_size, Image.Resampling.LANCZOS)
                
            # Save as JPG
            new_filename = os.path.splitext(file)[0] + ".jpg"
            img.save(new_filename, "JPEG", quality=82, optimize=True)
            
            # If the original was a PNG or it's a different file, we can delete the old one
            if file != new_filename:
                os.remove(file)
                print(f"Saved {new_filename} and removed old {file}")
            else:
                print(f"Overwrote {new_filename} with compressed version")
                
        except Exception as e:
            print(f"Error processing {file}: {e}")

print("Processing dir1...")
resize_and_convert(dir1)
print("Processing dir2...")
resize_and_convert(dir2)
print("Done!")
