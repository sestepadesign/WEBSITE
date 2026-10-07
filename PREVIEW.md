# Preview local — S'Estepa Design

## Caminho canônico

```powershell
G:\Meu Drive\1. WEBSITES\sestepa-design\codigo\
```

## Regra critica

NUNCA executar `npm install`, `npm run dev`, `npm run preview`, `npm run build` ou `npx astro ...` diretamente em `G:`.

O Google Drive pode bloquear caches do Node, atrasar a sincronização, corromper `node_modules`, travar I/O e derrubar o Drive. O preview deve rodar fora do Drive.

## Fluxo atual

```powershell
cd "G:\Meu Drive\1. WEBSITES\sestepa-design\codigo"
python scripts\preview_local.py
```

Este é o único comando autorizado para subir localhost a partir do projeto em Drive. O script sincroniza o projeto para o mirror local reutilizável e inicia Astro em localhost.

Para validar build fora do Google Drive:

```powershell
python scripts\preview_local.py build
```

## Mirror local reutilizável

O script atual usa mirror local reutilizável:

```text
C:\Users\inesg\AppData\Local\SestepaPreview\codigo
```

Regras do mirror:

- Reutilizar `node_modules`.
- Rodar `npm install` somente quando `package-lock.json` mudar.
- Sincronizar apenas arquivos necessários para preview/build.
- Ignorar `.git`, `dist`, `.astro`, backups, zips, originais grandes e arquivos temporários.
- Não alterar arquivos no Drive durante o preview.

## URLs úteis

| Página | URL |
|---|---|
| Home EN | http://localhost:4321/ |
| Home ES | http://localhost:4321/es/ |
| Studio | http://localhost:4321/about/ |
| Portfolio | http://localhost:4321/portfolio/ |

## Depois da aprovação

Desktop com localhost aprovado: publicar em `master` com commit final limpo.

Mobile/remoto sem localhost: usar branch temporária, Cloudflare Preview, aprovação, merge e apagar branch.
