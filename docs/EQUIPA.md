# sestepa-design — guia rápido para agentes

> **AVISO IA:** No inicio de CADA sessao: `python scripts/set_lock_agent.py Cursor` (ou a tua ferramenta). **Nao assumir Antigravity.**
> **Drive obrigatorio:** `G:\Meu Drive\1. WEBSITES\` — ver `docs/equipa/PARA-CLONE-SEM-DRIVE.md`

| | |
|---|---|
| **Pasta Drive** | `sestepa-design` |
| **Domínio** | https://design.sestepa.com |
| **GitHub** | sestepadesign/WEBSITE |
| **Branch** | `master` |
| **Docs do site** | `docs/ONDE-ESTA-TUDO.md` |

## Identidade (obrigatório)

Cada ferramenta usa o **seu** nome — não partilhar `Antigravity` se trabalhas no Cursor:

```powershell
python "G:\Meu Drive\1. WEBSITES\scripts\set_lock_agent.py" Cursor sestepa-design
python "G:\Meu Drive\1. WEBSITES\scripts\set_lock_agent.py" --show
```

| Ferramenta | Nome |
|---|---|
| Cursor | `Cursor` |
| Claude Code | `Claude-Code` |
| Antigravity | `Antigravity` |

## Fluxo de trabalho

```powershell
cd "G:\Meu Drive\1. WEBSITES"
python scripts\lock_manager.py acquire-auto sestepa-design "descrição"
cd sestepa-design\codigo
# ... editar ...
git add -A && git commit -m "mensagem" && git push origin master
python "G:\Meu Drive\1. WEBSITES\scripts\lock_manager.py" release sestepa-design
```

## Documentação completa

| Ficheiro | Local |
|---|---|
| Manual operativo | `docs/equipa/INSTRUCOES.md` (cópia do Drive) |
| Setup editores | `docs/equipa/SETUP-EDITORES.md` |
| Drive (sempre actualizado) | `G:\Meu Drive\1. WEBSITES\INSTRUCOES.md` |
