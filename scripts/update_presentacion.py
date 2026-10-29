import re

file_path = r'g:\Meu Drive\1. WEBSITES\sestepa-design\codigo\public\presentacion-proyectos.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace dropdown Santa Eugenia count
pattern_dropdown = r'(<button type="button" class="dropdown-opt-btn" data-filter="Santa Eug[eè]nia">\s*<span>Santa Eug[eè]nia</span>\s*<span class="dropdown-opt-count">)6(</span>)'
new_content, count1 = re.subn(pattern_dropdown, r'\g<1>3\g<2>', content)

# Replace galleryItems Santa Eugenia (remove photos 4, 5, 6)
old_santa = '''      // 13. Santa Eugènia (6 photos)
      { title: "Santa Eugènia", path: "/portfolio/terrace-garden-santa-eugenia/images/garden-design-mallorca-santa-eugenia-sestepa-01.webp", url: "/terrace-garden-santa-eugenia/" },
      { title: "Santa Eugènia", path: "/portfolio/terrace-garden-santa-eugenia/images/garden-design-mallorca-santa-eugenia-sestepa-02.webp", url: "/terrace-garden-santa-eugenia/" },
      { title: "Santa Eugènia", path: "/portfolio/terrace-garden-santa-eugenia/images/garden-design-mallorca-santa-eugenia-sestepa-03.webp", url: "/terrace-garden-santa-eugenia/" },
      { title: "Santa Eugènia", path: "/portfolio/terrace-garden-santa-eugenia/images/garden-design-mallorca-santa-eugenia-sestepa-04.webp", url: "/terrace-garden-santa-eugenia/" },
      { title: "Santa Eugènia", path: "/portfolio/terrace-garden-santa-eugenia/images/garden-design-mallorca-santa-eugenia-sestepa-05.webp", url: "/terrace-garden-santa-eugenia/" },
      { title: "Santa Eugènia", path: "/portfolio/terrace-garden-santa-eugenia/images/garden-design-mallorca-santa-eugenia-sestepa-06.webp", url: "/terrace-garden-santa-eugenia/" },'''

new_santa = '''      // 13. Santa Eugènia (3 photos)
      { title: "Santa Eugènia", path: "/portfolio/terrace-garden-santa-eugenia/images/garden-design-mallorca-santa-eugenia-sestepa-01.webp", url: "/terrace-garden-santa-eugenia/" },
      { title: "Santa Eugènia", path: "/portfolio/terrace-garden-santa-eugenia/images/garden-design-mallorca-santa-eugenia-sestepa-02.webp", url: "/terrace-garden-santa-eugenia/" },
      { title: "Santa Eugènia", path: "/portfolio/terrace-garden-santa-eugenia/images/garden-design-mallorca-santa-eugenia-sestepa-03.webp", url: "/terrace-garden-santa-eugenia/" },'''

# Normalize line endings for replacement
content_norm = new_content.replace('\r\n', '\n')
old_norm = old_santa.replace('\r\n', '\n')
new_norm = new_santa.replace('\r\n', '\n')

if old_norm in content_norm:
    content_norm = content_norm.replace(old_norm, new_norm)
    count2 = 1
else:
    count2 = 0

# Restore CRLF if file was CRLF originally
if '\r\n' in content:
    final_content = content_norm.replace('\n', '\r\n')
else:
    final_content = content_norm

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(final_content)

print(f"Updated: dropdown={count1}, gallery={count2}")
