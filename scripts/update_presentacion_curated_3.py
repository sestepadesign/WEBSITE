file_path = r'g:\Meu Drive\1. WEBSITES\sestepa-design\codigo\public\presentacion-proyectos.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace Santa Eugenia block in presentation with only 3 photos: 01, 02 (new 07), 03
old_santa = """      // 13. Santa Eugènia (7 photos)
      { title: "Santa Eugènia", path: "/portfolio/terrace-garden-santa-eugenia/images/garden-design-mallorca-santa-eugenia-sestepa-01.webp", url: "/terrace-garden-santa-eugenia/" },
      { title: "Santa Eugènia", path: "/portfolio/terrace-garden-santa-eugenia/images/garden-design-mallorca-santa-eugenia-sestepa-02.webp", url: "/terrace-garden-santa-eugenia/" },
      { title: "Santa Eugènia", path: "/portfolio/terrace-garden-santa-eugenia/images/garden-design-mallorca-santa-eugenia-sestepa-03.webp", url: "/terrace-garden-santa-eugenia/" },
      { title: "Santa Eugènia", path: "/portfolio/terrace-garden-santa-eugenia/images/garden-design-mallorca-santa-eugenia-sestepa-04.webp", url: "/terrace-garden-santa-eugenia/" },
      { title: "Santa Eugènia", path: "/portfolio/terrace-garden-santa-eugenia/images/garden-design-mallorca-santa-eugenia-sestepa-05.webp", url: "/terrace-garden-santa-eugenia/" },
      { title: "Santa Eugènia", path: "/portfolio/terrace-garden-santa-eugenia/images/garden-design-mallorca-santa-eugenia-sestepa-06.webp", url: "/terrace-garden-santa-eugenia/" },
      { title: "Santa Eugènia", path: "/portfolio/terrace-garden-santa-eugenia/images/garden-design-mallorca-santa-eugenia-sestepa-07.webp", url: "/terrace-garden-santa-eugenia/" },"""

new_santa = """      // 13. Santa Eugènia (3 photos)
      { title: "Santa Eugènia", path: "/portfolio/terrace-garden-santa-eugenia/images/garden-design-mallorca-santa-eugenia-sestepa-01.webp", url: "/terrace-garden-santa-eugenia/" },
      { title: "Santa Eugènia", path: "/portfolio/terrace-garden-santa-eugenia/images/garden-design-mallorca-santa-eugenia-sestepa-02.webp", url: "/terrace-garden-santa-eugenia/" },
      { title: "Santa Eugènia", path: "/portfolio/terrace-garden-santa-eugenia/images/garden-design-mallorca-santa-eugenia-sestepa-03.webp", url: "/terrace-garden-santa-eugenia/" },"""

content_norm = content.replace('\r\n', '\n')
if old_santa.replace('\r\n', '\n') in content_norm:
    content_norm = content_norm.replace(old_santa.replace('\r\n', '\n'), new_santa.replace('\r\n', '\n'))
    print("Replaced 7 photos block with 3 photos block.")

# Update counts:
# Santa Eugenia has 3 photos
# Total is 75 photos (72 others + 3 Santa Eugenia = 75)
import re
content_norm = re.sub(r'data-filter="Santa Eug[eè]nia">Santa Eug[eè]nia \(\d+\)', 'data-filter="Santa Eugènia">Santa Eugènia (3)', content_norm)
content_norm = re.sub(r'<span>Santa Eug[eè]nia</span>\s*<span class="dropdown-opt-count">\d+</span>', '<span>Santa Eugènia</span>\n                <span class="dropdown-opt-count">3</span>', content_norm)
content_norm = re.sub(r'data-filter="all">Todos \(\d+\)', 'data-filter="all">Todos (75)', content_norm)
content_norm = re.sub(r'<span>Todos los projetos</span>\s*<span class="dropdown-opt-count">\d+</span>', '<span>Todos los proyectos</span>\n                <span class="dropdown-opt-count">75</span>', content_norm)
content_norm = re.sub(r'<span>Todos los proyectos</span>\s*<span class="dropdown-opt-count">\d+</span>', '<span>Todos los projetos</span>\n                <span class="dropdown-opt-count">75</span>', content_norm)
content_norm = re.sub(r'<span id="presSearchCount">\d+ fotos</span>', '<span id="presSearchCount">75 fotos</span>', content_norm)

if '\r\n' in content:
    final_c = content_norm.replace('\n', '\r\n')
else:
    final_c = content_norm

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(final_c)

print("Updated presentation file.")
