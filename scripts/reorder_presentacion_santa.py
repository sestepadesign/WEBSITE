file_path = r'g:\Meu Drive\1. WEBSITES\sestepa-design\codigo\public\presentacion-proyectos.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

old_order = """      // 13. Santa Eugènia (3 photos)
      { title: "Santa Eugènia", path: "/portfolio/terrace-garden-santa-eugenia/images/garden-design-mallorca-santa-eugenia-sestepa-01.webp", url: "/terrace-garden-santa-eugenia/" },
      { title: "Santa Eugènia", path: "/portfolio/terrace-garden-santa-eugenia/images/garden-design-mallorca-santa-eugenia-sestepa-02.webp", url: "/terrace-garden-santa-eugenia/" },
      { title: "Santa Eugènia", path: "/portfolio/terrace-garden-santa-eugenia/images/garden-design-mallorca-santa-eugenia-sestepa-03.webp", url: "/terrace-garden-santa-eugenia/" },"""

new_order = """      // 13. Santa Eugènia (3 photos)
      { title: "Santa Eugènia", path: "/portfolio/terrace-garden-santa-eugenia/images/garden-design-mallorca-santa-eugenia-sestepa-03.webp", url: "/terrace-garden-santa-eugenia/" },
      { title: "Santa Eugènia", path: "/portfolio/terrace-garden-santa-eugenia/images/garden-design-mallorca-santa-eugenia-sestepa-01.webp", url: "/terrace-garden-santa-eugenia/" },
      { title: "Santa Eugènia", path: "/portfolio/terrace-garden-santa-eugenia/images/garden-design-mallorca-santa-eugenia-sestepa-02.webp", url: "/terrace-garden-santa-eugenia/" },"""

content_norm = content.replace('\r\n', '\n')
old_norm = old_order.replace('\r\n', '\n')
new_norm = new_order.replace('\r\n', '\n')

if old_norm in content_norm:
    content_norm = content_norm.replace(old_norm, new_norm)
    if '\r\n' in content:
        final_c = content_norm.replace('\n', '\r\n')
    else:
        final_c = content_norm
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(final_c)
    print("Reordered Santa Eugenia presentation items successfully.")
else:
    print("Pattern not found in presentation file.")
