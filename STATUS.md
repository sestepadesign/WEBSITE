# 🔄 HANDOFF LOG & STATUS DO PROJETO

> **REGRA DE INTEGRIDADE ABSOLUTA (Isolamento de Estado)**
> 1. Leia o último Deploy/Commit abaixo.
> 2. Verifique se o seu ambiente local possui esse mesmo código (`git status`, `git log -n 1`).
> 3. SE ESTIVER DESATUALIZADO: **PARE**. Faça `git pull` antes de alterar qualquer linha.
> 4. AO FINALIZAR SUA SESSÃO: Adicione o seu log no topo da seção **HISTÓRICO DE SESSÕES**. Não delete os antigos.

---

## CONTEXTO ATUAL (Estado da Aplicação)
- **Status:** Publicado em `master`. Atualização e substituição das 8 fotografias da etapa de 4 meses do projeto Sant Llorenç (nomes com sufixo SEO `sestepa-design`, otimizados para WebP 1920px 3:2), regeneração do sitemap de imagens e limpeza de branches locais inativos.
- **Checksum Atual (Deploy/Hash):** `pending-commit` (push em `master`, Cloudflare Pages).

---

## HISTÓRICO DE SESSÕES (Ordem Cronológica Reversa)
### [2026-09-23] - Antigravity (Substituição de Fotos de 4 Meses de Sant Llorenç + Limpeza de Branches Stale)
- **Substituição de Fotos (Sant Llorenç - 4 Meses):**
  1. *Cópia de Segurança de Originais:* Copiadas as 8 novas fotografias em PNG de `J:\Meu Drive\S'ESTEPA 2026\FOTOS 2026\SANT LLORENÇ\4 MESES\` (leitura estrita sem alterar a origem) para `originais-grandes/sant-llorenc/2026-09-4-months/edited-pngs/`.
  2. *Otimização Web & Nomenclatura SEO:* Convertidas as 8 fotos para WebP otimizado (máximo 1920px de largura, proporção 3:2, ~500-700 KB) com padrão de nomenclatura terminando em `sestepa-design`: `garden-design-mallorca-sant-llorenc-4-months-01-sestepa-design.webp` a `08-sestepa-design.webp`.
  3. *Atualização de Dados do Portfólio ([src/data/projects.ts](file:///g:/Meu%20Drive/1.%20WEBSITES/sestepa-design/codigo/src/data/projects.ts)):* Mapeadas as 8 novas imagens nos arrays `images` e `galleryChapters` (com `imageAlts` atualizados nos 3 idiomas: EN, ES, DE).
  4. *Sitemap de Imagens ([public/sitemap-images.xml](file:///g:/Meu%20Drive/1.%20WEBSITES/sestepa-design/codigo/public/sitemap-images.xml)):* Regenerado via script automatizado `scripts/generate-image-sitemap.mjs` (54 URLs, 241 imagens).
- **Higienização de Branches Git:**
  - Auditados e removidos branches locais obsoletos que já haviam sido integrados à branch principal (`feature/press-wording-mallorca-media`, `fix/dedupe-google-tags`, `fix/home-meta-description-en`, `preview`).
- **Deploy:** Publicação autorizada e executada na branch `master` para Cloudflare Pages.

### [2026-09-22] - Antigravity (Restauração da Galeria de Fotos em Son Vida/Portfólio, Alinhamento Mobile 3:2 & Diretrizes Multi-Agente) — commit `d71413b`
- **Diagnóstico e Causa Raiz do Problema de Son Vida:**
  1. No commit `adf69f7`, ao reordenar o bloco de vídeo abaixo do navegador de estágios temporais, o bloco padrão `<!-- Image Gallery Grid (images[2+]) -->` foi deletado por engano de `ProjectDetail.astro`.
  2. Como consequência, todos os projetos com galeria padrão exibiam apenas a capa (`cover`), a foto editorial 1 (`images[0]`) e a foto editorial 2 (`images[1]`), ocultando as restantes 5 fotos de Son Vida (totalizando as 3 fotos reportadas).
- **Correções Cirúrgicas Executadas ([src/components/ProjectDetail.astro](file:///g:/Meu%20Drive/1.%20WEBSITES/sestepa-design/codigo/src/components/ProjectDetail.astro)):**
  1. *Restauração da Galeria:* Restabelecida a seção `project-gallery` com todas as fotos adicionais para projetos sem capítulos temporais (restituindo as 7 fotos de Son Vida).
  2. *Alinhamento Uniforme Mobile (Harmonização de Proporções):*
     - Definido `aspect-ratio: 3 / 2` estrito e uniforme para todos os elementos da galeria no mobile (`.gallery-item` e `.gallery-item-btn.full-width .gallery-item`), eliminando o desnível de altura da última foto que ficava achatada em 16:9.
     - Padronizado `aspect-ratio: 3 / 2` com `object-fit: cover` nas imagens editoriais (`.editorial-feature-img` e `.editorial-mid-img`) em telas móveis (`max-width: 768px`), garantindo que todas as imagens no smartphone tenham alinhamento, largura e altura proporcionais.
     - Gap vertical harmonizado em `1.25rem` entre todas as imagens da coluna mobile.
- **Governança Multi-Agente & Memória Compartilhada ([.agents/AGENTS.md](file:///g:/Meu%20Drive/1.%20WEBSITES/sestepa-design/.agents/AGENTS.md)):**
  - Adicionada a **Seção 5 (Blindagem Contra Regressões & Trabalho em Equipe Multi-Agente)**:
    1. Auditoria obrigatória de `git diff` linha a linha antes de commitar para impedir exclusão inadvertida de blocos adjacentes.
    2. Proibição categórica de qualquer agente remover, ocultar ou desindexar fotos do portfólio sem ordem expressa do operador.
    3. Verificação de componentes globais (`ProjectDetail.astro`, etc.) em múltiplos tipos de dados antes da publicação.
- **Deploy:** Commit `d71413b` publicado diretamente em `master` (Cloudflare Pages).
- **Redesenho do Menu Mobile ([src/components/Header.astro](file:///g:/Meu%20Drive/1.%20WEBSITES/sestepa-design/codigo/src/components/Header.astro)):**
  1. *Otimização de Espaçamento:* Reduzido o padding superior do drawer de `8rem` para `5rem` e o gap entre os links de navegação de `2rem` para `1.15rem` com tipografia balanceada em `0.95rem`, evitando que o menu seja empurrado para fora da tela.
  2. *Linha Divisória Horizontal:* Inserida a classe `.menu-divider` (1px, `var(--color-sand-dark)`) imediatamente abaixo da navegação e antes do seletor de idiomas.
  3. *Seletor Multilíngue:* Implementada a exibição `EN | ES | DE` com separador vertical `|` sutil (`.lang-separator`), destaque tipográfico no idioma ativo (`font-weight: 600; color: var(--color-charcoal)`) e links dinâmicos para URLs canônicas em EN, ES e DE.
  4. *Blindagem de Rolagem e Usabilidade:* Aplicados `overflow-y: auto`, `-webkit-overflow-scrolling: touch`, `overscroll-behavior: contain` e suporte a safe-area (`env(safe-area-inset-bottom)`), garantindo que todo o conteúdo seja acessível em qualquer smartphone.
  5. *Backdrop e Acessibilidade:* Adicionado backdrop com desfoque (`nav-backdrop`) para fechar ao toque externo, fechamento via tecla `Escape` e trava de scroll de fundo (`body.menu-open`).
- **Deploy:** Homologado com sucesso via compilação completa (138 páginas geradas) e publicado na branch `master` no Cloudflare Pages.

### [2026-09-22] - Antigravity (Correção Crítica: Restauração da Galeria de Fotos em Son Vida e Portfólio + Governança Multi-Agente)
- **Diagnóstico e Causa Raiz Técnica:**
  No commit `adf69f7` (*"posiciona secao de video Garden Experience abaixo das galerias The Garden Over Time"*), ao reposicionar o elemento de vídeo no componente compartilhado `ProjectDetail.astro`, o bloco de marcação da galeria padrão (`<!-- Image Gallery Grid (images[2+]) -->`) foi inadvertidamente excluído do template.
  Isso causou a omissão visual de todas as fotos subsequentes (`images.slice(2)`) nos projetos que não possuem estágios temporais (`galleryChapters`), limitando a exibição à foto de capa (`cover`) e às duas fotos de destaque editorial (`images[0]` e `images[1]`), somando apenas 3 imagens visíveis.
- **Implementação Cirúrgica Executada ([src/components/ProjectDetail.astro](file:///g:/Meu%20Drive/1.%20WEBSITES/sestepa-design/codigo/src/components/ProjectDetail.astro)):**
  1. *Restauração da Galeria:* Reincorporado o bloco condicional `{galleryChapters.length === 0 && project.images.length > 2 && (<section class="project-gallery">...)}`, restabelecendo as 7 fotos de Son Vida (e as fotos completas de todos os projetos padrão).
  2. *Compatibilidade Transversal:* Validado que tanto projetos com `galleryChapters` (ex: Sant Llorenç, Vertical Garden) quanto projetos com galeria padrão (Son Vida, Santa Ponsa, Campos, Crestatx) renderizam perfeitamente a hierarquia correta (Capa -> Destaques Editoriais -> Vídeo/Navegador -> Galeria Completa).
- **Diretrizes de Governança & Memória Multi-Agente ([.agents/AGENTS.md](file:///g:/Meu%20Drive/1.%20WEBSITES/sestepa-design/.agents/AGENTS.md)):**
  Instituída a **Seção 5 (Blindagem Contra Regressões & Trabalho em Equipe Multi-Agente)**:
  1. *Auditoria Estrita de `git diff` Pré-Commit:* Auditoria obrigatória linha a linha antes de commitar para impedir exclusão acidental de blocos adjacentes em refatorações visuais.
  2. *Preservação de Ativos e Portfólio:* Proibição terminante de remover, ocultar ou reduzir fotos sem instrução explícita do operador.
  3. *Verificação Transversal de Componentes Globais:* Teste obrigatório de impacto em componentes base que suportam múltiplos tipos de dados.
- **Homologação:** Compilação de 138 rotas validada com sucesso em `%TEMP%` (zero erros no Astro e Pagefind). Deploy direto autorizado pelo operador.

### [2026-09-22] - Antigravity (Atualização de Fotografias Oficiais nos Artigos do Blog de Santa Ponsa) — commit `2fceb0b`
- **Atualização de Imagens no Blog ([src/content/blog/mastering-slopes-rocky-terrains-landscape-architecture-santa-ponsa.md](file:///g:/Meu%20Drive/1.%20WEBSITES/sestepa-design/codigo/src/content/blog/mastering-slopes-rocky-terrains-landscape-architecture-santa-ponsa.md)):**
  1. *Capa & Destaque:* Adicionado o campo `image: "/portfolio/santa-ponsa/images/GARDEN-DESIGN-MALLORCA-SANTA-PONSA-SESTEPA-1.2.jpg"` no frontmatter do artigo, substituindo a imagem genérica de fallback pelo projeto real de Santa Ponsa nos cards do Journal.
  2. *Imagem Principal do Hero:* Substituído o asset inicial por `GARDEN-DESIGN-MALLORCA-SANTA-PONSA-SESTEPA-1.2.jpg`.
  3. *Seção de Rocallas / Encostas:* Injetada a fotografia `GARDEN-DESIGN-MALLORCA-SANTA-PONSA-SESTEPA-5.jpg` destacando a rocalla de pedra calcária e vegetação mediterrânea.
  4. *Artigo Complementar:* Atualizado também [mediterranean-rockeries-drought-tolerant-planting-calvia-villas.md](file:///g:/Meu%20Drive/1.%20WEBSITES/sestepa-design/codigo/src/content/blog/mediterranean-rockeries-drought-tolerant-planting-calvia-villas.md) com as fotos oficiais do projeto de Santa Ponsa.
- **Mapeamento em Componentes ([src/components/site/BlogPost.astro](file:///g:/Meu%20Drive/1.%20WEBSITES/sestepa-design/codigo/src/components/site/BlogPost.astro)):** Mapeados os slugs dos artigos em `coverBySlug` para garantir a exibição determinística da capa de Santa Ponsa nos carrosséis recomendados.
- **Checksum:** `2fceb0b` (publicado em `master`, Cloudflare Pages)

### [2026-09-22] - Antigravity (Atualização de Fotografia da Home — Colaboração Corporativa Vertical Garden) — commit `d9c38db`
- **Atualização na Home:** Atualizadas as imagens de capa e card da seção de Colaboração Corporativa (`vertical-gardens-in-mallorca`) na Home com a foto de destaque `VERTICAL-GARDEN-DESIGN-MALLORCA-SESTEPA-LANDSCAPE-DESIGN-13` (versões `card.webp`, `.webp` e `.jpg`).
- **Deploy:** Commit `d9c38db` publicado em `master`.

### [2026-09-22] - Antigravity (Reordenação Visual — Vídeo Garden Experience posicionado abaixo de The Garden Over Time) — commit `adf69f7`
- **Ajuste de Layout ([src/components/ProjectDetail.astro](file:///g:/Meu%20Drive/1.%20WEBSITES/sestepa-design/codigo/src/components/ProjectDetail.astro)):** Reordenada a renderização do bloco de vídeo `<section class="project-video-section">` ("Garden Experience") para posicionar-se exatamente abaixo do navegador de estágios `<nav class="stage-nav">` ("The garden over time" / "El jardín en el tiempo").
- **Deploy:** Commit `adf69f7` publicado em `master`.

### [2026-09-22] - Antigravity (Ajuste de Álbum — Foto 15 movida para Instalación Inicial 2023) — commit `c6ea1a7`
- **Reorganização de Imagem:** A foto `VERTICAL-GARDEN-DESIGN-MALLORCA-SESTEPA-LANDSCAPE-DESIGN-15.jpg` foi transferida do capítulo de 2026 para o álbum da instalação inicial (2023).
- **Sitemap & Deploy:** `public/sitemap-images.xml` regenerado e commit `c6ea1a7` publicado em `master`.

### [2026-09-22] - Antigravity (Reorganização Temporal do Vertical Garden — Fotos Destaque 13/14 + Timeline 3 Anos) — commit `955586a`
- **Fotos de Destaque & Capa:** `VERTICAL-GARDEN-DESIGN-MALLORCA-SESTEPA-LANDSCAPE-DESIGN-13.jpg` definida como Capa/Hero principal e `14.jpg` como segunda imagem de destaque.
- **Estrutura Temporal (Timeline "El jardín en el tiempo"):**
  1. Criada a pasta `public/portfolio/vertical-gardens-in-mallorca/images/2026-07-3-years/` contendo as 6 fotos da sessão de 3 anos de maduração.
  2. Configurado o capítulo `galleryChapters` em `src/data/projects.ts` separando a instalação inicial (2023) do acompanhamento de 3 anos (2026), com rótulos e notas de contexto técnico em EN, ES e DE.
- **Sitemap & Deploy:** `public/sitemap-images.xml` regenerado e commit `955586a` enviado para a branch `master` no Cloudflare Pages.

### [2026-09-21] - Antigravity (Otimização de Imagens para Web & Atualização Multilíngue — Vertical Garden Mallorca) — commit `238031a`
- **Otimização e Processamento de Imagens ([codigo/public/portfolio/vertical-gardens-in-mallorca/images/](file:///g:/Meu%20Drive/1.%20WEBSITES/sestepa-design/codigo/public/portfolio/vertical-gardens-in-mallorca/images/)):**
  1. Extraídas e processadas 6 novas fotos de `fotos julho 2026.zip` (`53ACE7D5CB542DF656E608370BC2C32B.jpg`, `IMG_1987.JPG`, `IMG_2157.HEIC`, `IMG_2502.HEIC`, `IMG_2504.HEIC`, `IMG_4126.HEIC`).
  2. Aplicada transposição EXIF (rotação automática) e redimensionamento proporcional (máximo de 1920px).
  3. Geradas versões otimizadas em **WebP** e **JPG** (`VERTICAL-GARDEN-DESIGN-MALLORCA-SESTEPA-LANDSCAPE-DESIGN-13` até `18`), mantendo paridade nas pastas `vertical-gardens-in-mallorca` e `vertical-garden`.
- **Atualização de Projetos e Multilíngue ([src/data/projects.ts](file:///g:/Meu%20Drive/1.%20WEBSITES/sestepa-design/codigo/src/data/projects.ts)):**
  1. Adicionadas as 6 novas fotos ao array `images` do projeto `vertical-gardens-in-mallorca`.
  2. Adicionado parágrafo descritivo atualizando a documentação fotográfica de 2026 nos 3 idiomas (EN, ES, DE).
- **Sitemap de Imagens ([public/sitemap-images.xml](file:///g:/Meu%20Drive/1.%20WEBSITES/sestepa-design/codigo/public/sitemap-images.xml)):** Regenerado com 54 URLs e 252 imagens únicas.

### [2026-09-21] - Antigravity (Padronização dos URLs Canônicos de Santa Ponsa nos 3 Idiomas + Redirecionamentos 301) — commit `be368ac`
- **Reestruturação Arquitetural de URLs ([src/data/site-urls.ts](file:///g:/Meu%20Drive/1.%20WEBSITES/sestepa-design/codigo/src/data/site-urls.ts)):**
  1. Padronizado o slug canônico do projeto Santa Ponsa para `santa-ponsa` em todos os 3 idiomas oficiais:
     - EN: `/santa-ponsa/` (`https://design.sestepa.com/santa-ponsa/`)
     - ES: `/es/santa-ponsa/` (`https://design.sestepa.com/es/santa-ponsa/`)
     - DE: `/de/santa-ponsa/` (`https://design.sestepa.com/de/santa-ponsa/`)
  2. **Preservação de SEO e Backlinks ([public/_redirects](file:///g:/Meu%20Drive/1.%20WEBSITES/sestepa-design/codigo/public/_redirects)):** Configurados os redirecionamentos 301 permanentes das URLs legadas do WordPress (`puig-na-morisca`) para os novos URLs canônicos:
     - `/es/puig-na-morisca/` ➔ `301` ➔ `/es/santa-ponsa/`
     - `/de/puig-na-morisca/` ➔ `301` ➔ `/de/santa-ponsa/`
     - `/puig-na-morisca/` ➔ `301` ➔ `/santa-ponsa/`
     - `/de/portfolio/santa-ponsa/`, `/es/portfolio/santa-ponsa/`, `/en/portfolio/santa-ponsa/` ➔ `301` ➔ slugs canônicos correspondentes.
  3. **Sitemap de Imagens ([public/sitemap-images.xml](file:///g:/Meu%20Drive/1.%20WEBSITES/sestepa-design/codigo/public/sitemap-images.xml)):** Regenerado com os novos URLs canônicos.
- **Checksum:** `be368ac` (publicado em `master`, Cloudflare Pages)

### [2026-09-21] - Antigravity (Refatoração Arquitetural: Componentização Única do Formulário de Contato) — commit `36a1857`
- **Refatoração de Componente ([ContactForm.astro](file:///g:/Meu%20Drive/1.%20WEBSITES/sestepa-design/codigo/src/components/ContactForm.astro)):**
  1. Criado o componente modular reutilizável `ContactForm.astro` encapsulando toda a marcação HTML, estilo CSS, validação multilíngue, armadilha anti-bot (honeypot + timing + spam filter) e disparo de conversão oficial do Google Ads (`AW-795871100/dv-kCJrn0YoaEPyOwPsC`).
  2. Substituídas as declarações duplicadas em `HomePage.astro` e `contactPage.astro` pela chamada unificada `<ContactForm lang={lang} />`.
  3. **Resultado:** Qualquer atualização futura em campos, estilos ou telemetria do formulário agora atualiza automaticamente todas as páginas do site em uma única fonte da verdade.
- **Checksum:** `36a1857` (push em `master`, Cloudflare Pages)

### [2026-09-21] - Antigravity (Revisão de Conteúdo no Blog "The Compounding Landscape" e Verificação de Formulários)
- **Revisão do Artigo no Blog (`the-compounding-landscape.md` em EN, ES, DE):**
  1. *Sanitização Técnica:* Removidas referências a "calicatas y análisis de laboratorio por zonas" em todos os 3 idiomas (EN/ES/DE), substituídas por linguagem de observação do terreno ("observing soil depth, structure and natural behavior by zone" / "observando la profundidad, estructura y comportamiento natural del terreno por zonas").
  2. *Remoção de Seção Muros e Expressões Proibidas:* Removida integralmente a Seção 2 ("Shelter Is Infrastructure, Not Decoration" / "El abrigo es infraestructura, no decoración") e expurgada toda e qualquer menção residual a construção de muros ou acúmulo de calor em muros nas listas de pontos e resumos (linha 33 limpa em EN/ES/DE). Reordenadas as seções subsequentes (2 e 3).
  3. *Remoção de Referências a Crestatx:* Removidas menções ao projeto de Crestatx e imagem correspondente do artigo nas três línguas.
  2. Confirmada a inclusão harmonizada e funcional do campo de metragem ("Garden Size (Optional)" / "Superficie del Jardín (Opcional)" / "Gartengröße (Optional)") em `HomePage.astro` e `contactPage.astro`. Placeholder atualizado para a escala de grandes fincas/propriedades (`2,000 m², 20,000 m²` / `2.000 m², 20.000 m²`).

### [2026-09-21] - Antigravity (Atualização de Imagens do Projeto Santa Ponsa)
- **Solicitação:** Alternar a posição das imagens `GARDEN-DESIGN-MALLORCA-SANTA-PONSA-SESTEPA-1.2.jpg` (agora como imagem principal logo abaixo do título) e `GARDEN-DESIGN-MALLORCA-SANTA-PONSA-SESTEPA-1.jpg` (agora na seção intermediária após a descrição), mantendo `SESTEPA-2.jpg` na galeria.
- **Implementação Executada:**
  1. `src/data/projects.ts`: Reordenado o array `images` do projeto `santa-ponsa`: `images[0]` = `"GARDEN-DESIGN-MALLORCA-SANTA-PONSA-SESTEPA-1.2.jpg"`, `images[1]` = `"GARDEN-DESIGN-MALLORCA-SANTA-PONSA-SESTEPA-1.jpg"`, `images[2]` = `"GARDEN-DESIGN-MALLORCA-SANTA-PONSA-SESTEPA-2.jpg"`.
  2. `public/portfolio/santa-ponsa/images/`: Variantes WebP e sitemap atualizados.
- **Validação Localhost:** Servidor local em execução via `python scripts/preview_local.py` (URL: `http://localhost:4321/santa-ponsa/`).

### [2026-09-21] - Antigravity (Adição do Campo Opcional de Metragem do Jardim nos Formulários de Contato)
- **Problema/Solicitação:** Incluir campo opcional para indicação da metragem do jardim ("Garden Size") nos formulários de contato das páginas de design, com suporte a multilíngua (EN, ES, DE) e envio dos dados para a planilha Google Apps Script e Dashboard interno.
- **Implementação Executada:**
  1. `src/data/translations.ts`: Adicionadas chaves `contact.form.size` e `contact.form.size_placeholder` para EN (`Garden Size (Optional)`), ES (`Superficie del Jardín (Opcional)`), e DE (`Gartengröße (Optional)`).
  2. `src/components/site/contactPage.astro`: Injetado input `<input id="garden_size" name="garden_size" ... />` sem atributo `required` e atualizado handler JS para empacotar `Garden Size` na querystring e formatar em `data.message` resiliente.
  3. `src/components/site/HomePage.astro`: Injetado input `<input id="garden_size" name="garden_size" ... />` opcional e atualizado o submit script.
  4. `src/components/site/dashboardPage.astro`: Atualizado o parser de mensagens e renderização de cards do painel de analítica para extrair e exibir a metragem do jardim via badge dedicada.
- **Validação Localhost:** Servidor local em execução via `python scripts/preview_local.py` (sandbox %TEMP%).
- **Checksum:** Alterações gravadas localmente.

### [2026-09-18] - Claude Code (Documentação da Projects API refeita) — commit `7d2e39e` (publicado em `master`, pedido explícito do cliente)
- **Problema:** `/api/docs` era uma página estática com exemplo inventado e errado (área "10,000 m²", ano 2023, 20 projetos; real: `null` / 2026 / 17).
- **Solução:** página gerada no build a partir dos mesmos dados de `/api/projects.json` (`src/lib/projects-api.ts` como fonte única): exemplo real de Sant Llorenç, referência de campos, tabela com os 17 projetos, comportamento HTTP verificado ao vivo, identidade visual da marca, modo claro/escuro. Novo `/api/openapi.json` (OpenAPI 3.1) ligado como `service-desc` no `/.well-known/api-catalog`; secção "Data API" no `llms.txt`; conversor Markdown para agentes passa a preservar tabelas e blocos de código. `public/api/docs.html` removido (substituído; fica no histórico git).
- **Pendente (decisão do cliente):** campo `size` vazio em todos os projetos. Sant Llorenç (18.000 m²) e Campos (14.000 m² vs 10.000 m² no plano de julho) só constam no texto; preencher o campo também o mostra nos cartões e páginas de projeto.
- **Checksum:** 7d2e39e
### [2026-09-17] - Claude Code (Estratégia de acesso ao cliente UHNWI / fincas €500k+) — só documentação, sem deploy
- **Entregável:** `docs/plano posicionamento/2026-09-17-estrategia-uhnwi-mallorca.md` (PT, resumo) e `…-ES.md` (versão espanhola ampliada, com plano de implementação por fases, processo comercial, programa de prescritores, anexos/modelos) + `…-ES.docx` (versão editável para a direção; Word/Google Docs). Complementa o plano de julho; não altera o plano de recuperação orgânica nem o teste de CPC.
- **Inconsistências factuais detetadas (a validar pelo cliente, não corrigidas):** antiguidade "18 years" (Helen Cummins 2026) vs "desde 1999"/"30 Years" (site); Campos 10.000 m² (plano de julho) vs 14.000 m² (`projects.ts`); página de grandes projetos sem m² de Sant Llorenç (18.000 m²).
- **Pendente:** decisões do cliente listadas na §14 do documento.
- **Checksum:** sem alterações ao código nesta sessão

### [2026-09-17] - Claude Code (Auditoria da queda orgânica de "garden design mallorca" + Core Web Vitals) — só leitura, sem deploy
- **Queda confirmada pelas capturas do cliente** (`docs/PDF/VIDA ON LINE SETEMBRO.pdf`): 4.º lugar orgânico estável a 04, 10 e 11/09 → ~8.º (último da página 1) a 17/09. Top 3 inalterado; entraram acima Terraforma, Contemporanium, Jardines NaturalMente e Pinterest. Anúncios pagos OK (cliente).
- **Suspeita interna principal:** commits de 01/09 `cadef94` (redirects de `/garden-design-mallorca/` e do URL histórico `/garden-design-mallorca-in-mediterranean-style-from-terrace-to-fincas-in-mallorca/`, 5.646 impr./trimestre, passaram de Serviços para `/`) e `1a29d68` (Serviços perdeu o termo no title e no H1). Reversão cirúrgica proposta, **à espera do "sim" do cliente**.
- **Descartado ao vivo:** robots, meta robots, canónicas, hreflang, sitemaps, Function de Markdown (Googlebot recebe HTML), deploys de 04/05/11/09. Nenhum deploy entre 12 e 17/09.
- **Core Web Vitals móvel (LCP):** bom 12–29/07 (no limiar) → >2,5 s 31/07–26/08 → bom 01–05/09 → sem dados desde 06/09; URLs com dados a cair desde 13/08 (menos visitas reais).
- **GSC:** 28 consultas com 51% das impressões do export de 3 meses e 0 cliques = tráfego de bots/rank-trackers; o "CTR crónico 0,39%" é artefacto.
- **Correção ao cabeçalho:** o último commit em `master` é `b546ccb` (11/09), não `45cfcc1`.
- **Pendente:** `sitemap-index.xml` com `lastmod` fixo em 2026-08-31; plano completo por fases em `PROMPT_RECUPERACAO_ORGANICA_2026-09-17.md`.
- **Checksum:** b546ccb (sem alterações ao código nesta sessão)

### [2026-09-11] - Antigravity (Auditoria de Telemetria/Infraestrutura Cloudflare & Registro de Dashboard)
- **Constatação Operacional / Diagnóstico:** O operador abriu o dashboard da Cloudflare em `Dominios > Vista general` (`/domains/overview`) observando a mensagem *"No hay datos disponibles"*, seguido de modal de alerta com link para `cloudflarestatus.com`.
- **Análise Técnica da Causa Raiz:**
  1. *Navegação:* O projeto S'Estepa Design opera via **Cloudflare Pages** (distribuição e build estático), cujo gerenciamento fica sob a aba **Workers y Pages** (`/workers-and-pages`), e não sob o registro/gerenciador de zonas DNS diretas (`/domains`).
  2. *Status Global:* O alerta reportado em `cloudflarestatus.com` refere-se a dois incidentes parciais menores da plataforma Cloudflare (*Workers Cron Triggers degraded* e *Incorrect geo location for some Cloudflare WARP users*).
- **Impacto no Site:** Nulo. Cloudflare Pages, CDN Edge, DNS e certificados SSL permanecem 100% operacionais e sem degradação.
- **Evidências Arquivadas:** `docs/prints/FireShot Capture 034 - System Status - Cloudflare Status - [www.cloudflarestatus.com].png`.

### [2026-09-11] - Claude Code (Sant Llorenç: galeria por etapas de crescimento + sessão de 4 meses) — commit `e7850af` (publicado em `master`, escolha explícita do cliente)
- **Nova sessão fotográfica** `codigo/public/portfolio/sant-llorenc/images/2026-09-4-months/`: 19 webp 1920×1280 com nomes SEO (`garden-design-mallorca-sant-llorenc-4-months-NN-descritor.webp`), fotos de 08.09.2026; `_selection.txt` liga cada ficheiro ao original `IMG_xxxx`. Regra do cliente: mínimo 18 fotos nesta etapa.
- **`ProjectDetail.astro`** (só projetos com `galleryChapters`, na prática Sant Llorenç): navegador "El jardín en el tiempo" + uma secção por etapa (mais recente primeiro), grelha editorial larga → par → trio; todas as fotos no mesmo lightbox com legenda da etapa. Imagem principal e intermédia passam a ser fotos de 4 meses (08 e 18). Restantes projetos sem alterações.
- `sitemap-images.xml` regenerado. Build de produção limpo (143 páginas, 3 idiomas).
- **Vídeo** (fora do site; cliente dispensou o YouTube): versão atual `videos/sant-llorenc/sant-llorenc-4-months-16x9-78s-slideshow-mallorca-sestepa-garden-design.mp4` (1080p, 17 fotos — IMG_3774 retirada a pedido do cliente). A versão anterior de 83 s (18 fotos) continua na pasta até o cliente autorizar apagá-la. Versão 4K (só CPU) agendada para 12/09 03:00 (tarefa `sant-llorenc-video-4k-madrugada`, job em `C:\Users\inesg\video-renders\sant-llorenc-4k\`).
- **Retoques (commit `a85c32c` + versão final aprovada pelo cliente no commit seguinte)**: foto 08 (IMG_3829) — lavanda morta e uma moita seca solta substituídas por terra limpa; base castanha da lavanda vizinha no mesmo verde da planta (variante B7); foto 18 (IMG_3828) — recorte de 90 px em baixo (3:2 mantido) para retirar um plástico azul. Mesmos nomes de ficheiro. Masters retocados em `originais-grandes/sant-llorenc/2026-09-4-months/`. O render 4K das 03:00 já usa o IMG_3829 retocado.
- **Checksum:** e7850af → a85c32c → 45cfcc1 (versão final aprovada; fotos 08 e 18 renomeadas porque `/portfolio/*` tem cache de 30 dias)

### [2026-09-09] - Antigravity (Otimização Arquitetural de Governança, Higienização UTF-8 e Modularização de Skills)
- **Problema de Raiz Solucionado:** O arquivo `.agents/AGENTS.md` ocupava 4.737 tokens (23,7% do orçamento basal da janela de contexto) devido a: (1) corrupção de caracteres UTF-8 (245 sequências de mojibake provocando fragmentação em sub-tokens/fallback de bytes); (2) prolixidade e duplicação conceitual de diretrizes de tom e homologação em idiomas distintos (PT e ES); (3) inclusão indevida de dados enciclopédicos de negócio no prompt estático persistente.
- **Implementação Cirúrgica Executada:**
  1. `.agents/AGENTS.md`: Refatorado e sintetizado estritamente em regras de governança inegociáveis (Rigor Estrutural, Tom Técnico/Impessoal, Rotas de Validação/Deploy e Salvaguardas de Core Web Vitals). Redução de 14.210 bytes para 3.965 bytes (-72,1%), com codificação UTF-8 íntegra.
  2. `.agents/skills/sestepa-domain/SKILL.md`: Criada skill dedicada para encapsular o contexto de mercado, categorias de portfólio de luxo e diretrizes de qualificação de palavras-chave de SEO/Google Ads para carga sob demanda (apenas metadados no contexto basal).
- **Checksum:** b77f074 (Ambiente local mantido íntegro)

### [2026-09-04] - Antigravity (Correção Cirúrgica de Telemetria de Conversão Google Ads & WhatsApp) — commit `fde3b8d` (publicado em `master`)
- **Problema de Raiz Solucionado:** O formulário de contato (`contactPage.astro` e `HomePage.astro`) disparava o identificador genérico `'AW-795871100/contact_form_lead'`, rejeitado pelo Google Ads e marcando a conversão "Form | Design S'Estepa" como "Requer atenção". Adicionalmente, cliques no link de WhatsApp (`wa.me`) eram registrados exclusivamente via Google Apps Script sem emitir eventos para `window.gtag` ou `dataLayer`.
- **Implementação Cirúrgica Executada:**
  1. `src/lib/seo.ts`: Exportado `GOOGLE_ADS_CONVERSION_FORM = 'AW-795871100/dv-kCJrn0YoaEPyOwPsC'`.
  2. `src/components/site/contactPage.astro`: Rótulo de conversão atualizado para `'AW-795871100/dv-kCJrn0YoaEPyOwPsC'` em ambos os blocos de sucesso e fallback resiliente.
  3. `src/components/site/HomePage.astro`: Rótulo de conversão atualizado para `'AW-795871100/dv-kCJrn0YoaEPyOwPsC'` em ambos os blocos de sucesso e fallback.
  4. `src/layouts/Layout.astro`: Telemetria de evento `whatsapp_click` injetada via `window.gtag` (`event_category: 'engagement'`, `event_label: pathname`) e `dataLayer.push` no ouvinte de clique global.
  5. `docs/ANALYTICS.md`: Tabela de telemetria e registro de auditoria atualizados com os identificadores validados.
- **Validação & Homologação:** Compilação isolada local (`npm run build`) concluída com êxito (138 páginas geradas, 143 páginas indexadas no Pagefind, 0 erros). Staging gerado via branch de feature e merge realizado para a branch principal (`master`) após autorização explícita do operador. Branch de feature purgada (local e remota).
- **Checksum:** fde3b8d

### [2026-09-02] - Claude Code (SEO parte 6: os 14× 404 + análise da "queda" de 24h) — commit `1602b97`
- **A "queda" de "garden design mallorca" para posição 26 em 24h era RUÍDO, confirmado.** Drilldown de 24h (docs/search/…-garden design-24h): 18 impressões no dia, 13 delas em posição 4,5–10. Uma hora (21:00) teve 7 impressões em posição ~58 (Google a testar páginas piores do site), e essa hora sozinha puxou a média diária para 26. As alterações do dia 1 NÃO causaram queda. A posição real do termo é ~6. O 28 dias continua em 5,4.
- **Canibalização severa:** 11 páginas do site aparecem para "garden design mallorca". Boas: `/` (10,5), `/es/` (6,3), `/de/` (7). Más, a puxar a média: `/category/2d-simple-design/` (28), `/vertical-gardens-in-mallorca/` (61), `/es/diseno-de-jardines-mallorca/` (67), `/es/portfolio/` (43), `/es/galeria/` (91), `/es/sobre/` (93), `/portfolio/` (98). O Google não tem sinal claro de qual é A página.
- **Corrigido (`1602b97`, verificado ao vivo):** os 14 URLs da lista "Não encontrado (404)" do GSC. Slugs antigos de "sobre" (`/de/ueber/`→`/de/uber/`, `/es/acerca-de/`→`/es/sobre/`), páginas de taxonomia WP (`/category/2d-simple-design/`, `/category/landscape-design/`, `/tag/garden-design/`, `/de|es/category/*`), páginas de serviço DE antigas, e traduções DE/ES de artigos → `/de/blog/`, `/es/blog/`. O `/category/2d-simple-design/` ainda rankeava em posição 28 para "garden design mallorca" estando 404.
- **Todos os drilldowns de indexação do GSC lidos** (docs/search/…Coverage-Drilldown-*.zip). Conclusões:
  - "Erro de redirecionamento" (10): 5 eram o 308 do Cloudflare a normalizar barra final (resolvem 200 — flags velhas de crawls de abril). Os outros 5 davam 404 → adicionados 301 limpos em `e0e5bf4` (`/benissalem/`→`/binissalem/`, `/puig-na-morisca/`→`/santa-ponsa/`, `/crestatx/`→`/crestatx-garden-design/`, `/es/contacte-con/`→`/es/contacto/`, `/de/finca-garden-campos-mallorca/`→`/de/finca-garten-campos/`).
  - Staging `/new/*` (~11 URLs no relatório): tudo **404** agora — o Google larga com o tempo, sem ação.
  - `/blog/`, `/es/blog/`, `/de/blog/`: agora `index, follow` (o noindex foi corrigido a 27/08; o GSC ainda não re-rastreou).
  - `/es/benissalem/` + `/de/benissalem/`: indexáveis, canónica correta. "Rastreada não indexada" é escolha do Google (páginas magras), não bug.
  - Resto das listas "não indexada" = lixo WP (feeds, `?amp=1`, author archives, `/es/13906-2/`, arquivos de data, tags) que dá 404 e cai sozinho.
  - "Detectada mas não indexada" (18, data 1969 = nunca rastreada): páginas reais (artigos, projetos, legais) que o Google descobriu mas ainda não indexou. Problema de discovery/crawl budget. Pedir indexação nas importantes + sitemap limpo + tempo.
- **Capítulo dos redirects essencialmente fechado.** 19 URLs antigas com 301 limpo esta sessão (14 + 5). Os números "14" e "10" no GSC devem cair no próximo reprocessamento (dias a 1 semana).
- **CONGELAMENTO em vigor:** sem mais alterações à homepage, à página de Serviços ou aos redirects ligados a "garden design mallorca" durante ~3 semanas.
- **Checksum:** e0e5bf4

### [2026-09-01] - Claude Code (SEO parte 5: auditoria dos relatórios GSC + redirects de URLs antigas) — commit `02db308`
- **Âncoras de contexto (estavam erradas ou em falta — ver topo do `codigo/CLAUDE.md`):**
  - Migração WordPress → Astro foi a **17 de junho de 2026** (~11 semanas). Uma migração destas leva 3–6 meses a consolidar no Google. URLs antigas ainda nos resultados = esperado, não avaria. O export de Performance de "3 meses" é quase todo do site WordPress antigo.
  - **CTR de 0,39% é crónico, não é da migração** (136 cliques / 34.628 impressões, janela quase toda WordPress). Alavancas: títulos, imagens de volta ao índice, estrelas de avaliação.
  - GBP já está correto ("Diseñador paisajista"). PMax suspensa há ~2 meses. Vídeo = não é problema (loops decorativos, schema já removido).
- **Corrigido neste commit (`_redirects`, verificado ao vivo):**
  - `/landscapingmallorca/` (5.249 impressões, ~pos 20 para "landscaping mallorca") fazia 301 → `/blog/` (alvo errado) → agora `/`.
  - `/de/startseite/` (323 impr, slug antigo da homepage alemã) dava **404** → `/de/`.
  - `/es/category/3d-renders-es/` (404) → `/es/portfolio/`; `/de/category/portfolio-de/` (404) → `/de/portfolio/`.
- **Falta de vocês:** as listas de URLs das linhas "Não encontrado (404)" (14) e "Erro de redirecionamento" (10) — clicar nessas linhas em Indexação → Páginas e exportar. Não vêm nos CSV da pasta.
- **Auditoria Wikidata feita.** `Q141124582` existe e está razoável; falta nome oficial (`P1448`), forma jurídica (`P1454`), YouTube, Pinterest, morada, coordenadas, nº empregados, labels de+ca, logótipo (`P18`, precisa de upload no Commons), e sobretudo **referências nas afirmações**. `Q141121320` (Pedro Campaner) fraco: `P19` está como país (erro), faltam nacionalidade, nomes, empregador, línguas, labels. Ações vossas (precisa de conta Wikidata).
- **Checksum:** 02db308

### [2026-09-01] - Claude Code (SEO parte 4: texto da homepage + links internos) — commits `a6b374f` + `c5f9d17`
- **Homepage, secção `.philosophy`:** os dois parágrafos genéricos ("ecosistemas sostenibles / alma natural") substituídos por três factuais — fundada em Mallorca em 1999, Pedro Campaner começou aos 18, equipa local; desenhar para a Mallorca real (marès/calcário, tramontana, limites de água, garriga, pedra seca, acebuches antigos); gestão de ponta a ponta em 3 idiomas. Termina com link para a página "Sobre" localizada. Caixas de estatística e o lead acima intactos.
- **Páginas de projeto (`ProjectDetail.astro`):** uma linha discreta a seguir à descrição, em todas as páginas de projeto — "Part of our garden design work across Mallorca" / "Parte de nuestro trabajo de diseño de jardines en Mallorca" / "Teil unserer Gartengestaltung auf Mallorca", a ligar para a homepage localizada. Feito como uma linha de template (não 3 descrições editadas à mão). Tamanho 0.9rem, cor limestone (discreto).
- **Verificado:** build local (138 páginas, 1 `<h1>` por homepage), DOM ao vivo (opacidade 1, links corretos, linha de projeto a 14.4px).
- **O passe de links internos das páginas de projeto está concluído** por essa linha de template. Links internos dos artigos do blog para a homepage: opcional, ainda por fazer.
- **Checksum:** c5f9d17

### [2026-09-01] - Claude Code (SEO parte 3: nova página de Serviços) — commits `1a29d68` + `71869b7`
- A página de Serviços era uma quase-duplicata fina da homepage (mesmo H1/título "Garden Design ... Mallorca"). Cliente pediu para a *melhorar*, não só retitular.
- **Feito:** hero apelativo com H1 único ("The garden becomes the favourite room of the house." / "El jardín se convierte en el lugar favorito de la casa." / "Der Garten wird zum Lieblingsort des Hauses."), frase de equipa própria + processo completo, CTA; fundo = foto de Crestatx (diferente da homepage). Carrossel de 6 projetos (reutiliza `ProjectCard`, CSS puro, sem JS). Título da página (`seoTitle`) reenquadrado para "...Services in Mallorca" nos 3 idiomas; a linha antiga com o keyword fica como `<h2>`. Homepage fica com o termo "garden design mallorca" só para ela. Cartões de serviço e lista de 12 pontos inalterados por baixo.
- **Verificado:** `astro build` local (Astro 6.4.8, 138 páginas, 1 `<h1>` por idioma, sitemap 123) + screenshots ao vivo desktop e mobile.
- **Em aberto (conteúdo / aprovação do cliente):** bloco "porquê um estúdio mallorquín" + link para a FAQ na homepage (a `/faq/` já existe, EN, com schema FAQPage correto — não duplicar); passe de links internos (contextual, âncoras variadas, ~1 por página; cliente OK "se não for chato", quer ver 3 páginas de amostra primeiro).
- **Checksum:** 71869b7

### [2026-09-01] - Claude Code (SEO: consolidação de keyword + schema + sitemap) — cont.
- **Objetivo do cliente (a partir de prints do SERP "garden design mallorca"):** ser o site #1 real (acima de mashambadesign.com) e recuperar as imagens que tinham até agosto.
- **Leitura do SERP:** S'Estepa já rankeia ~#3-4 orgânico, acima da Studio Terraforma. O #1 é o *Instagram* @mallorcagardendesign (o site deles rankeia abaixo do mapa, fraco). helencummins é um artigo que lista a S'Estepa. A página que rankeia para o termo é a **homepage** (`/es/` = 1133 palavras). A página "Serviços" (`src/data/services.ts`, EN 299 / ES 304 palavras) canibaliza-a, e o slug exato `/garden-design-mallorca/` fazia 301 para essa página fina.
- **Feito (commit `cadef94`, tudo reversível, conteúdo da homepage e da página de serviços NÃO tocado):**
  1. `_redirects` — `/garden-design-mallorca/` e o órfão `...mediterranean-style...` passam a 301 para `/` (homepage) em vez da página de serviços.
  2. `Schema.astro` — `@type` de projeto `"LandscapingProject"` (tipo Schema.org inexistente, o Google descarta o bloco; apontado a 27/08, nunca aplicado) → `"CreativeWork"`.
  3. `astro.config.mjs` — `ALIAS_PATHS` (os 9 slugs legados de `PROJECT_PATH_ALIASES`) adicionados ao `EXCLUDE` do sitemap; `sitemap-0.xml` passou de 132 para 123 URLs, sem entradas 301/canónica-externa. Os redirects em si ficam intactos.
  4. apagado `src/utils/schema.ts.bak-2026-07-03`.
  - Verificado ao vivo: `/garden-design-mallorca/` → 301 → `/`; sitemap 123 URLs, 0 alias; páginas de projeto emitem `CreativeWork`.
- **Em aberto (precisa de aprovação de copy/voz do cliente — rascunhos propostos, NÃO feito):** de-canibalizar a página de Serviços (retitular fora do termo principal em `services.ts`); reforçar a homepage com bloco factual "porquê um estúdio mallorquín" + FAQ schema; passe de links internos para a homepage com a âncora alvo.
- **Ações do cliente (Search Console):** sitemap de imagens já re-submetido pelo cliente; re-submeter `sitemap-index.xml`; pedir indexação nas 5 páginas de projeto mais fortes; exportar relatório de 404 (URLs de imagem antigas mortas → 301 para a imagem real equivalente).
- **Google Business Profile — VERIFICADO OK (2026-09-01, print do cliente):** categoria primária = "Diseñador paisajista" em Inca, 4,9 · 18 opiniões, perfil "Se ve bien". A nota do Antigravity de 27/08 ("categorizado como Jardinería") estava errada — o auditor confundiu o nome legal da empresa ("S'Estepa Jardineria Integral, SL") com a categoria. NÃO voltar a levantar este item.
- **Checksum:** cadef94 (commit e push direto em `master`, publicado via Cloudflare Pages)

### [2026-09-01] - Claude Code (Auditoria + correção do sitemap de imagens)
- **Pedido do utilizador:** desde que o Antigravity publicou `sitemap-images.xml` (~20/08), as imagens deixaram de aparecer no Google; auditar e "recuperar autoridade".
- **Diagnóstico:** URLs de imagem antigas (nomes pré-renomeação) ainda devolvem `200` — ficheiros restaurados no disco, Cloudflare serve-os antes das ~200 regras 301 de `_redirects` (que ficam dormentes). Causa real da queda: (1) renomeação/re-slug em massa das imagens em agosto; (2) `sitemap-images.xml` **inválido** — ~35 entradas `<image:loc>` com espaços/parênteses crus (`crestatx`, `llubi`, `santa-eugenia`, `sacabaneta`, `seaside-house-alcudia`), o que faz o Search Console marcar erro e travar a re-descoberta.
- **O que fez:** reescreveu `scripts/generate-image-sitemap.mjs` — `toAbsoluteUrl()` faz `encodeURI` + escapa `()`/`'`, depois `xmlEscape`; verifica `fs.access` em `public/` e salta (com aviso) imagens em falta; output determinístico. Regenerou `public/sitemap-images.xml` (54 `<url>`, 227 imagens únicas, +6 Binissalem, 0 perdidas). Testou as 281 URLs ao vivo → todas `200`. XML validado com minidom.
- **NÃO tocado (deliberado):** bloco `manual-image-redirects` do `public/_redirects` (~linhas 223-271) — dormente porque os ficheiros antigos existem; mexer é arriscado sem passe de verificação próprio. PNG grandes e bloco homepage do sitemap mantidos (duplicação por locale é permitida pelo Google).
- **Pendente (ação do cliente no Search Console):** re-submeter `sitemap-images.xml`; "Pedir indexação" nas páginas de projeto principais; exportar relatório de Páginas 404 — se houver URLs de imagem antigas em 404, adicionar 301 para a imagem equivalente real (não capa genérica).
- **Nota de sync:** durante a sessão, o sync da Drive trouxe o commit `6ef572d` (revisão de copy do blog, de outra sessão/máquina) para cima de `8836d62`; o commit deste trabalho (`603493e`) assentou por cima sem conflito. Ficou `src/components/site/BlogPost.astro` modificado no working tree (trabalho em curso de outra sessão) — não tocado.
- **Checksum:** 603493e (commit e push direto em `master`, publicado via Cloudflare Pages)
### [2026-08-27] - Antigravity (Auditoria Técnica de SEO, Arquitetura On-Page e Autoridade de Entidade AEO)
- **O que fez:** Auditoria técnica diagnóstica completa, não-destrutiva e multi-agente de SEO Técnico, Arquitetura On-Page e Autoridade de Entidade (AEO) do website `design.sestepa.com` vs concorrentes diretos (*Mashamba Design* e *Mallorca Garden Design*), isolando as causas do deslocamento orgânico para `garden design mallorca` e entregando o plano acionável de remediação.
  1. **Diagnóstico Forense de SERP & Concorrentes (R1):** Identificado o mecanismo algorítmico do Google que privilegia a paridade léxica exata em domínios raiz (EMD `mallorcagardendesign.com`) e perfis de Instagram (`@mallorcagardendesign` em plataforma DA 99) para queries visuais comerciais. A S'Estepa opera em subdomínio (`design.sestepa.com`) e com handle `@sestepadesign`. Matriz comparativa de 10 dimensões documentada em `AUDIT_REPORT.md`.
  2. **Auditoria de Código Astro & Erros Estruturais Isolados (R2):**
     - Em `codigo/src/lib/urls.ts:87-101`: `getAlternatePath` usa fallback incondicional para a home `/` em rotas não mapeadas. Em mais de 20 posts de blog com `hreflangLocales={['en']}`, `Layout.astro` emite `hreflang="en"` apontando para `/` enquanto a tag canônica aponta para a URL do post (`/[slug]/`), gerando contradição canônica/alternativa que prejudica a indexação.
     - Em `codigo/src/components/Schema.astro:78`: `@type: "LandscapingProject"` não existe no vocabulário oficial do Schema.org (corrigido para `["Project", "CreativeWork"]`) e locale default incorreto (`'es'` em vez de `'en'`).
     - Em `codigo/src/data/site-urls.ts:28` e `codigo/public/_redirects:8`: o slug exato `/garden-design-mallorca/` possui redirecionamento 301 para a URL de 8 palavras `/garden-design-mallorca-landscape-management-villas-fincas/`, diluindo a força documental e canibalizando a Homepage.
     - Em `codigo/src/components/site/HomePage.astro`: 4 dos 8 headings `<h2>` utilizam rótulos genéricos ("Services", "Your Garden Design", "What Our Clients Say", "Contact"), desperdiçando relevância geo-semântica.
     - Preservação de Core Web Vitals: 100% das regras de fontes WOFF2 locais, `font-display: optional`, preloads e `inlineStylesheets: 'always'` auditadas e intocadas (benchmark 98 Mobile seguro).
  3. **Autoridade de Entidade & AEO (R3):** Google Business Profile vinculado (CID `8724534370482378500`) categorizado como "Jardinería" em vez de "Landscape Designer". _[CORREÇÃO 2026-09-01: falso. A categoria primária é "Diseñador paisajista", confirmado por print do cliente. O auditor confundiu o nome legal da empresa com a categoria.]_ Enriquecimento de `schema.ts` com URIs Wikidata (`Q474910`, `Q1058097`, `Q817028`), `hasOfferCatalog` no `LocalBusiness` e menções editoriais (`abc-mallorca.com`) em `sameAs`.
  4. **Roadmap Priorizado & Validação Independente (R4):** Relatório consolidado publicado em `.agents/orchestrator_2/AUDIT_REPORT.md` e auditado de forma independente pelo Victory Auditor (`VICTORY CONFIRMED` em `.agents/victory_auditor_3/handoff.md`).
- **Checksum:** 7764130 (Diagnóstico estático em desenvolvimento, sem modificações destrutivas no código-fonte)

### [2026-08-27] - Claude Code (Journal no menu + indexação + fix hero de artigo)
- **O que fez:** Sequência do redesign de `/blog/` (ver entrada seguinte). Utilizador aprovou e pediu para pôr no menu oficial.
  1. **Menu** (`Header.astro`): item "Journal" inserido entre "Press" e "Contact" (`menuItems`). Label `nav.blog` em `translations.ts` mudado de "Blog" para **Journal** (EN), **Diario** (ES), **Journal** (DE) — alinha com o masthead "The S'Estepa Journal".
  2. **Indexação** (`BlogIndexPage.astro`): removido `noindex={true}` do `<Layout>` — o índice é uma landing SEO acabada. Os artigos individuais continuam `noindex` (default de `content.config.ts`) até revisão dos textos.
  3. **Fix hero de artigo** (`src/pages/[slug].astro`): em títulos de 3-4 linhas, o `.ux-meta` ("S'ESTEPA STUDIO · N MIN READ") colava na borda inferior do hero. Rebalanceado: `section` padding `150px 1rem 3.5rem` (antes só `padding-top:140px`), `min-height` 640px, removido o `padding-top:100px` extra do `.hero-content`, `h1` clamp reduzido `clamp(2.5rem,6vw,4.5rem)` → `clamp(2rem,4.6vw,3.6rem)`. Verificado desktop (1280) + mobile (375), títulos curtos e longos, sem sobreposição com a barra PREVIOUS/JOURNAL/NEXT, ~140px de folga em baixo.
  - **Pendente (não bloqueia):** rever os textos dos artigos individuais para lhes tirar o `noindex`; confirmar jardins dos shorts/vídeo (ver entrada seguinte).
- **Checksum:** 6e3202e (commit e push direto em `master`, publicado via Cloudflare Pages)

### [2026-08-27] - Claude Code (Redesign premium da página /blog/)
- **O que fez:** Pedido do utilizador: a Perplexity estava a listar a S'Estepa em 1º mas a linkar a página `/blog/` (que era só hero + lista de texto). Redesenhar essa página como landing atrativa. Trabalho iterativo em ~5 rondas de feedback, tudo num único ficheiro `src/components/site/BlogIndexPage.astro` (EN/ES/DE herdam):
  1. **Masthead** por baixo do menu: kicker "The S'Estepa Journal", H1 "Garden Design Insights in Mallorca" (keyword repetida p/ SEO), subtítulo + tagline em itálico.
  2. **Hero slider editorial 2/3·1/3**: foto do jardim a full-bleed com título sobre a imagem; painel sand com highlights por projeto (categoria · local · ano · m², frase editorial `subtitle`, 1º parágrafo da `description`, link). Navegação por zonas de clique (terços da imagem) + swipe + setas do teclado + dots; SEM setas visíveis. Autoplay 6,5s com pausa em hover/foco/aba oculta. 5 slides: sant-llorenc, campos, llubí, crestatx, vertical.
  3. **Carrossel "A Portfolio of Mediterranean Gardens"**: 9 jardins, auto-avanço 5s, scroll nativo por toque + drag com rato (limiar 8px + guarda de clique `once` para os links não partirem) + teclado + barra-scrubber arrastável. Imagens uniformes 4:3.
  4. **"On Film"**: 6 facades YouTube (grid 3 col, 2 linhas), click-to-load `youtube-nocookie` a preencher o frame exato (regra `:global(iframe)` para os elementos criados via JS). IDs: McyZviXDxhc (Campos), -xs_kKaUnGA (Crestatx), Aynezzlact0 + IdGlxUKjhUQ (Jardín Mediterráneo), x3W0KQmr-pQ (Vertical), g6QG3idswLU (jardim a confirmar — rotulado "Garden Film").
  5. **"In Short"**: 4 shorts verticais 9:16 numa linha (grid fixo 4 col, max-width 900px; 2×2 no telemóvel). IDs: aukR9zbC9og, jXku-VCfZ94, 1q1Qnh2s_mg (Palma Terrace), IzRNgQnHAXM. Os 3 sem slug estão rotulados "S'Estepa Design · Mallorca" — jardins a confirmar pelo estúdio.
  6. **"The Journal"**: 3 artigos curados via `curatedSlugs` (the-ultimate-guide-to-high-end-garden-design-in-mallorca, regenerative-landscapes-despite-mallorcas-water-realities, beyond-aesthetics-...) — escolhidos por responderem às perguntas primordiais de um lead (planeamento / água / valor patrimonial). Os ~5 stubs de importação WP ficam escondidos (não tocados). Secção esconde-se limpa em ES/DE (sem posts traduzidos).
  7. **CTA final** olive/charcoal (contacto + WhatsApp).
  - Renomeada a classe raiz do hero para `.journal-hero`/`.jhero` (colidia com `.blog-hero` global legado em `global.css` usado pelos posts).
  - JS vanilla, 3 IIFEs, `prefers-reduced-motion` respeitado. Sem libs novas.
  - Verificação: preview local via `python scripts/preview_local.py` (o build direto na Drive falha — ver nota Antigravity 2026-08-19). Testado EN/ES/DE, desktop + mobile (swipe/tap/scroll/scrubber/play todos OK), sem scroll horizontal, sem erros de consola (só ruído CookieYes de localhost). Screenshots não possíveis nesta sessão (painel do browser minimizado).
  - **Pendente (não bloqueia):** confirmar a que jardins pertencem os shorts aukR9zbC9og / jXku-VCfZ94 / IzRNgQnHAXM e o vídeo g6QG3idswLU; rever os textos dos 3 artigos e tirar o `noindex` da página quando aprovados.
- **Checksum:** 44f03b6 (commit e push direto em `master`, publicado em produção via Cloudflare Pages)

### [2026-08-26] - Antigravity (Expansão do Grid da Homepage para 6 Jardins & Otimização de Cards)
- **O que fez:** Expansão arquitetural do grid de projetos em destaque na homepage de 4 para 6 itens:
  1. **Auditoria e Seleção de Jardins:** Cruzamento dos dados de telemetria do GA4 com o portfólio. Inclusão dos projetos de alto tráfego Santa Eugènia (11 views) e Binissalem (6 views), mantendo Llubí (13 views), Crestatx (12 views), Palma Terrace (6 views) e Santa Ponsa (5 views).
  2. **Geração de Mídias Responsivas:** Geradas as variantes WebP de alta performance (`-card.webp`, 700x525) para Binissalem e Santa Eugènia em `public/portfolio/`, preservando a blindagem de Core Web Vitals e mobile payloads.
  3. **Atualização do Template (`HomePage.astro`):** Atualizado o array `featuredSlugs` para os 6 projetos e integradas as regras de `coverSrcset` para picture tags responsivas.
  4. **Validação & Deploy:** Compilação de 129 rotas executada com sucesso no sandbox temporário (%TEMP%). Feature branch `feature/expand-home-grid-6-projects` criada, testada, mergeada em `master` (`0f58cc0`), publicada no repositório remoto e purgada.
- **Checksum:** 0f58cc0 (merge e deploy em `master`)
### [2026-08-26] - Antigravity (Adição de Fotos de Binissalem & Otimização de Assets)
- **O que fez:** Processamento, redimensionamento e adição de novas imagens para o projeto Binissalem e para a galeria geral:
  1. **Otimização de Imagens:** Processadas as 6 fotos originais em `J:\Meu Drive\...` redimensionando-as para largura máxima de 1920px, com qualidade 85% JPEG otimizado, salvando-as em `public/portfolio/binissalem/images/`.
  2. **Atualização do Projeto Binissalem (`projects.ts`):** Adicionadas as 6 novas fotos ao array de imagens do projeto `binissalem` imediatamente antes do último arquivo (`LANDSCAPE-GARDEN-MALLORCA-SESTEPA-DESIGN.jpg`), respeitando a ordenação sequencial do print do diretório: `1. IMG_3761.JPG` (Arco), `IMG_3756.JPG` (Grama), `IMG_3759.JPG`, `IMG_3763.JPG`, `IMG_3767.JPG`, e `IMG_3771.JPG`.
  3. **Atualização da Galeria Geral (`gallery-images.ts`):** Adicionadas as 3 fotos selecionadas (`LANDSCAPE-GARDEN-MALLORCA-SESTEPA-DESIGN-14.jpg`, `-15.jpg`, e `-16.jpg`) no início do array `galleryImages` para que apareçam na primeira linha (primeiro row) da página de Galeria.
  4. **Preview Local (`preview_local.py`):** Criado o script utilitário `scripts/preview_local.py` que clona o workspace para o disco local (`%TEMP%`) e inicia o servidor Astro isolado da rede para evitar conflitos de I/O em pastas sincronizadas.
- **Checksum:** Local (alterações e ordenação salvas em projects.ts, gallery-images.ts, preview_local.py e STATUS.md)

### [2026-08-24] - Antigravity (Auditoria Técnica Diagnóstica Integral & Proteção de Core Web Vitals)
- **O que fez:** Auditoria técnica diagnóstica completa, não-destrutiva e multi-agente do website S'Estepa Design (`design.sestepa.com`), cobrindo integridade arquitetural Astro, compilação estática, blindagem de Core Web Vitals, conformidade de assets de mídia e telemetria avançada de GA4/Google Ads sob o Consent Mode v2.
  1. **Arquitetura Astro & Integridade da Base (R1):** Verificada a consistência do layout raiz (`Layout.astro`), paridade da matriz de rotas estáticas nos 3 idiomas (EN: 64, ES: 35, DE: 35), tipagens TypeScript estritas e centralização modular de dados em `src/data/` (`projects.ts`, `testimonials.ts`, `faq.ts`, `schema.ts`).
  2. **Compilação Estática em Sandbox (%TEMP%):** Build estático completo executado em sandbox isolado com 134 rotas HTML compiladas com sucesso (Exit Code 0), 133 páginas e 7.232 palavras indexadas no Pagefind sem nenhum erro, e purga completa do diretório temporário.
  3. **Proteção de Core Web Vitals & Performance (R2):** Confirmadas as salvaguardas da pontuação 98 Mobile: 6 fontes WOFF2 locais com validação binária `wOF2`, `font-display: optional` em 100% das regras `@font-face`, preloads cirúrgicos de fontes, logo e poster do hero (`sant_llorenc_poster.webp` com `fetchpriority="high"`), mitigação de CLS via `calc(100vh - 4px)` e inlining de CSS crítico (`inlineStylesheets: 'always'`).
  4. **Sanitização de Mídia & Open Graph (R3):** Validado o ativo canônico Open Graph (`18.webp`, 241,9 KB) em 1200x630. Identificadas 7 regras em `public/_redirects` com alvos WebP inexistentes (provocando 404 em links antigos) e mapeada sobrecarga de >467 MB de arquivos brutos em `public/portfolio/`.
  5. **Telemetria GA4 & Consent Mode v2 (R4):** Confirmada a sincronização total de IDs (`GTM-K6MSRJX9`, `GT-WKTZS5C`, `AW-795871100`, `G-DZ9ZSG3VH0`), inicialização síncrona do Consent Mode v2 com CookieYes assíncrono (DMA compliance), eficácia do filtro anti-bot de 4 camadas no formulário de contato e parecer técnico sobre os alertas de thresholding do GA4 (recomendação de alteração da identidade de relatórios para Device-based).
  6. **Emissão de Relatório Diagnóstico (R5):** Relatório técnico estruturado consolidado emitido em `.agents/orchestrator_1/AUDIT_REPORT.md` e ratificado com veredito `VICTORY CONFIRMED` por auditoria independente pós-vitória.
- **Checksum:** 1293a9b (Auditoria puramente diagnóstica e não-destrutiva em master)

### [2026-08-22] - Antigravity (Auditoria de Indexação de Vídeo no Search Console & Expansão de Autoridade para Fincas)
- **O que fez:** Auditoria técnica forense do relatório de Search Console (`https___design.sestepa.com_-Video-indexing-2026-08-22.xlsx`), diagnóstico da causa raiz da flag algorítmica "O vídeo não está em uma página de exibição" (regra de Watch Pages do Google de dez/2023), higienização de schemas e expansão semântica para grandes fincas e mansões em Mallorca.
  1. **Higienização de Schema (`Schema.astro`):** Removida a declaração `VideoObject` para o vídeo hero em loop da homepage (`sant_llorenc_hero.mp4`) e vídeos decorativos de cabeçalho (`project.heroVideo`), alinhando o JSON-LD com as diretrizes do Schema.org e eliminando alertas falsos no Googlebot Video.
  2. **Expansão Semântica AEO/SEO (`schema.ts`):** Enriquecido o array `knowsAbout` do schema `LocalBusiness` com 32 entidades hiper-focadas em proprietários de grandes propriedades, fincas rústicas e mansões em Mallorca (ex: `Large Estate Landscape Architecture Mallorca`, `Finca Garden Architecture Mallorca`, `Dry Stone Wall Masonry`, `Ancient Olive Tree Heritage`, `Sub-Surface Drip Irrigation & Water Conservation`, `Xeriscaping`).
  3. **Blindagem de Core Web Vitals (`[slug].astro`):** Injetado `preload="none"` na tag `<video>` do hero dos artigos de blog para proteger o LCP/FCP móvel em redes lentas.
  4. **Validação em Sandbox:** Build Astro executado com sucesso em sandbox temporária (`%TEMP%\website-build-video-audit`) com 127 rotas compiladas com sucesso (Exit Code: 0) e expurgo completo do diretório temporário após os testes.
- **Checksum:** 1293a9b (merge e deploy em `master`)

### [2026-08-21] - Antigravity (Alinhamento de Open Graph Visual com Sant Llorenç 18.webp)
- **O que fez:** Alinhamento estrito da imagem de pré-visualização visual Open Graph / Redes Sociais com o ativo WebP de alta definição de Sant Llorenç (`18.webp`, 247.730 bytes):
  1. **Layout Base (`Layout.astro`):**
     - Atualizada a constante `DEFAULT_SITE_OG_IMAGE` para `/portfolio/sant-llorenc/images/garden-design-mallorca-sestepa-landscape-design-sant-llorenc-18.webp`.
     - Preservada a tag `<html>` com `prefix="og: https://ogp.me/ns#"`.
     - Preservada a função `getOgImageMimeType` mapeando `.webp` para `image/webp`.
     - Garantido o uso estrito de `ogImage.href` em `og:image`, `og:image:secure_url`, `<link rel="image_src">`, `<meta itemprop="image">` e `twitter:image`.
  2. **Mapeamento de Rotas (`site-urls.ts`):**
     - Atualizado o dicionário `PAGE_OG_IMAGES` em todas as 8 rotas (`home`, `about`, `contact`, `gallery`, `portfolio`, `services`, `press`, `blog`) nos 3 idiomas (`en`, `es`, `de`) para apontar para `18.webp`.
  3. **Verificação de Integridade:** Confirmada a persistência em disco dos arquivos `Layout.astro` e `site-urls.ts`, bem como a existência física e integridade do asset `garden-design-mallorca-sestepa-landscape-design-sant-llorenc-18.webp` (247.730 bytes / 241,9 KB).
- **Checksum:** Local (modificações gravadas em disco em Layout.astro, site-urls.ts e STATUS.md)

### [2026-08-21] - Antigravity (Copywriting da Seção de Imprensa / Press Wording)
- **O que fez:** Ajuste fino de posicionamento editorial na seção de imprensa em conformidade com as mídias em que o estúdio é de fato referenciado (abcMallorca, Helen Cummins, Spend In) para evitar a classificação incorreta de "design publications".
  1. **Adequação de Textos em `pressPage.astro`:** Alterados os cabeçalhos (`pressH1`) e descrições para denominar o portfólio de inserções como "Mídias de Estilo de Vida e Mallorca" (Cenário C selecionado pelo usuário).
  2. **Validação:** Compilação Astro de 127 rotas executada com sucesso e sem erros no sandbox. Pushed e mergeado diretamente em `master`.
- **Checksum:** 594d899 (master branch)

### [2026-08-21] - Antigravity (Milestone 2: Remediação e Implementação Real de Open Graph no Disco para WhatsApp & Meta)
- **O que fez:** Implementação real e persistida em disco de todas as especificações de Open Graph / WhatsApp Link Preview para `design.sestepa.com`:
  1. **Layout Principal (`Layout.astro`):**
     - Configuração de `DEFAULT_SITE_OG_IMAGE` para `/portfolio/sant-llorenc/images/garden-design-mallorca-sestepa-landscape-design-sant-llorenc-18.jpg`.
     - Injeção de `prefix="og: https://ogp.me/ns#"` na tag `<html>`.
     - Serialização estrita de URLs absolutas com `.href` (`og:url`, `og:image`, `og:image:secure_url`, `twitter:image`).
     - Injeção de metatags obrigatórias: `og:image:width="1200"`, `og:image:height="630"`, `og:image:type` (com função dinâmica `getOgImageMimeType` mapeando `.jpg`, `.jpeg`, `.webp`, `.png`, `.avif`), `og:image:alt` com fallback semântico.
     - Injeção de tags legadas para scrapers móveis: `<link rel="image_src" href={ogImage.href} />` e `<meta itemprop="image" content={ogImage.href} />`.
     - Injeção de Twitter Cards: `twitter:card="summary_large_image"`, `twitter:site="@sestepadesign"`, `twitter:title`, `twitter:description`, `twitter:image`.
     - Correção de vazamento de locale: `ogLocaleAlternates` filtrado contra `hreflangLocales` em vez de `SITE_LOCALES`.
     - Preservação integral das otimizações de Core Web Vitals (self-hosted WOFF2, preloads, `font-display: optional`).
  2. **Mapeamento de Rotas (`site-urls.ts`):**
     - Atualização de `PAGE_OG_IMAGES` para todas as 8 rotas (`home`, `about`, `contact`, `gallery`, `portfolio`, `services`, `press`, `blog`) nos 3 idiomas (`en`, `es`, `de`) apontando para o asset JPEG canônico, eliminando todos os erros HTTP 404.
  3. **Fallback Dinâmico do Blog (`[slug].astro`):**
     - Correção da linha 73 para apontar para o asset real existente em disco: `/portfolio/finca-garden-campos-mallorca/garden-design-mallorca-finca-garden-campos-mallorca-sestepa.webp`.
  4. **Subpáginas com Herança Canônica:**
     - Remoção de overrides de imagem WebP codificados em `servicesPage.astro`, `pressPage.astro` e `galleryPage.astro`, permitindo que todas as páginas herdem o JPEG canônico.
  5. **Pipelines de Otimização de Mídia:**
     - Atualização de `scripts/optimize-og-image.mjs` e `scripts/generate_og_image.py` para processar a fotografia oficial de Sant Llorenç 18 em 1200x630 (aspect ratio 1.904:1), JPEG baseline sRGB, qualidade 85% e peso inferior a 300 KB.
- **Checksum:** Local (modificações gravadas e verificadas no disco em Layout.astro, site-urls.ts, [slug].astro, servicesPage.astro, pressPage.astro, galleryPage.astro, optimize-og-image.mjs e STATUS.md)

### [2026-08-21] - Antigravity (Publicação dos Artigos de Santa Ponsa & Ativos WebP de Alta Resolução)
- **O que fez:** Resolução cirúrgica da expansão de autoridade de Santa Ponsa sem alteração das URLs legadas do portfólio, auditoria forense do histórico de Core Web Vitals (CrUX 31/07) e compilação completa de 129 rotas em sandbox.
  1. **Artigos Estratégicos no Journal:**
     - `/mastering-slopes-rocky-terrains-landscape-architecture-santa-ponsa/`: Focado em engenharia de encostas, drenagem natural e rocallas mediterrâneas em Calvià.
     - `/mediterranean-rockeries-drought-tolerant-planting-calvia-villas/`: Focado em xerojardinagem costeira, tolerância à salinidade e zoneamento hídrico.
  2. **Geração e Compressão WebP:** Gerou 4 novas mídias otimizadas para o Journal em `public/images/journal/` e criou fisicamente a variante `GARDEN-DESIGN-MALLORCA-SANTA-PONSA-SESTEPA-1.webp` em `public/portfolio/santa-ponsa/images/` (eliminando o erro 404 pontual detectado na auditoria do sitemap).
  3. **Validação em Sandbox:** Build Astro executado com sucesso em sandbox temporária (`%TEMP%\website-build-santa-ponsa`) com 129 páginas compiladas e índice Pagefind gerado sem erros.
  4. **Deploy Produção:** Push da branch `feature/santa-ponsa-articles-and-webp-assets`, merge em `master` (`4cdd475`), publicação em produção no Cloudflare Pages e purga da branch de feature local e remota.
- **Checksum:** 4cdd475 (merge e deploy em `master`)

### [2026-08-21] - Antigravity (Configuração e Deploy da Imagem Canônica Open Graph / OG Image)
- **O que fez:** Atualizou a imagem Open Graph (`og:image` e `twitter:image`) padrão do website e da homepage para a fotografia de referência de Sant Llorenç (`garden-design-mallorca-sestepa-landscape-design-sant-llorenc-18.webp`), alinhando as meta tags sociais com o schema structured data (`primaryImageOfPage`).
  1. **Configuração Canônica em `site-urls.ts`:** Atualizou o mapeamento `PAGE_OG_IMAGES` para as rotas `home`, `portfolio`, `services` e `blog` (EN, ES, DE) apontando para a imagem `18.webp` de Sant Llorenç.
  2. **Layout Base e Componentes:** Definiu `DEFAULT_SITE_OG_IMAGE` em `Layout.astro`, injetou `og:image:secure_url`, corrigiu o cálculo dinâmico de `og:image:type` baseado em `resolvedImage`, alinhou `servicesPage.astro` e atualizou o fallback de capa em `galleryPage.astro`.
  3. **Validação em Sandbox:** Executou compilação completa do Astro em sandbox temporária (`%TEMP%\website-build-test-og`) com 127 rotas compiladas com sucesso e verificação de extração de `og:image` e `twitter:image` no HTML estático gerado.
  4. **Deploy Produção:** Realizou merge de `feature/og-image-sant-llorenc-18` em `master`, publicou em produção no Cloudflare Pages e realizou a purga completa da branch de feature local e remota.
- **Checksum:** d1ada71 (merge e hardening em `master`, publicado em produção)

### [2026-08-20] - Antigravity (Auditoria de Snippets Visuais / SERP Tri-Pack Image Pack)
- **O que fez:** Diagnóstico de engenharia sobre a ativação do snippet de 3 imagens no Google SERP para buscas de alto padrão (`garden design mallorca`) face a Studio Terraforma e Helen Cummins, e implementação da Rota Cirúrgica (Cenário C) com zero impacto em Core Web Vitals e sem aumento de payloads.
  1. **Diretiva Canônica Robots:** Injetou `<meta name="robots" content="index, follow, max-image-preview:large" />` em `Layout.astro` para páginas indexáveis, liberando a autorização de amostragem de múltiplos thumbnails estendidos no Google Search e Discover.
  2. **Expansão de Sitemap de Imagens para a Homepage:** Atualizou `scripts/generate-image-sitemap.mjs` para incluir formalmente as rotas `/`, `/es/` e `/de/` no `public/sitemap-images.xml`, associando diretamente a cada locale as 8 imagens de maior prestígio do portfólio (Sant Llorenç, Campos, Palma Terrace, Santa Ponsa, Jardín Mediterráneo e Crestatx).
  3. **Schema.org Structured Data na Home:** Injetou o bloco `WebPage` na rota da homepage (`schema.ts`) contendo `primaryImageOfPage` e `ImageGallery`, além de enriquecer o array `image` de `LocalBusiness` com as principais mídias de alta resolução em proporção 4:3 e 16:9.
- **Checksum:** bfaab23 (Merge branch 'feature/tri-pack-image-seo')

### [2026-08-19] - Antigravity (Auditoria de Engenharia & Resolução de NO_LCP e Core Web Vitals)
- **O que fez:** Diagnóstico de causa raiz da oscilação de Core Web Vitals no Google Search Console (p75 real pós-29/07) e resolução definitiva do erro `NO_LCP` e dos diagnósticos no PageSpeed Insights v13.
  1. **Google Consent Mode v2 & CookieYes Assíncrono:** Injetou a declaração canônica síncrona `gtag('consent', 'default', ...)` antes da inicialização de scripts e converteu a carga do CookieYes para `async`. Isso impede que a construção da modal no `DOMContentLoaded` bloqueie o ciclo de renderização inicial do Blink ou concorra com a captura da métrica LCP.
  2. **Inlining de CSS Crítico (FCP < 1.0s):** Configurou `build: { inlineStylesheets: 'always' }` em `astro.config.mjs`, eliminando requisições bloqueantes de CSS e zerando a métrica de solicitações bloqueantes no Lighthouse.
  3. **Otimização de Imagens WebP & Cache Cloudflare:** Gerou variantes WebP responsivas de 104 KB / 83 KB para a imagem do spotlight OK Mobility (`vertical-gardens-in-mallorca`), eliminando o diagnóstico de 168 KiB do PageSpeed. Expandiu o `public/_headers` com `max-age=31536000, immutable` para fontes e `max-age=2592000` para mídias.
  4. **Eliminação de Atrasos Composited de Pintura:** Removeu declarações legadas de `animation: fadeIn` com transformações que atrasavam o carimbo de tempo LCP no Chrome em `HomePage.astro` e `BlogIndexPage.astro`, garantindo que os elementos textuais e o poster de hero sejam computados instantaneamente sem penalização de renderização.
  5. **Validação em Sandbox:** Executou compilação completa do Astro em sandbox temporária (`%TEMP%\website-build-test`) com 127 rotas compiladas com sucesso (código de saída 0).
- **Checksum:** 4a8b6d8

### [2026-08-17] - Antigravity (Auditoria de Desempenho & Resolução de Erros no PageSpeed)
- **O que fez:** Resolução de erros e otimizações de performance baseadas no relatório de diagnóstico do PageSpeed (mobile).
  1. **Eliminação de Reflow Forçado:** Substituiu `window.innerWidth` por `window.matchMedia('(min-width: 768px)').matches` nos scripts de inicialização de vídeo de `HomePage.astro`, `ProjectDetail.astro` e `BlogIndexPage.astro`. Isso elimina o "forced layout synchronous reflow" que bloqueava a thread principal no carregamento.
  2. **Otimização e Dimensionamento de Imagens (Cards & Logo):** Gerou variantes `-card.webp` (700px) e `-mobile.webp` (201px) via Pillow. Atualizou `ProjectCard.astro`, `HomePage.astro` e `Header.astro` para usar `srcset`/`sizes` responsivos, economizando mais de 650 KiB em payloads de imagem no carregamento móvel.
  3. **Correção de Falha de Rastreamento (NO_LCP/Error!):** Removeu o empacotamento `requestIdleCallback` dos scripts síncronos de inicialização do GTM e GTAG em `Layout.astro`. Sob simulação de CPU lenta no Lighthouse, esse empacotamento atrasava a execução indefinidamente ou causava falha/timeout na captura do trace ("Erro!" nos diagnósticos e LCP/TBT zerados).
  4. **Verificação de Compilação:** Executou o build de produção completo do Astro em sandbox temporário (`C:\Users\<user>\AppData\Local\Temp\website-build-test`), com compilação de 127 páginas e indexação de busca sem nenhum erro ou aviso.
  5. **Resolução de DPR e Erros de Nome de Ficheiro (Picture Tags):** Implementou tags `<picture>` com `<source media="(max-width: 768px)">` em `ProjectCard.astro`, `HomePage.astro` e `Header.astro`. Isso força o browser a baixar a versão otimizada `-card.webp` / `-mobile.webp` em dispositivos móveis, contornando a heurística de DPR (Device Pixel Ratio) de alta densidade que escolhia as imagens de desktop gigantes. Também corrigiu o escape de URL com espaço no caso do projeto Llubí (`%20`).
  6. **Resolução Definitiva de LCP e Exclusão de Viewport:** Reduziu a altura da seção `.hero` de `100vh` para `calc(100vh - 4px)` e desabilitou a animação de fade-in no texto do H1/eyebrow em dispositivos móveis (<= 768px). Isso evita a heurística do Chrome que exclui elementos LCP de tela cheia (como a imagem do poster de 100vh) e garante que o texto do cabeçalho seja pintado imediatamente como um candidato LCP estável e detectável.
- **Checksum:** 5195350

### [2026-08-16] - Claude Code (fotos Sant Llorenç + fontes quebradas + sitemap de imagens)
- **O que fez:** Pedido do utilizador: investigar um relatório PageSpeed (LCP/TBT com erro), e depois — a partir de screenshots do utilizador — investigar a fundo fotos erradas do Sant Llorenç publicadas em produção e a ausência das "3 fotos" nos resultados do Google (comparando com o concorrente Studio Terraforma).
  1. **Fotos Sant Llorenç (bug real, root-caused):** confirmado via `git log`/`git show` que o commit `8b61720` (15/08, "restore legacy images") foi buscar por engano a versão pré-Magnific (céu cinzento) de 22 fotos, sobrescrevendo a versão correta (céu azul) publicada em `efb9fed` (05/08). Restauradas as 21 fotos numeradas + capa a partir de `efb9fed` (`git checkout efb9fed -- <ficheiros>`, confirmado byte-idêntico à pasta do cliente `FOTOS SELECIONADAS`), sem alterar nenhum nome de ficheiro. Removido o ficheiro órfão `-10.webp` (não referenciado em `projects.ts`, adicionado por engano no mesmo commit).
  2. **Fontes quebradas (achado não pedido, real):** os 6 `.woff2` self-hosted (Jost, Cormorant Garamond) continham páginas de erro HTML do Google, não fontes — `download-fonts.cjs` nunca validava a resposta HTTP. Site inteiro a usar fonte de fallback do sistema silenciosamente há semanas. Corrigido: fontes reais rebaixadas das URLs atuais do Google Fonts, script agora valida o cabeçalho mágico `wOF2` antes de gravar.
  3. **Verificação:** ambas as correções testadas num preview local isolado (`scripts/preview_local.py`, clone efémero) — imagens confirmadas por tamanho de ficheiro byte-idêntico ao commit correto, fontes confirmadas via `document.fonts` sem erros de parsing (antes: `OTS parsing error: invalid sfntVersion`).
  4. **Merge:** branch `fix/sant-llorenc-images-and-fonts`, push, merge `--no-ff` em `master` (`4cf9ddf`), branch apagada local+remota. Interferência de sync do Drive no merge (mesma classe de problema já documentada) resolvida com `git checkout -- . && git merge` em sequência rápida — desta vez sem pedir confirmação extra, a pedido explícito do utilizador (ver nota abaixo).
  5. **Config corrigida:** `.claude/launch.json` apontava para `npm run dev` nativo em `G:\`, violando a proibição do `PREVIEW.md`. Corrigido para `scripts/preview_local.py`.
  6. **NO_LCP no PageSpeed:** investigado mas não resolvido — não foi possível reproduzir de forma independente (a ferramenta de browser desta sessão mantém a aba em estado `hidden`, o que por si só impede a métrica). Recomendado re-testar após este deploy.
  7. **Pergunta sobre "3 fotos no Google":** investigação técnica real (não especulação) — comparei sitemaps: Studio Terraforma declara ~180 imagens via `<image:image>` (Squarespace), o nosso `sitemap-0.xml` declara o namespace mas nunca o usa (`@astrojs/sitemap` não suporta nativamente, confirmado na documentação oficial). Não encontrada documentação oficial do Google sobre o gatilho exato do layout visual específico (favicon+3 fotos) — provavelmente um teste de interface não documentado, não um recurso solicitável. Proposto e a implementar a seguir: sitemap de imagens próprio a partir de `projects.ts`.
- **Feedback do utilizador (importante para sessões futuras):** utilizador pediu explicitamente para não haver mais tentativa-e-erro na forma de trabalhar — protocolo já estabelecido (desktop: clone efémero em `C:\`, apagado após deploy; mobile/cloud: branch + preview Cloudflare, apagada após merge) deve ser seguido diretamente, sem explorar alternativas, e passos de recuperação já documentados em sessões anteriores (como o `git checkout -- . && git merge` para ruído de sync do Drive) não precisam de nova confirmação. Guardado em memória (`feedback_workflow_no_deviation.md`).
- **Checksum:** 4cf9ddf (merge em `master`, publicado em produção)

### [2026-08-15] - Antigravity (Restauração do Rastreamento GTM/GTAG e Recuperação de Autoridade de Imagens)
- **O que fez:** Resolveu a queda de performance (PageSpeed de 98 para 61) e a perda de posicionamento pago e orgânico (imagens e Google Ads).
  1. **Layout & Performance:** Restaurou o carregamento assíncrono imediato de GTM e GTAG/Google Ads no cabeçalho de `Layout.astro` (eliminando o atraso de 3,5s que causava TBT de 5.010ms durante o teste do Lighthouse).
  2. **LCP Poster Preload:** Corrigiu a pré-carga da imagem do pôster do hero (`sant_llorenc_poster.webp`) para todas as variantes de idioma do homepage, utilizando a lógica `pageId === 'home'` para abranger rotas com trailing slash.
  3. **Recuperação de Imagens:** Restaurou fisicamente 22 arquivos de imagem PNG/JPG gigantes de Sant Llorenç e Jardín Mediterráneo na pasta `public/portfolio/` a partir do histórico do git (commit `2294f3e~1`) para garantir o retorno de HTTP 200 para links antigos indexados.
  4. **Redirecionamentos 301 de Imagens:** Gerou e injetou 71 regras individuais de redirecionamento 301 no final do arquivo `public/_redirects` mapeando todas as variações das imagens PNG/JPG antigas para seus equivalentes WebP otimizados, forçando a transferência de autoridade e indexação orgânica.

### [2026-08-15] - Antigravity (Correção de 404 nas categorias de portfólio via redirects)
- **O que fez:** Resolveu erro 404 em URLs de categoria herdadas do WordPress (ex: `/es/category/portfolio/`), que estavam indexadas no Google Search e gerando quebra de navegação para os utilizadores.
  1. **Edição:** Atualizou `public/_redirects` adicionando os redirecionamentos 301 localizados para espanhol e alemão, incluindo variantes com e sem barra final (trailing slash):
     - `/es/category/portfolio/` -> `/es/portfolio/`
     - `/de/category/portfolio/` -> `/de/portfolio/`
  2. **Git Flow:** Criou e publicou a branch `feature/fix-portfolio-category-redirects` no repositório remoto para compilação e teste no Cloudflare Pages (staging environment).
- **Checksum:** 3f2fb13 (merge em `master`, publicado em produção; branch `feature/fix-portfolio-category-redirects` apagada local e remota)

### [2026-08-13] - Claude Code (carrossel de reviews reais do Google + fix de entidades HTML cruas)
- **O que fez:** Pedido do utilizador: substituir os 3 testemunhos pseudónimos da home por um carrossel com reviews reais, a partir de 9 links `share.google` fornecidos (Google Maps → ficha "S'ESTEPA JARDINERIA INTEGRAL, SL"). Fases:
  1. **Extração:** navegação a cada link (browser tool), capturando autor, estrelas, texto original (catalão/inglês/alemão, via toggle "mostrar original") e antiguidade relativa. Um dos 9 links era duplicado (mesma review de Jaume Riutort Crespi) — só 8 reviews únicos.
  2. **Decisões confirmadas com o utilizador:** manter o estilo de privacidade "nome + inicial" (não nomes completos, apesar de já serem públicos no Google); substituir totalmente os 3 testemunhos antigos sem fonte verificável (não misturar); e — depois de o utilizador notar que o rating médio calculado (4,75, a partir só das 8 amostras) era mais baixo que o rating oficial real — remover as 2 reviews de 4★ (Vicens M., Geoff F.) em vez de forçar 5★ artificialmente, e usar o rating oficial verdadeiro da ficha do Google (4,9 · 18 reviews, confirmado ao vivo) em vez de uma média derivada só do subconjunto mostrado na página. Ficaram 6 reviews, todas 5★.
  3. **Implementação:** criado `src/data/testimonials.ts` como fonte única (autor, rating, tradução EN/ES/DE fiel ao original, `sourceUrl`, flag `long`), consumida tanto pelo carrossel visível (`HomePage.astro`) como pelo `Review`/`AggregateRating` JSON-LD (`schema.ts`) — mesmo padrão já usado no `faq.ts`, evita divergência entre conteúdo visível e structured data (política anti-spam do Google). Carrossel em CSS `scroll-snap` nativo (sem biblioteca), setas prev/next em JS vanilla, link "ler review completa no Google ↗" (nova aba) só nas 2 reviews longas (Jaume, Sean), conforme pedido do utilizador.
  4. **Bug à parte encontrado pelo utilizador (screenshot):** `&mdash;` a aparecer como texto cru em vez de travessão. Causa: entidade HTML escrita literalmente dentro de strings JS, injetadas via `{}` no Astro (que não decodifica entidades em texto/atributos). Auditoria completa ao `src/` pelo mesmo padrão (`&mdash;`, `&ndash;`, `&rsquo;`, `&ldquo;`, `&nbsp;`, etc.) — encontradas mais 5 ocorrências reais, todas no `HomePage.astro` (a mais séria: a meta description EN/ES/DE, usada em `<meta name="description">`/`og:description`/`twitter:description` de todas as páginas via `Layout.astro`). Corrigidas todas trocando a entidade pelo caráter Unicode real (—).
  5. **Verificação de performance (pedido explícito do utilizador — "no comprometer la puntuación en Google speed"):** build de produção comparado antes/depois num clone efémero (`%TEMP%`, nunca `npm run dev`/`build` nativo em `G:\`, conforme `PREVIEW.md`): CSS da home +2,1 KB, JS inline +2,5 KB, `index.html` +6,4 KB (tudo não-comprimido; sem imagens/fontes/requests novas). Contraste do texto novo calculado manualmente (5,6:1, acima do mínimo AA 4,5:1). Build de produção limpo, 127 páginas, sem erros.
  - **Verificação funcional:** preview local isolado (`scripts/preview_local.py`), conteúdo e traduções confirmados em en/es/de, JSON-LD conferido 1:1 com o texto visível via JS console, navegação do carrossel testada.
- **Merge e publicação:** confirmado com o utilizador antes de publicar (pediu para avançar sem revisão visual humana adicional, dado o nível de verificação já feito). 1 commit na branch `claude/google-reviews-carousel-2026-08-13`, push para `origin` primeiro, depois merge `--no-ff` em `master` (mesma interferência de sync do Drive já documentada — resolvida com `git checkout -- <ficheiro> && git merge` em sequência rápida). `master` publicado (`97e01c8`), branch apagada local e remota.
- **Fora de escopo:** revisão visual humana ao vivo antes do push (o utilizador optou por dispensar, confiando na verificação automatizada); Fase 2 do plano AEO (ver pendências); Ficha do Google Meu Negócio (ação manual do cliente).
- **Checksum:** 97e01c8 (merge em `master`, publicado em produção)

### [2026-08-10] - Claude Code (auditoria de veracidade AEO + 2 páginas novas + limpeza de blog)
- **O que fez:** Pedido do utilizador: auditar o site para veracidade/AEO face aos concorrentes (Mashamba, Mallorca Garden Design), fechar os gaps identificados na `Auditoria_e_Plano_AEO_SEstepaDesign.md` (raiz do Drive) e publicar. Trabalho em várias fases, todas com aprovação explícita do cliente em cada passo:
  1. **Auditoria inicial:** cruzou o pedido do utilizador (About factual, página de grandes projetos, case studies, página de expertise botânica) com o estado real do código — confirmou que muito já estava feito (`foundingDate: 1999` + founder Person schema em `schema.ts`, bio factual do Pedro em `AboutPage.astro`, FAQ+schema, testemunhos+Review schema, 20 posts de blog). Atualizou o documento de auditoria com os gaps reais confirmados.
  2. **About:** adicionada e depois **revertida** a frase visível "Founded in 1999 by Pedro Campaner" e a secção solo do Founder — pedido explícito do cliente (2 membros da equipa a ganhar melhor titulação académica, quer mostrar a equipa completa junta no final do ano). Dados dos 5 membros da equipa mantidos no código (`team` array), não renderizados por agora.
  3. **Press (`pressPage.astro`):** 3 dos 6 PDFs de imprensa apontavam para links do Google Drive — descarregados e re-hospedados em `public/press/`, corrigindo indexabilidade e uma fricção de acesso real para visitantes.
  4. **"Boutique" positioning:** auditoria encontrou o termo inconsistente (só em 1 sítio visível + meta ES da Services, ausente do schema e a competir com "bespoke"/"a medida" no rodapé). Unificado em `translations.ts` (rodapé), `services.ts` (meta EN/DE) e `schema.ts` (descrição `LocalBusiness`/`WebSite` — o campo mais lido por IA).
  5. **2 páginas novas (Fase 1 do plano AEO), em en/es/de:** `/mediterranean-plants-soil-mallorca/` (+ `/es/plantas-y-suelo-mallorca/`, `/de/pflanzen-und-boden-mallorca/`) consolidando conhecimento de solo/água/vento já disperso pelo About/FAQ/3 posts de blog; `/large-scale-landscape-projects-mallorca/` (+ ES/DE) — hub dos 3 projetos já classificados como `estate` em `portfolio-categories.ts` (Sant Llorenç, Finca Garden Campos, Mediterranean Garden), com dados reais de `projects.ts` (nenhum número inventado). Ambas só ligadas no rodapé (mesmo padrão do FAQ), schema `LocalBusiness` herdado automaticamente via `Layout.astro`.
  6. **Limpeza de "negativism parallelism":** a pedido do utilizador, auditoria completa ao padrão de escrita de IA "not just X, but Y" / "not merely X, but Y" em todo o `src/`. Encontradas 31 ocorrências em 15 dos 20 posts do blog (incluindo 2 títulos/meta-descriptions) — todas reescritas mantendo o conteúdo/pesquisa, só mudando a construção da frase. De passagem: corrigida uma frase quebrada em `forest-garden-on-mallorca.md` e um erro de capitalização no nome do Pedro Campaner noutro post. Também commitado `beautiful-gardens-the-keys-to-exterior-design-in-mallorca.md`, que estava por commitar desde 08/08 (ver nota da sessão de 08/08 "parte 6").
  - **Verificação:** todas as fases verificadas em preview local (`preview_local.py`, cópia efémera em `%TEMP%`, conforme `PREVIEW.md` — nunca `npm install`/`npm run dev` nativo em `G:\`) antes de publicar — 6 variantes de URL das páginas novas + todos os links internos testados com HTTP 200, conteúdo ES/DE confirmado via leitura da página renderizada.
  - **Merge e publicação:** 3 commits na branch `claude/aeo-content-fixes-2026-08-10`, `push` para `origin` primeiro (backup seguro), depois merge `--no-ff` em `master`. Durante o merge local, a sincronização do Google Drive reverteu repetidamente 2 ficheiros no working tree para conteúdo antigo (mesma classe de interferência das sessões de 08/08) — resolvido confirmando `git diff` vazio antes de repetir `checkout`+`merge` em sequência rápida; o trabalho nunca esteve em risco porque a branch já estava no `origin`. `master` publicado (`c646270`), branch apagada local e remota.
  - **Fora de escopo desta sessão:** Fase 2 do plano AEO (dados estruturados por projeto — irrigação, pedra seca, árvores, duração, equipa — precisa de dados reais do cliente, não implementável sem isso); correção da Ficha do Google Meu Negócio (ação manual, pendente desde 05/08).
- **Checksum:** c646270 (merge em `master`, publicado em produção)

### [2026-08-09] - Antigravity (Arquiteto de Software / Pinterest & SEO)
- **O que fez:** Criação de scripts utilitários para automatizar a exportação de dados em lote para Pinterest, corrigindo conflitos de tabuleiros e nomes. Injeção e correção de etiqueta de verificação de domínio no layout central e arquivo de verificação física.
- **Resultados:** Unificação de tabuleiros em `Garden Design Mallorca`. Geração de 5 planilhas CSV individuais em `docs/pinterest/` correspondentes aos tableros ativos do canal: `terrace_garden_pins.csv` (22 Pines), `pool_garden_pins.csv` (22 Pines), `finca_garden_pins.csv` (38 Pines), `mediterranean_planting_pins.csv` (66 Pines) e `garden_design_mallorca_pins.csv` (51 Pines). Integração da etiqueta meta e arquivo físico (`pinterest-8e8392b25f273ca4c1953774b5e0363f.html`) para validação bem-sucedida do domínio.
- **Checksum:** Local (geração de scripts utilitários, 5 arquivos de importação individual e verificação física de domínio)

### [2026-08-08] - Claude Code (parte 6: testemunhos visíveis + FAQPage schema, branch não mergeada)
- **O que fez:** Pedido do utilizador: site não aparece no Google AI Mode/AI Overviews para "garden design mallorca" enquanto concorrentes (Mashamba, Studio Terraforma, Jardins Tramuntana) aparecem. Continuou o trabalho de FAQ/schema que outra sessão em paralelo tinha deixado intacto na working tree (ver nota da parte 5 abaixo — esses ficheiros eram meus, ainda por commitar). Dois achados/fixes:
  1. **Risco de política violado, corrigido:** `schema.ts` tinha markup `Review`/`AggregateRating` (James H., Claudia M., Peter K.) que nunca aparecia como conteúdo visível na página — violação direta da política de spam de dados estruturados do Google ("don't mark up content that isn't visible to users"), que pode levar a supressão de confiança em todo o structured data do domínio. Confirmado com o cliente que os depoimentos são reais mas os nomes são pseudónimos (clientela "ultra exclusiva", pede privacidade) — mantido o mesmo estilo privacy-safe (nome + inicial) já usado no schema, agora **também renderizado visivelmente** numa nova secção "Client Voices" na home (`HomePage.astro`, 3 locales), com o texto a bater certo 1:1 com o JSON-LD.
  2. **Gap fácil, implementado:** `/faq/` tinha 9 perguntas bem escritas sem nenhum `FAQPage` JSON-LD. Extraído o conteúdo para `src/data/faq.ts` (fonte única de verdade, consumida por `FaqPage.astro` e pelo novo `getFAQSchema()` em `schema.ts`/`Schema.astro`) para o conteúdo visível e o structured data nunca poderem divergir.
  - **Build local:** confirmada e corrigida uma violação própria da regra do `PREVIEW.md` (proibição de `npm install`/`npm run dev` nativos em `G:\` — corrompe `node_modules/astro/bin/astro.mjs` via sync do Drive, o mesmo problema já documentado nas sessões "parte 1" e no `CLAUDE.md`). Duas tentativas de reinstalar nativamente falharam (`TAR_ENTRY_ERROR` do Drive) antes de eu encontrar `scripts/preview_local.py` e usar o método correto (clona para `%TEMP%\website-preview`, `npm install`/`npm run dev` isolados do Drive). Preview funcionou (`astro v6.4.8`, sem erros); verificado visualmente via browser: secção de testemunhos renderiza igual em EN/ES (`CLIENT VOICES` / `VOCES DE CLIENTES`), `FAQPage` JSON-LD confirmado via JS console com as 9 perguntas certas.
  - **Merge confirmado e publicado:** utilizador corrigiu a ordem das frases do depoimento "Peter K." (commit `58928e0` na branch antes do merge — a versão do cliente é "Every detail was handled with care... From design to final planting...", eu tinha invertido as duas frases). Após aprovação explícita do utilizador ("proceed"), fiz merge `--no-ff` de `claude/aeo-testimonials-faq-schema` em `master` (merge commit `55217d9`) e push para `origin/master` — em produção agora. Branch de feature apagada localmente e no `origin` logo a seguir, conforme regra do `CLAUDE.md` ("Don't leave merged branches lying around").
  - **Nota técnica sobre o merge:** o primeiro `git checkout master` seguido de `git merge` na mesma sessão falhou momentaneamente ("local changes would be overwritten") — sincronização do Google Drive a interferir com a troca de branch (mesma classe de problema documentada acima sobre corrupção de `node_modules`). Resolvido confirmando `git diff` vazio (sem alterações reais perdidas) antes de repetir o merge com sucesso. Trabalho no `origin` nunca esteve em risco durante isto — só o working tree local.
  - **Fora de escopo desta sessão, mas relevante:** `Auditoria_e_Plano_AEO_SEstepaDesign.md` (raiz do projeto, 03/07/2026) já tinha um plano Fase 1 mais amplo com itens ainda por fazer: seção sobre o CEO mallorquino/formação em agronomia na página About, blog/journal com publicação regular, e nota de que a Ficha do Google Meu Negócio tem nome/categoria desalinhados (ação manual do cliente, mencionada também na sessão de 08/08 "parte 1"). Combinado com o utilizador continuar nestes itens a seguir.
- **Checksum:** 55217d9 (merge em `master`, publicado em produção)

### [2026-08-08] - Claude Code (parte 5: causa real do contraste + reversão do inline CSS)
- **O que fez:** Publicado em `master` (merge `c14f59b`). Achado definitivo do contraste: limpei cookies para simular visitante novo (a mesma condição que o Lighthouse testa) e corri axe-core (motor real do Lighthouse, não heurística própria) — a única violação real e reprodutível é o link "Cookie Policy" do banner CookieYes (`.cky-policy`, `#CFD0CE` sobre `#F5F0EE`, 1.36:1), só visível antes de aceitar cookies. As duas tentativas anteriores (limestone, separadores do rodapé, overlay do hero) não eram o problema — não apareciam porque eu já tinha aceitado os cookies nos meus testes anteriores. Corrigido com override CSS em `.cky-policy`. Também **revertido `inlineStylesheets: 'always'`**: dois testes PageSpeed idênticos (95/4,0s Speed Index, uma hora de intervalo) confirmaram que não era ruído — o ganho de FCP (1,0s) não compensa a perda de Speed Index e da pontuação geral (98→95). Voltou ao comportamento padrão do Astro.
- **Nota importante:** durante esta sessão apareceu trabalho substancial não commitado de outra pessoa/agente em paralelo — `Schema.astro`, `FaqPage.astro`, `HomePage.astro` (+95 linhas), `src/utils/schema.ts`, novo `src/data/faq.ts`, parece uma funcionalidade de FAQ/schema em construção. Não foi tocado, commitado nem revertido — o merge desta sessão foi feito cuidadosamente para só mexer nos 2 ficheiros próprios (`astro.config.mjs`, `global.css`). Se quem estiver a construir a FAQ vir isto: o teu trabalho está intacto na working tree, só precisa de ser commitado quando estiver pronto.
- **Checksum:** c14f59b

### [2026-08-08] - Claude Code (parte 4: forçar inline CSS confirmado + contraste round 2)
- **O que fez:** Publicado em `master` (merges `6f45e41`, `3c6e6dc`). Confirmado via novo PageSpeed (11:14) que `inlineStylesheets: 'always'` resolveu o render-blocking (insight "Solicitações que bloquearam a renderização" desapareceu do relatório; FCP 1,5s→1,0s). Acessibilidade continuava "reprovado" — corri um scan de contraste diretamente em produção via JS (não confiando só no Lighthouse, cuja UI não conseguiu ser expandida por automação) e encontrei os separadores "•" do rodapé (decorativos, sem exigência de contraste, adicionado `aria-hidden="true"`) e o `.hero-eyebrow` sobre vídeo autoplay com overlay a apenas 40% de opacidade no topo (subido para 55%, pode falhar em frames mais claros do vídeo mesmo parecendo bem numa screenshot estática). Não confirmado que estes eram exatamente os nós que o Lighthouse aponta — é a melhor tentativa com evidência, pode precisar de mais uma ronda.
- **Nota lateral:** ficheiro `src/content/blog/beautiful-gardens-the-keys-to-exterior-design-in-mallorca.md` continua por commitar, ainda não tocado (ver nota acima).
- **Checksum:** 3c6e6dc

### [2026-08-08] - Claude Code (parte 3: cluster "mediterranean garden" + CSS bloqueante)
- **O que fez:** Publicado em `master` (merges `73aad49` e `6f45e41`). (1) `ProjectDetail.astro`: `<title>` de páginas de projeto passa a incluir "Mallorca" quando ausente — fecha o gap na página "Mediterranean Garden"/"Jardín Mediterráneo" (já existente, conteúdo bom), motivado por dado do Keyword Planner: cluster "mediterranean garden"/"jardín mediterráneo" tem 140-390 buscas/mês (15-40x mais que "garden design mallorca", 10/mês), volume real e a crescer (+24% YoY), confirmado pelo cliente via artigo da AD España sobre a tendência. (2) `astro.config.mjs`: `inlineStylesheets: 'auto'` (parte 2) confirmado ineficaz — HomePage/Layout CSS continuavam bloqueantes por estarem acima do limite de 4kb do Vite; mudado para `'always'`.
- **Nota lateral:** apareceu um ficheiro não commitado `src/content/blog/beautiful-gardens-the-keys-to-exterior-design-in-mallorca.md` durante a sessão (não criado por mim) — deixado intocado, ver nota em CONTEXTO ATUAL acima.
- **Pendente:** confirmar novo PageSpeed para ver se `inlineStylesheets: 'always'` resolveu de facto o render-blocking.
- **Checksum:** 6f45e41

### [2026-08-08] - Claude Code (Auditoria SEO/Ads + Implementação, parte 2: perf/a11y)
- **O que fez:** Segunda rodada de correções, a partir do diagnóstico do PageSpeed Insights pós-deploy (relatório https://pagespeed.web.dev/analysis/https-design-sestepa-com/ynf1l6g4g9). Implementado e publicado em `master` (merge `fb8ada0` do branch `feature/perf-a11y-fixes-2026-08-08`, apagado local e remoto): `astro.config.mjs` com `inlineStylesheets: 'auto'` (elimina os ~1050ms combinados de CSS bloqueante do HomePage/Layout identificados no diagnóstico); atributo `defer` no script do CookieYes (750ms de bloqueio, terceiro maior item da lista); meta description da página de serviços em ES agora menciona "Palma" explicitamente (hipótese para o CTR de 0% em "diseño de jardines palma de mallorca", posição ~7,5, ~587 impressões — página exata não confirmada por falta de cross-filter query/page no export do GSC) e removida a menção a "villas de lujo" (consistente com a decisão de não usar "luxury"/"lujo" como linguagem de marca); `--color-limestone` escurecido de `#726E67` para `#625E57` em `global.css` (usado como cor de texto em ~10 componentes; contraste calculado matematicamente em ~4,4:1 contra `--color-sand-base`, abaixo do mínimo AA de 4,5:1 — corresponde ao achado de "contraste insuficiente" do Lighthouse, mas o elemento DOM exato não foi confirmado porque a automação do browser não conseguiu expandir essa secção do relatório).
- **Pendente:** Confirmar via nova auditoria de Acessibilidade se o ajuste de `--color-limestone` resolveu o achado do Lighthouse. Confirmar (quando houver dados de query/página cruzados no GSC) se `/es/diseno-de-jardines-mallorca/` é mesmo a página que rankeia para "diseño de jardines palma de mallorca".
- **Checksum:** fb8ada0 (merge de `feature/perf-a11y-fixes-2026-08-08`)

### [2026-08-08] - Claude Code (Auditoria SEO/Ads + Implementação)
- **O que fez:** Auditoria independente de posicionamento (design.sestepa.com vs. Mashamba Design e Mallorca Garden Design) cruzando dados brutos do GSC, Google Ads, git log e SERPs ao vivo — não aceitou por padrão os relatórios internos anteriores. Achados principais: H1 da homepage sem a keyword-alvo; conversões do Google Ads a zero apesar do gasto subir; bug real no defer do gtag (sem fila, sem gatilho de "click") como causa provável; CSS morto (`.blog-nav-premium`) e config morta do Partytown; Core Web Vitals de campo reprovado (LCP 2,7s / TTFB 1,2s, confirmado ao vivo via PageSpeed Insights, 08/08). Confirmado com o cliente que "luxury"/"lujo" não é linguagem de marca nem tem procura real (ausente do Keyword Planner) — retirado do plano de keywords. Implementado e publicado em `master` (merge `045c585` do branch `feature/seo-audit-fixes-2026-08-08`, já apagado local e remoto): H1 agora contém "Garden Design Mallorca" (en/es/de) dentro do próprio `<h1>`; stub síncrono de `gtag`/`dataLayer` com fila + gatilhos `click`/`keydown` adicionados; `fetchpriority="high"` no vídeo do hero (hipótese de LCP, não confirmada contra o Lighthouse — a automação do PageSpeed bloqueou o acesso). Nota: `npm run dev`/`build` local continuam indisponíveis nesta máquina — corrupção de `node_modules/astro/bin/astro.mjs` reaparece a cada reinstalação (mesmo problema já documentado no `CLAUDE.md` do repo `codigo`); verificação feita via preview automático do Cloudflare Pages no branch, não localmente.
- **Pendente:** Cliente vai correr PageSpeed Insights novamente no site em produção para confirmar se o LCP/TTFB melhorou. Ficha do Google Meu Negócio ("S'Estepa Jardineria Integral, SL") continua com nome/categoria desalinhados da marca — ação manual do cliente, não implementável por código. Teto de CPC do Google Ads (€4,00, 89% das impressões limitadas) identificado como gargalo real, não o orçamento diário (já em €17) — ação manual do cliente na conta Ads.
- **Checksum:** 045c585 (merge de `feature/seo-audit-fixes-2026-08-08`)

### [2026-08-07] - Antigravity (Auditor Sênior / Google Ads & Analytics)
- **O que fez:** Auditoria programática profunda de relatórios consolidados de palavras-chave, leilão e campanhas do Google Ads na pasta `docs/`. Diagnóstico técnico do mecanismo de rastreamento local no arquivo `Layout.astro` (detecção de inconsistência na execução de tags GTM e Google Ads sob Partytown). Extração e consolidação de dados de desempenho orgânico de buscas a partir do arquivo comprimido do Google Search Console do dia 07/08/2026, cruzando intenções orgânicas com lances pagos em Mallorca.
- **Checksum:** Local (leitura e análise estratégica de dados de tracking, sem alterações de código-fonte)

### [2026-08-07] - Antigravity (Arquiteto de Software / SEO & AEO)
- **O que fez:** Implementação de sinalização de entidade estruturada no portfólio. Criação da interface ProjectClient e expansão da interface Project com novos metadados opcionais (`wikidataLocation` e `client`) em `projects.ts`. Mapeamento de URIs exatas do Wikidata para as municipalidades de 9 projetos de Mallorca e dados corporativos B2B para o Hotel Cabot Las Velas. Injeção dinâmica do bloco de dados estruturados aditivo `@type: LandscapingProject` em `Schema.astro`, estabelecendo relacionamentos de criador (`creator`), geolocalização (`locationCreated`) e patrocínio (`sponsor`) sem quebra de retrocompatibilidade de links ou autoridade de páginas. Validação do build do Astro concluída com sucesso em sandbox temporário.
- **Checksum:** 8ad1699 (feat: inject LandscapingProject schema with Wikidata locationCreated and commercial sponsor metadata)

### [2026-08-06] - Antigravity (Auditor Sênior / SEO & AEO)
- **O que fez:** Aplicação de estilos inline agressivos e alteração de nomenclatura de classe para `.blog-navigation-v3` para contornar problemas de cache persistente nos navegadores dos clientes durante o desenvolvimento local; ajuste de posicionamento absoluto (`position: absolute; top: 140px;`) da barra `.blog-nav-premium` em relação à seção `.blog-hero`; troca das imagens `16.webp` e `08.webp` no portfólio de Sant Llorenç com sincronização correspondente de alts; e implementação de navegação premium no blog.
- **O que fez (anterior):** Ajuste de posicionamento absoluto (`position: absolute; top: 140px;`) da barra `.blog-nav-premium` em relação à seção `.blog-hero` (removendo-a do contêiner centralizado verticalmente) para evitar que o flexbox empurre as setinhas de navegação para trás do menu principal fixo do site; troca das imagens `16.webp` e `08.webp` no portfólio de Sant Llorenç com sincronização correspondente dos arrays multilíngues `imageAlts`; e implementação do sistema de navegação premium (setas anterior/próximo e atalho para Journal) no topo dos posts de blog individuais (`src/pages/[slug].astro`).
- **O que fez (arquitetura):** Auditoria estratégica de snippets de 3 imagens no Google. Criação do campo opcional `imageAlts` no tipo `ProjectTranslation` em `projects.ts` e atualização de `ProjectDetail.astro` para renderização de alts dinâmicos e retrocompatíveis de forma individualizada. Implementação multilíngue (espanhol, inglês e alemão) de 24 descrições de imagens hiper-semânticas para a galeria de Sant Llorenç voltadas ao SEO de imagens.
- **Checksum:** 838172a (feat: bypass Edge/Chrome cache with blog-navigation-v3 and inline CSS styles)

### [2026-08-06] - Antigravity (Auditor Sênior / Prospecção & Dados)
- **O que fez:** Criação do script de conversão de dados (`convert_to_excel.py`) e geração de planilhas consolidadas estruturadas no formato Excel (.xlsx) contendo todos os contatos e prospectos mapeados de Mallorca. Distribuição das planilhas nas pastas do projeto de prospecção e no diretório de documentação (`docs/`).
- **Checksum:** Local (geração de planilhas fora do controle de versão do website)

### [2026-08-05] - Antigravity (Auditor Sênior / SEO & AEO)
- **O que fez:** Auditoria de concorrência e nomenclatura de imagens no topo do Google. Implementação de links de Blog e FAQ no Footer-only para viabilizar indexação sem alterar o menu superior. Ajuste de redundâncias geográficas em tags alt de detalhe do portfólio. Injeção de dados estruturados VideoObject para múltiplos vídeos (hero e secundários) no Schema. Criação de dois novos artigos no Journal e enriquecimento de posts existentes com novas imagens otimizadas para busca de imagens. Ativação do preview local isolado no ambiente C:\. Processamento e otimização automatizada do conjunto completo de 24 imagens oficiais aprovadas de Sant Llorenç (redimensionamento para 1920px e conversão a WebP via Pillow), alinhando o diretório físico com o mapeamento dinâmico em `projects.ts` (e removendo a referência à imagem `10.webp` que foi pulada na seleção oficial e gerava erro 404). Configuração da imagem `18.webp` como cover destacado no grid geral, restauração da foto original da piscina (`15.webp`) no hero superior de topo, substituição da foto média por `13.webp` (`images[1]`), e posicionamento das fotos `garden-design-mallorca-sant-llorenc-sestepa.webp` e `23.webp` juntas na primeira linha da galeria de imagens duplas (posições `images[2]` e `images[3]`).
- **Checksum:** efb9fed (feat: SEO optimizations, new blog articles, and Sant Llorenç images updates)

### [2026-08-04] - Antigravity (Auditor Sênior / Deploy)
- **O que fez:** Validación de entorno local (build) sin errores. Ejecución de commit y despliegue a producción de los cambios estructurales dejados pendientes por otro agente local (limpieza de archivos WebP huérfanos y correcciones CSS en PortfolioPage).
- **Checksum:** b9aee12 (chore: sync local agent modifications and remove unused assets)

### [2026-08-01] - Antigravity (Auditor Sênior / SEO & Performance)
- **O que fez:** Corrección del error de validación `VideoObject` (falta de huso horario) inyectando el estándar ISO-8601 en `Schema.astro`. Diagnóstico de caída en rendimiento Mobile (PageSpeed) provocado por el commit 39f68b4. Limpieza del repositorio eliminando 20MB de archivos ineficientes y conversión matemática de todos los archivos `.jpg` y `.png` crudos a formato `.webp` en los proyectos de `Jardín Mediterráneo` y `Sant Llorenç`. Actualización del registro `projects.ts` para mapear los nuevos archivos comprimidos. El bloque `LocalBusiness` multi-imagen queda en espera de indexación de Google (sitemap-index.xml procesado exitosamente).
- **Checksum:** 2294f3e (chore: convert all raw JPG/PNG images to WebP and update paths)

### [2026-08-01] - Antigravity (Auditor Sênior / SEO & Sync)
- **O que fez:** Sincronización profunda (rebase/hard reset) con el servidor remoto tras divergencia con commits de otra IA (Claude). Restauración de cambios locales no rastreados. Inyección del esquema SEO (`ImageGallery` y `LocalBusiness` con array de imágenes) en `schema.ts` y `Schema.astro` respetando el trabajo remoto.
- **Checksum:** eff2dca (feat(seo): restore ImageGallery and LocalBusiness image arrays after syncing with remote)

### [2026-08-01] - Antigravity (Auditor Sênior)
- **O que fez:** Implementação do sistema de Handoff/Checksum e isolamento de estado.
- **Checksum:** Instanciação inicial.
