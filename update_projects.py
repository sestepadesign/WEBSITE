import re
import os

filepath = 'src/data/projects.ts'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

def replacer(match):
    original = match.group(0)
    if original.lower().endswith(('.jpg', '.png', '.jpeg')):
        # Replace spaces with hyphens, remove parens, change ext to webp
        base = os.path.splitext(original)[0]
        safe_base = base.replace(' ', '-').replace('(', '').replace(')', '')
        return safe_base + '.webp'
    return original

# We only want to replace within the images array of Jardin Mediterraneo and Sant Llorenc, but actually we can just replace all .jpg/.png strings in the whole file that match those specific filenames. Or better yet, just replace ANY string ending in .jpg/.png that looks like an image filename in the images array.
# Let's just use regex to find all strings inside quotes that end in .jpg or .png or .jpeg
# Because we converted all of them in those two directories. Wait, what if there are .jpg files in OTHER projects? We didn't convert those.
# Let's parse just the Jardin Mediterraneo and Sant Llorenc arrays.

def replace_in_project(project_slug, text):
    pattern = r'(slug:\s*["\']' + project_slug + r'["\'][\s\S]*?images:\s*\[)([\s\S]*?)(\])'
    def match_replacer(m):
        prefix = m.group(1)
        images_array = m.group(2)
        suffix = m.group(3)
        
        # Replace inside images_array
        def image_string_replacer(im):
            val = im.group(1)
            ext = im.group(2)
            base = val
            safe_base = base.replace(' ', '-').replace('(', '').replace(')', '')
            return f'"{safe_base}.webp"'

        new_array = re.sub(r'["\'](.*?)(\.jpg|\.png|\.jpeg)["\']', image_string_replacer, images_array, flags=re.IGNORECASE)
        return prefix + new_array + suffix

    return re.sub(pattern, match_replacer, text)

content = replace_in_project('jardin-mediterraneo', content)
content = replace_in_project('sant-llorenc', content)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("projects.ts updated!")
