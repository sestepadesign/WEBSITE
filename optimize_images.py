import os
from PIL import Image

dirs = [
    'public/portfolio/jardin-mediterraneo/images',
    'public/portfolio/sant-llorenc'
]

for d in dirs:
    if not os.path.exists(d): continue
    for filename in os.listdir(d):
        if filename.lower().endswith(('.jpg', '.png', '.jpeg')):
            filepath = os.path.join(d, filename)
            base = os.path.splitext(filename)[0]
            # Replace spaces with hyphens, remove parentheses
            safe_base = base.replace(' ', '-').replace('(', '').replace(')', '')
            outpath = os.path.join(d, safe_base + '.webp')
            
            print(f"Converting {filepath} to {outpath}")
            try:
                with Image.open(filepath) as img:
                    img.save(outpath, 'webp', quality=80)
                os.remove(filepath)
            except Exception as e:
                print(f"Failed to process {filepath}: {e}")
