# Visualizador local (sem deploy)

## Caminho canónico

```
G:\Meu Drive\1. WEBSITES\sestepa-design\codigo\
```

## Arrancar preview

```powershell
cd "G:\Meu Drive\1. WEBSITES\sestepa-design\codigo"
npm install          # primeira vez nesta máquina
npm run dev          # http://localhost:4321
```

## URLs úteis

| Página | URL |
|--------|-----|
| Home EN | http://localhost:4321/ |
| Home ES | http://localhost:4321/es/ |
| Studio / equipa | http://localhost:4321/about/ |
| Portfolio | http://localhost:4321/portfolio/ |

## Antes de editar

Seguir `INSTRUCOES.md` na raiz de `1. WEBSITES` — locks, hooks e deploy automático via Cloudflare no push.

## Onde editar

| Pasta | Uso |
|-------|-----|
| `codigo\src\` | Páginas, componentes, dados |
| `codigo\public\portfolio\` | Imagens dos projectos |
| `codigo\src\data\projects.ts` | Metadados e textos dos projectos |

Instruções completas: `..\ONDE-ESTA-TUDO.md` (pasta `sestepa-design`).
