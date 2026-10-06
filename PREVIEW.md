# Preview local — S'Estepa Design

## Caminho canônico

```powershell
G:\Meu Drive\1. WEBSITES\sestepa-design\codigo\
```

## Regra

Não executar `npm install`, `npm run dev` ou `npm run preview` diretamente em `G:`.

O Google Drive pode bloquear I/O, atrasar a sincronização e corromper dependências. O preview deve rodar fora do Drive.

## Fluxo atual

```powershell
cd "G:\Meu Drive\1. WEBSITES\sestepa-design\codigo"
python scripts\preview_local.py
```

O script cria uma cópia temporária e inicia Astro em localhost.

## Limitação conhecida

O script atual recria a cópia inteira e roda `npm install` em cada execução. Como `public/` pesa mais de 1 GB, o processo pode ficar lento nesta máquina.

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
