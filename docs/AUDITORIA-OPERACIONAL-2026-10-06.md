# Auditoria Operacional — S'Estepa Design — 2026-10-06

## Escopo

Auditoria pós-Antigravity do projeto `sestepa-design`, considerando código, conteúdo, assets, SEO/AEO, pastas, instruções de equipe, branches, preview local e riscos operacionais.

Caminho auditado:

```text
G:\Meu Drive\1. WEBSITES\sestepa-design\codigo
```

## Estado Git

- Branch atual: `master`.
- `master` local alinhado com `origin/master`.
- Últimos commits publicados:
  - `72cab58 docs(status): update session checksum to a4048ae`
  - `a4048ae feat(binissalem-courtyard): add townhouse courtyard project and update sitemap`
- O projeto Binissalem Courtyard foi publicado em `master`, sem branch temporária.
- Há muitos untracked antigos que devem ser classificados antes de novos deploys. `public/_redirects` não teve regras alteradas nesta auditoria; redirects antigos do WordPress devem ser preservados.

## Tamanho e assets

- `codigo/.git`: cerca de 1.29 GB.
- `codigo/public`: cerca de 1.25 GB.
- `codigo/_backups`: cerca de 82 MB.
- Nenhum arquivo rastreado pelo Git foi encontrado acima de 25 MB.
- Arquivos acima de 25 MB existem dentro de `public/portfolio/sant-llorenc/images tratadas com magnific/`, mas estão ignorados pelo Git.

Conclusão: o risco imediato de Cloudflare bloquear por arquivo rastreado >25 MB está controlado, mas a organização ainda está ruim porque arquivos brutos vivem dentro de `codigo/public`.

## Preview local

O script antigo `scripts/preview_local.py` copiava o workspace para `%TEMP%` e rodava `npm install` em toda execução. Isso explicava cópias acima de 1 GB e excesso de espera.

Implementado nesta auditoria: mirror local reutilizável fora do Google Drive, com `node_modules` persistente e instalação apenas quando `package-lock.json` mudar.

## Documentação

Problemas encontrados:

- `README.md` ainda era starter do Astro.
- `ARCHITECTURE.md` continha instruções antigas de `npm run dev`/`npm run preview`.
- Havia divergência entre `sestepa-design/.agents/AGENTS.md` e `sestepa-design/codigo/.agents/AGENTS.md`.
- `docs/equipa/BRANCHES.md` ainda não refletia a distinção desktop/mobile.

Ações realizadas nesta auditoria:

- `README.md` refeito para S'Estepa Design.
- `ARCHITECTURE.md` refeito com arquitetura real e regras operacionais.
- `PREVIEW.md` alinhado ao fluxo aprovado.
- `docs/equipa/BRANCHES.md` atualizado com desktop vs mobile.
- .agents/AGENTS.md sincronizado entre raiz do cliente e repo.
- scripts/preview_local.py substituído por mirror local reutilizável em LOCALAPPDATA\\SestepaPreview\\codigo.

## Segurança

Foram encontrados valores sensíveis no frontend:

- Senha do dashboard: `sestepa2026`.
- Token de Apps Script: `sestepa_secure_2026`.
- URL de Google Apps Script em JavaScript público.

Observação: a senha pode continuar a mesma por hábito da equipe, mas a validação deveria sair do frontend e ir para Cloudflare Access, Worker/Function ou backend.

## SEO/AEO — Pontos fortes

- Site multilíngue EN/ES/DE.
- Estrutura com canonical/hreflang.
- JSON-LD em componentes dedicados.
- `robots.txt`, `llms.txt`, sitemap de imagens e redirects de legado WordPress preservados em `public/_redirects`.
- Nomeação semântica de imagens nos projetos recentes.
- Portfolio estruturado por dados, facilitando consistência.

## SEO/AEO — Pontos a melhorar

- Classificar untracked antes de novos deploys.
- Evitar duplicação de assets e versões antigas dentro de `public/`.
- Garantir que schema e conteúdo visível continuem 1:1.
- Revisar dashboard e integração de leads para não expor token/senha no browser.
- Auditar branches antigas e previews Cloudflare associados.

## Organização recomendada

```text
sestepa-design/
  codigo/                 # site publicável
  originais-grandes/       # biblioteca de alta resolução
  conteudo/                # textos, briefs, copies e materiais editoriais
  docs/                    # estratégia, auditorias, Ads, Analytics e processos
  videos/                  # criação audiovisual
  CHATGPT_WORKSPACES/      # histórico/apoio de agentes
```

Regra: separar fisicamente; governar como um único projeto.

## Próximas ações recomendadas

1. Classificar untracked por decisão: manter, mover, converter ou descartar com aprovação.
2. Monitorar o novo mirror local reutilizável em uso real e ajustar filtros se algum asset necessário ficar fora do preview.
3. Migrar proteção do dashboard para servidor/Cloudflare sem trocar a senha atual.
4. Auditar branches remotas antigas e apagar apenas as mergeadas/obsoletas.
5. Avaliar limpeza de `.git` e histórico pesado somente com estratégia própria, nunca com reset destrutivo.
## Assinatura da Tarefa

- Autor/agente: Codex
- Data: 2026-10-06
- Escopo: auditoria operacional, governanca, preview local, classificacao de assets e documentacao de fluxo
- Modo: sem deploy, sem remocao de assets, sem acesso ao disco J:
- Sequencia: auditoria -> documentacao -> protecoes -> relatorio -> validacoes
- Validacoes: `python -m py_compile scripts/preview_local.py`, `git diff --check`, `git status --short`
