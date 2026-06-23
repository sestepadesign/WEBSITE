# sestepa-design — S'Estepa Design

> **Canónico no GitHub:** este ficheiro (`docs/ONDE-ESTA-TUDO.md`).
> Cópia no Drive: `G:\Meu Drive\1. WEBSITES\sestepa-design\ONDE-ESTA-TUDO.md`

| | |
|---|---|
| **Domínio** | https://design.sestepa.com |
| **Hosting** | Cloudflare Pages |
| **GitHub** | https://github.com/sestepadesign/WEBSITE |
| **Tipo** | Astro (multi-língua EN/ES/DE) |
| **Conta Cloudflare** | sestepadesign@gmail.com |
| **Conta GitHub** | sestepadesign |
| **Pasta no Drive** | `sestepa-design` |

## Código fonte

```
G:\Meu Drive\1. WEBSITES\sestepa-design\codigo\
```

## Fluxo

```
EDITAR → src\
DEV    → npm run dev     (preview local em http://localhost:4321)
BUILD  → Cloudflare faz automaticamente ao fazer push (npm run build → dist\)
PUSH   → git push origin master → Cloudflare deploys automaticamente (~2 min)
```

## Locks e identidade

```powershell
python "G:\Meu Drive\1. WEBSITES\scripts\set_lock_agent.py" Cursor sestepa-design
python "G:\Meu Drive\1. WEBSITES\scripts\lock_manager.py" acquire-auto sestepa-design "tarefa"
```

Ver `docs/EQUIPA.md` e `docs/equipa/INSTRUCOES.md`.

## Conta GitHub para push

```powershell
gh auth switch --user sestepadesign
cd "G:\Meu Drive\1. WEBSITES\sestepa-design\codigo"
git add -A
git commit -m "mensagem"
git push origin master
python "G:\Meu Drive\1. WEBSITES\scripts\lock_manager.py" release sestepa-design
```

## Primeiro uso num computador novo

```powershell
cd "G:\Meu Drive\1. WEBSITES\sestepa-design\codigo"
npm install
npm run dev
python "G:\Meu Drive\1. WEBSITES\scripts\install_hooks.py"
```

## Estrutura do código

```
├── src\
│   ├── data\
│   │   ├── projects.ts
│   │   ├── portfolio-categories.ts
│   │   ├── site-urls.ts
│   │   └── translations.ts
│   ├── components\site\
│   └── pages\
├── public\portfolio\{slug}\images\
├── docs\
│   ├── ONDE-ESTA-TUDO.md    ← este ficheiro
│   └── EQUIPA.md
├── astro.config.mjs
└── package.json
```

## Endereços

| Ambiente | URL |
|---|---|
| Site ao vivo | https://design.sestepa.com |
| Cloudflare Pages | https://sestepadesign.pages.dev |
| Preview local | http://localhost:4321 |
| GitHub repo | https://github.com/sestepadesign/WEBSITE |

## Receitas rápidas

Preview local: ver `PREVIEW.md`.

### Receita A — Alterar imagens de um projecto

Ficheiro: `src/data/projects.ts`

1. Copiar imagens para `public/portfolio/{slug}/images/`
2. Em `projects.ts`, editar `images: [...]` e `cover` se necessário

Nomes de ficheiros: não alterar — são pensados para SEO.

---

### Receita B — Criar projecto novo

Ficheiros:
- `src/data/projects.ts`
- `src/data/portfolio-categories.ts`
- `src/data/site-urls.ts`

1. Adicionar entrada em `projects.ts` (slug, textos en/es/de, cover, images).
2. Em `portfolio-categories.ts`: `'{slug}': 'residential'`
3. Em `site-urls.ts` → `PROJECT_PUBLIC_PATHS`:
```ts
'novo-slug': {
  en: '/novo-slug/',
  es: '/es/novo-slug/',
  de: '/de/novo-slug/',
},
```
4. Imagens em `public/portfolio/novo-slug/images/`
5. Commit e push.

Sem entrada em `PROJECT_PUBLIC_PATHS`, o build falha.

---

### Receita C — Esconder projecto do portfolio

Em `projects.ts`, adicionar `hidden: true` ao projecto. A página mantém URL directo.

---

### Receita D — Renomear URL público

Slug interno não muda. Editar `PROJECT_PUBLIC_PATHS` e `PROJECT_PATH_ALIASES` em `site-urls.ts`.

---

### Receita E — Mudar cover

Em `projects.ts`:
```ts
cover: "/portfolio/{slug}/images/nome-do-ficheiro.jpg",
```

## Política de branches

Trabalho directo em `master`. Cada push vai para produção via Cloudflare.
