# Auditoria de Untracked e Assets — S'Estepa Design — 2026-10-06

## Regra desta auditoria

Nenhum arquivo foi apagado, movido ou incorporado ao deploy nesta etapa. A classificacao abaixo e uma proposta operacional para evitar perda de trabalho de outros agentes e proteger SEO, performance e organizacao.

## Resumo atual

Depois de ignorar artefatos temporarios (`public/_clpreview*.html`), caches Python e o HTML duplicado `public/api/docs.html`, restam 278 arquivos untracked nao ignorados.

| Grupo | Arquivos | Peso aprox. | Classificacao recomendada |
|---|---:|---:|---|
| `public/gallery/curated-2026/` | 135 | 85.20 MB | Feature/lab pendente de decisao editorial |
| `public/portfolio/vertical-garden/` | 44 | 17.39 MB | Duplicados/alternativas; nao publicar sem mapa |
| `public/portfolio/vertical-gardens-in-mallorca/` | 44 | 17.39 MB | Duplicados/alternativas; comparar com projeto canonical |
| `public/portfolio/binissalem/` | 19 | 10.10 MB | Possivel expansao de galeria; precisa atualizar dados/sitemap se entrar |
| `public/portfolio/sant-llorenc/` | 20 | 8.03 MB | Alternativas SEO; arquivos referenciados atuais ja existem |
| `public/images/diagrams/` | 8 | 0.03 MB | Diagramas provaveis de blog/artigo; confirmar uso antes de deploy |
| `src/content/blog/` | 4 | 0.01 MB | Artigos antigos/rascunhos; ja existem redirects WordPress para alguns slugs |
| `src/data/curated-gallery-2026.ts` + `src/pages/lab/nova-galeria.astro` | 2 | 0.03 MB | Codigo de lab conectado a `curated-2026`; publicar somente se aprovado |
| `docs/AUDITORIA-OPERACIONAL-2026-10-06.md` + `docs/UNTRACKED-ASSETS-AUDIT-2026-10-06.md` | 2 | pequeno | Relatorios criados nesta auditoria; podem ser versionados |

## Decisoes por grupo

### 1. `public/gallery/curated-2026/`

Status: nao e lixo. Existe codigo untracked apontando para essas imagens:

- `src/data/curated-gallery-2026.ts`
- `src/pages/lab/nova-galeria.astro`

Interpretacao: parece uma nova galeria/lab editorial com 135 WebP ja nomeados para SEO. Pode ser util, mas adiciona cerca de 85 MB ao deploy e provavelmente duplica imagens que ja vivem em projetos individuais.

Recomendacao:

- Nao publicar automaticamente.
- Revisar visualmente a galeria e reduzir para selecao final antes de deploy.
- Se aprovado, decidir se a rota fica em `/lab/nova-galeria/`, se vira galeria oficial, ou se serve apenas como curadoria interna.
- Se virar pagina publica, atualizar sitemap, links internos e estrategia SEO.

### 2. Vertical Garden: `vertical-garden` e `vertical-gardens-in-mallorca`

Status: ha duplicacao entre duas pastas parecidas e entre `.jpg` e `.webp`.

Risco:

- Entrar tudo no deploy aumenta peso e confunde fonte de verdade.
- `vertical-gardens-in-mallorca` parece ser o slug canonical atual.
- Arquivos JPG em `public/` tendem a ser candidatos a `originais-grandes/` ou conversao final.

Recomendacao:

- Definir uma pasta canonical para producao.
- Manter no deploy somente WebP usados por `src/data/projects.ts` e sitemap.
- Mover JPG/originais para `originais-grandes/vertical-garden/...` depois de aprovacao.
- Apagar duplicados apenas depois de confirmar que nao sao referenciados.

### 3. Binissalem

Status: existem arquivos `garden-design-mallorca-binissalem-06.webp` a `12.webp` e uma pasta `2026-09/` com 12 imagens.

Interpretacao: provavel expansao de galeria de Binissalem, nao necessariamente lixo.

Recomendacao:

- Comparar com o projeto Binissalem atual em `src/data/projects.ts`.
- Se aprovadas, adicionar ao array de imagens, alts e sitemap.
- Se forem apenas selecao de trabalho, mover para `originais-grandes/binissalem/...` ou `conteudo/curadoria/...`.

### 4. Sant Llorenc 4 months

Status: arquivos atuais referenciados pelo site com sufixo `-sestepa-design.webp` ja existem. Os untracked possuem nomes descritivos diferentes, como `olive-gaura-stipa`, `pool-view`, etc.

Interpretacao: possiveis alternativas SEO/editoriais, mas nao sao necessarias para o site atual.

Recomendacao:

- Nao adicionar automaticamente.
- Decidir se os nomes descritivos substituem os nomes atuais ou ficam como biblioteca.
- Se substituir, atualizar `projects.ts`, `sitemap-images.xml` e validar galeria.

### 5. Diagramas SVG

Status: 8 SVGs em `public/images/diagrams/`, peso baixo.

Recomendacao:

- Confirmar quais artigos os usam.
- Se usados por artigos publicados, manter no deploy.
- Se sao drafts, mover para `conteudo/` ou manter fora do Git ate publicacao.

### 6. Blog markdown solto

Status: 4 artigos markdown untracked. Alguns slugs ja aparecem em `public/_redirects`, indicando origem WordPress/legado.

Recomendacao:

- Nao publicar automaticamente.
- Verificar se sao rascunhos, importacoes antigas ou conteudo intencional.
- Se forem publicados, checar noindex/index, canonical, menu, sitemap e conflito com redirects antigos.

### 7. `public/api/docs.html`

Status: artefato solto em `public/api/docs.html`, duplicando a rota fonte `src/pages/api/docs.html.ts`.

Acao realizada:

- Adicionado ao `.gitignore`.
- Excluido do mirror local reutilizavel em `scripts/preview_local.py`.
- Nao foi apagado fisicamente nesta etapa.

Recomendacao:

- Remover fisicamente em etapa de limpeza aprovada, porque a fonte correta e `src/pages/api/docs.html.ts`.

## Ordem recomendada para limpeza posterior

1. Versionar primeiro as melhorias de governanca e o script de preview.
2. Decidir o destino da galeria `curated-2026`: publicar, reduzir ou arquivar como curadoria.
3. Resolver duplicacao de Vertical Garden, escolhendo pasta canonical e destino dos JPGs.
4. Revisar Binissalem e Sant Llorenc como expansao editorial, nao como lixo.
5. Revisar blog/diagramas juntos, porque diagramas podem pertencer aos artigos.
6. Remover apenas artefatos claramente gerados/duplicados depois de aprovacao: `public/api/docs.html`, caches e previews temporarios.

## Alertas

- `public/` e deploy. Nada deve entrar ali sem decisao editorial e tecnica.
- `public/_redirects` preserva autoridade das URLs antigas do WordPress; nao remover entradas sem auditoria URL por URL.
- Nao usar `git add -A` enquanto estes grupos estiverem pendentes.
## Assinatura da Tarefa

- Autor/agente: Codex
- Data: 2026-10-06
- Escopo: auditoria operacional, governanca, preview local, classificacao de assets e documentacao de fluxo
- Modo: sem deploy, sem remocao de assets, sem acesso ao disco J:
- Sequencia: auditoria -> documentacao -> protecoes -> relatorio -> validacoes
- Validacoes: `python -m py_compile scripts/preview_local.py`, `git diff --check`, `git status --short`
