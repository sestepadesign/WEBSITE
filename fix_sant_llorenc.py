import os, json, re

p_dir = r'g:\Meu Drive\1. WEBSITES\sestepa-design\codigo\public\portfolio\sant-llorenc'
files = [f for f in os.listdir(p_dir) if f.endswith('.webp') and f != 'garden-design-mallorca-sant-llorenc-sestepa.webp']

img_str = ',\n      '.join(f'"{f}"' for f in files)

ts_file = r'g:\Meu Drive\1. WEBSITES\sestepa-design\codigo\src\data\projects.ts'
with open(ts_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace cover
content = re.sub(r'(slug:\s*"sant-llorenc".*?cover:\s*)"[^"]+"', r'\g<1>"/portfolio/sant-llorenc/garden-design-mallorca-sant-llorenc-sestepa.webp"', content, flags=re.DOTALL)

# Replace images array
content = re.sub(r'(slug:\s*"sant-llorenc".*?images:\s*\[).*?(\],\n\s*en:)', r'\g<1>\n      ' + img_str + r'\n    \g<2>', content, flags=re.DOTALL)

with open(ts_file, 'w', encoding='utf-8') as f:
    f.write(content)

print('Done fixing sant-llorenc')
