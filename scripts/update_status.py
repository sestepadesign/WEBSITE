file_path = r'g:\Meu Drive\1. WEBSITES\sestepa-design\codigo\STATUS.md'

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_entry = """### [2026-10-28] - Antigravity (Curadoria Santa Eugènia: Substituição por Melhores Fotos e Purga de Ativos Não Editados) — Homologado
- **Autor/agente:** Antigravity.
- **Acesso à unidade J:** Não houve acesso a J: nesta etapa.
- **Escopo:**
  1. Otimização e Conversão de Imagens:
     - Geração de 3 novos WebP otimizados em 1920x1280 (e card 700x525 4:3) para `public/portfolio/terrace-garden-santa-eugenia/images/`:
       - `garden-design-mallorca-santa-eugenia-sestepa-01.webp` (Capa/Hero em plena floração e iluminação viva).
       - `garden-design-mallorca-santa-eugenia-sestepa-card.webp` (Crop 4:3 para cards da galeria).
       - `garden-design-mallorca-santa-eugenia-sestepa-02.webp` (Gramado, árvore central e esferas escultóricas).
       - `garden-design-mallorca-santa-eugenia-sestepa-03.webp` (Escadaria frontal com agapanthus floridos).
  2. Atualização Estruturada de Dados:
     - `codigo/src/data/projects.ts`: mantidas exclusivamente as 3 fotos principais de Santa Eugènia, removendo as versões não tratadas / secas (04, 05, 06) e fallbacks JPG brutos.
     - `codigo/src/data/gallery-images.ts`: reduzido o conjunto de Santa Eugènia de 6 para as 3 melhores fotos.
     - `codigo/public/presentacion-proyectos.html`: atualizada a galeria de Santa Eugènia para 3 fotos, ajustando os contadores de "Todos (78)" para "Todos (75)" e "Santa Eugènia (6)" para "Santa Eugènia (3)" em dropdown, barra de pesquisa e pílulas.
  3. Sitemaps e Build:
     - `public/sitemap-images.xml` regenerado via script mestre com 284 imagens indexadas.
     - Validação estática executada com sucesso via Astro build local isolado (`preview_local.py build`, 157 páginas geradas sem erros).
- **Pendências:** Integrar "Foto 4" (Pedro) e Sant Llorenç (Editadas) assim que os arquivos forem confirmados em disco local.

"""

idx = -1
for i, line in enumerate(lines):
    if "### [2026-10-28] - Antigravity (Produção de Vídeos Remotion Studio Quality" in line:
        idx = i
        break

if idx != -1:
    lines.insert(idx, new_entry)
    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print("STATUS.md successfully updated.")
else:
    print("Marker not found.")
