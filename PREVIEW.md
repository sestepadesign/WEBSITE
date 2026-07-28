# Visualizador local (sem deploy)

## Caminho canónico

```
G:\Meu Drive\1. WEBSITES\sestepa-design\codigo\
```

## Arrancar preview

> [!WARNING]
> **PROIBIÇÃO DE I/O NATIVO (GOOGLE DRIVE):** Fica estritamente proibido aos agentes ou operadores executar `npm run dev` ou `npm install` nativamente nesta diretoria (`G:\`). A sincronização síncrona do Google Drive bloqueará os ficheiros (ERR_CONNECTION_REFUSED) e destruirá o *Hot Module Replacement* do Astro. **USAR EXCLUSIVAMENTE O SCRIPT ABAIXO**, que automatiza a clonagem para uma unidade `C:\` efémera.

```powershell
cd "G:\Meu Drive\1. WEBSITES\sestepa-design\codigo"
python ..\..\scripts\preview_local.py
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
