file_path = r'g:\Meu Drive\1. WEBSITES\sestepa-design\codigo\public\presentacion-proyectos.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace Santa Eugenia block in presentation with all 7 photos
# Hero (photo 6) is 01.webp
old_santa = """      // 13. Santa Eugènia (3 photos)
      { title: "Santa Eugènia", path: "/portfolio/terrace-garden-santa-eugenia/images/garden-design-mallorca-santa-eugenia-sestepa-01.webp", url: "/terrace-garden-santa-eugenia/" },
      { title: "Santa Eugènia", path: "/portfolio/terrace-garden-santa-eugenia/images/garden-design-mallorca-santa-eugenia-sestepa-02.webp", url: "/terrace-garden-santa-eugenia/" },
      { title: "Santa Eugènia", path: "/portfolio/terrace-garden-santa-eugenia/images/garden-design-mallorca-santa-eugenia-sestepa-03.webp", url: "/terrace-garden-santa-eugenia/" },"""

new_santa = """      // 13. Santa Eugènia (7 photos)
      { title: "Santa Eugènia", path: "/portfolio/terrace-garden-santa-eugenia/images/garden-design-mallorca-santa-eugenia-sestepa-01.webp", url: "/terrace-garden-santa-eugenia/" },
      { title: "Santa Eugènia", path: "/portfolio/terrace-garden-santa-eugenia/images/garden-design-mallorca-santa-eugenia-sestepa-02.webp", url: "/terrace-garden-santa-eugenia/" },
      { title: "Santa Eugènia", path: "/portfolio/terrace-garden-santa-eugenia/images/garden-design-mallorca-santa-eugenia-sestepa-03.webp", url: "/terrace-garden-santa-eugenia/" },
      { title: "Santa Eugènia", path: "/portfolio/terrace-garden-santa-eugenia/images/garden-design-mallorca-santa-eugenia-sestepa-04.webp", url: "/terrace-garden-santa-eugenia/" },
      { title: "Santa Eugènia", path: "/portfolio/terrace-garden-santa-eugenia/images/garden-design-mallorca-santa-eugenia-sestepa-05.webp", url: "/terrace-garden-santa-eugenia/" },
      { title: "Santa Eugènia", path: "/portfolio/terrace-garden-santa-eugenia/images/garden-design-mallorca-santa-eugenia-sestepa-06.webp", url: "/terrace-garden-santa-eugenia/" },
      { title: "Santa Eugènia", path: "/portfolio/terrace-garden-santa-eugenia/images/garden-design-mallorca-santa-eugenia-sestepa-07.webp", url: "/terrace-garden-santa-eugenia/" },"""

# Also handle if it had 6 photos previously
old_santa_6 = """      // 13. Santa Eugènia (6 photos)
      { title: "Santa Eugènia", path: "/portfolio/terrace-garden-santa-eugenia/images/garden-design-mallorca-santa-eugenia-sestepa-01.webp", url: "/terrace-garden-santa-eugenia/" },
      { title: "Santa Eugènia", path: "/portfolio/terrace-garden-santa-eugenia/images/garden-design-mallorca-santa-eugenia-sestepa-02.webp", url: "/terrace-garden-santa-eugenia/" },
      { title: "Santa Eugènia", path: "/portfolio/terrace-garden-santa-eugenia/images/garden-design-mallorca-santa-eugenia-sestepa-03.webp", url: "/terrace-garden-santa-eugenia/" },
      { title: "Santa Eugènia", path: "/portfolio/terrace-garden-santa-eugenia/images/garden-design-mallorca-santa-eugenia-sestepa-04.webp", url: "/terrace-garden-santa-eugenia/" },
      { title: "Santa Eugènia", path: "/portfolio/terrace-garden-santa-eugenia/images/garden-design-mallorca-santa-eugenia-sestepa-05.webp", url: "/terrace-garden-santa-eugenia/" },
      { title: "Santa Eugènia", path: "/portfolio/terrace-garden-santa-eugenia/images/garden-design-mallorca-santa-eugenia-sestepa-06.webp", url: "/terrace-garden-santa-eugenia/" },"""

content_norm = content.replace('\r\n', '\n')
if old_santa.replace('\r\n', '\n') in content_norm:
    content_norm = content_norm.replace(old_santa.replace('\r\n', '\n'), new_santa.replace('\r\n', '\n'))
    print("Replaced 3 photos block.")
elif old_santa_6.replace('\r\n', '\n') in content_norm:
    content_norm = content_norm.replace(old_santa_6.replace('\r\n', '\n'), new_santa.replace('\r\n', '\n'))
    print("Replaced 6 photos block.")

# Update counts:
# Santa Eugenia has 7 photos
# Total is 79 photos (72 others + 7 Santa Eugenia = 79)
import re
content_norm = re.sub(r'data-filter="Santa Eug[eè]nia">Santa Eug[eè]nia \(\d+\)', 'data-filter="Santa Eugènia">Santa Eugènia (7)', content_norm)
content_norm = re.sub(r'<span>Santa Eug[eè]nia</span>\s*<span class="dropdown-opt-count">\d+</span>', '<span>Santa Eugènia</span>\n                <span class="dropdown-opt-count">7</span>', content_norm)
content_norm = re.sub(r'data-filter="all">Todos \(\d+\)', 'data-filter="all">Todos (79)', content_norm)
content_norm = re.sub(r'<span>Todos los proyectos</span>\s*<span class="dropdown-opt-count">\d+</span>', '<span>Todos los proyectos</span>\n                <span class="dropdown-opt-count">79</span>', content_norm)
content_norm = re.sub(r'<span id="presSearchCount">\d+ fotos</span>', '<span id="presSearchCount">79 fotos</span>', content_norm)

if '\r\n' in content:
    final_c = content_norm.replace('\n', '\r\n')
else:
    final_c = content_norm

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(final_c)

print("Updated presentation file with all 7 edited photos.")
