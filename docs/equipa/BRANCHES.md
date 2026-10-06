# Branches Git — S'Estepa Design

Branch de produção: `master`.

## Regra por contexto

| Contexto | Fluxo |
|---|---|
| Desktop com localhost disponível | trabalhar em `master`, preview local aprovado, push para `origin/master` |
| Celular/remoto sem localhost | branch temporária, Cloudflare Preview, aprovação, merge em `master`, apagar branch |

## Desktop

```powershell
cd "G:\Meu Drive\1. WEBSITES\sestepa-design\codigo"
git status --short --branch
python scripts\preview_local.py
```

Após aprovação:

```powershell
git status --short
git diff
git add <arquivos-aprovados>
git commit -m "tipo(escopo): mensagem"
git push origin master
```

Evitar `git add -A` enquanto existirem untracked antigos sem classificação.

## Mobile/remoto

```powershell
git checkout -b feature/<nome-da-tarefa>
git push origin feature/<nome-da-tarefa>
```

Após Cloudflare gerar preview, enviar a URL para aprovação.

Depois da aprovação:

```powershell
git checkout master
git merge --no-ff feature/<nome-da-tarefa>
git push origin master
git branch -d feature/<nome-da-tarefa>
git push origin --delete feature/<nome-da-tarefa>
```

## Branches antigas

Branches temporárias não devem acumular. Antes de apagar, confirmar que já foram mergeadas ou que o conteúdo está obsoleto.

Comandos de auditoria:

```powershell
git branch -a
git branch -r --merged origin/master
```

## Branches observadas em 2026-10-06

Candidatas a auditoria/limpeza posterior:

```text
origin/claude/sant-llorenc-botanicals
origin/claude/sant-llorenc-new-text-jm-cleanup
origin/claude/sant-llorenc-video-update-ffhitf
origin/claude/session-log-2026-08-07
origin/feature/google-ads-conversion-tags
origin/fix/home-meta-description-en
origin/preview
```

Nao apagar sem confirmar merge/obsolescencia e sem comunicar ao operador.
