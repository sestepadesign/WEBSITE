# S'Estepa Design — Architecture

## Objetivo

Website Astro multilíngue para posicionar S'Estepa Design em garden design, landscape design e projetos mediterrâneos de alto nível em Mallorca. O sistema combina portfólio visual, SEO/AEO, dados estruturados, redirects de legado WordPress e assets otimizados.

## Camadas

```text
src/data/                  # fonte estruturada de projetos, URLs, categorias, serviços e textos
src/components/            # componentes Astro compartilhados
src/pages/                 # rotas EN/ES/DE, blog, portfolio, dashboard e APIs públicas
src/utils/schema.ts        # geração de JSON-LD
public/                    # assets finais publicados, redirects, robots, llms e sitemap de imagens
scripts/                   # sincronização, geração de redirects/sitemaps e preview local
```

## Dados principais

| Área | Arquivo |
|---|---|
| Projetos e galerias | `src/data/projects.ts` |
| URLs canônicas por idioma | `src/data/site-urls.ts` |
| Categorias do portfolio | `src/data/portfolio-categories.ts` |
| Labels EN/ES/DE | `src/data/translations.ts` |
| Serviços | `src/data/services.ts` |
| FAQ | `src/data/faq.ts` |
| Depoimentos | `src/data/testimonials.ts` |

Projetos novos normalmente exigem atualização em `projects.ts`, `portfolio-categories.ts`, `site-urls.ts` e `public/sitemap-images.xml`.

## SEO e AEO

O site trabalha com:

- Rotas multilíngues EN/ES/DE.
- Canonical e hreflang.
- JSON-LD em `src/utils/schema.ts` e `src/components/Schema.astro`.
- Redirects de URLs antigas do WordPress em `public/_redirects`, preservando autoridade e evitando perda de sinais no Google.
- `robots.txt`, `llms.txt` e sitemap de imagens.
- Nomes de arquivos de imagens pensados para SEO visual.

Regra: conteúdo estruturado deve corresponder ao conteúdo visível. Não criar schema para informação invisível ao usuário. Redirects antigos devem ser tratados como ativos de SEO e removidos apenas com auditoria URL por URL.

## Assets

`public/` é deploy. Deve conter somente arquivos finais usados pelo site.

`originais-grandes/` fica fora de `codigo/` e preserva:

- Fotos nativas em alta resolução.
- Vídeos originais.
- Zips, PSD/AI, renders brutos e backups.
- Materiais para reels, campanhas e produtos futuros.

Antes de adicionar assets ao site, classificar cada arquivo:

```text
manter no deploy
converter para webp
mover para originais-grandes
apagar somente se duplicado/temporário e aprovado
```

## Preview e build

Não executar `npm install`, `npm run dev` nem `npm run preview` diretamente no Google Drive (`G:`). O Drive pode bloquear I/O, corromper dependências e tornar o preview lento.

Fluxo atual:

```powershell
cd "G:\Meu Drive\1. WEBSITES\sestepa-design\codigo"
python scripts\preview_local.py
```

Fluxo atual: mirror local reutilizável em `C:\Users\inesg\AppData\Local\SestepaPreview\codigo`, sincronizando apenas arquivos necessários e reinstalando dependências somente quando `package-lock.json` mudar.

## Deploy

Branch de produção: `master`.

- Desktop com localhost aprovado: commit final em `master` e push para `origin/master`.
- Mobile/remoto: branch temporária, Cloudflare Preview, aprovação, merge em `master`, apagar branch.

Não usar `git add -A` enquanto houver untracked antigos sem classificação.

## Segurança

O dashboard não deve depender de senha em JavaScript público. A validação deve passar por Cloudflare Access, Worker/Function ou backend, preservando a senha conhecida apenas como experiência de operação.

Tokens de Apps Script e URLs sensíveis não devem aparecer no bundle frontend. O fluxo atual usa Cloudflare Pages Functions como intermediário para dashboard, formulário de contato e tracking de WhatsApp; os valores devem ficar em variáveis de ambiente do Cloudflare (`DASHBOARD_PASSWORD`, `SHEETS_SCRIPT_URL`, `SHEETS_API_TOKEN`).

## Regras de colaboração

- Ler `.agents/AGENTS.md` e `STATUS.md` antes de editar.
- Respeitar lock global de `G:\Meu Drive\1. WEBSITES`.
- Revisar `git status --short` e `git diff` antes de commit.
- Registrar o commit final real em `STATUS.md`.
- Não editar, mover ou apagar arquivos em `J:` sem autorização explícita.
