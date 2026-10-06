# S'Estepa Design — Website

Site oficial de S'Estepa Design para projetos de garden design e landscape design em Mallorca.

- Dominio: https://design.sestepa.com
- Hosting: Cloudflare Pages
- Repo: `sestepadesign/WEBSITE`
- Stack: Astro, TypeScript, conteúdo multilíngue EN/ES/DE
- Branch de produção: `master`

## Estrutura principal

```text
sestepa-design/
  codigo/                 # site publicável, Git e Cloudflare Pages
  originais-grandes/       # originais em alta resolução, fora do deploy
  conteudo/                # textos, briefings e materiais editoriais
  docs/                    # auditorias, SEO/AEO, Ads, Analytics e processo
  videos/                  # produção audiovisual e exports
  CHATGPT_WORKSPACES/      # apoio/histórico de agentes, fora do deploy
```

Dentro de `codigo/`:

```text
src/                       # páginas, componentes, dados e schema
public/                    # somente assets finais usados pelo site
docs/                      # documentação operacional versionada
scripts/                   # automações do projeto
.agents/AGENTS.md          # regras para agentes
STATUS.md                  # handoff e histórico
```

## Regra central

Separar fisicamente código, conteúdo e originais; governar tudo como parte do mesmo projeto. Imagens, PDFs, redirects, sitemaps, nomes de arquivo e branches também são considerados parte do sistema.

## Fluxo aprovado

### Desktop com localhost

1. Trabalhar em `master`.
2. Criar preview isolado fora do Google Drive.
3. Aprovar visualmente em localhost.
4. Fazer um commit final limpo.
5. Push para `origin/master`.

### Celular/remoto sem localhost

1. Criar branch temporária.
2. Gerar Cloudflare Preview.
3. Aprovar no link público.
4. Merge em `master`.
5. Apagar branch temporária local e remota.

## Preview local

Não rodar `npm install`, `npm run dev` ou `npm run preview` diretamente no `G:`.

Fluxo atual:

```powershell
cd "G:\Meu Drive\1. WEBSITES\sestepa-design\codigo"
python scripts\preview_local.py
```

Preview atual: mirror local reutilizável fora do Google Drive, mantendo `node_modules` em cache e reinstalando dependências só quando `package-lock.json` mudar.

## Build

```powershell
npm run build
```

O build gera `dist/`. Em produção, Cloudflare Pages executa o build automaticamente após push na branch de produção.

## Assets

- `public/` vai para o deploy.
- `originais-grandes/` preserva arquivos nativos e pesados fora do deploy.
- Nenhum arquivo acima de 25 MB deve entrar no Git/deploy.
- Arquivos públicos devem usar nomes semânticos, sem caracteres especiais e preferencialmente otimizados em WebP.

## Arquivos de conteúdo técnico

- Projetos: `src/data/projects.ts`
- Categorias: `src/data/portfolio-categories.ts`
- URLs públicas: `src/data/site-urls.ts`
- SEO/schema: `src/utils/schema.ts` e `src/components/Schema.astro`
- Redirects: `public/_redirects` — preserva URLs antigas do WordPress e autoridade no Google
- Sitemap de imagens: `public/sitemap-images.xml`
- Robots/AEO: `public/robots.txt`, `public/llms.txt`

## Segurança

O dashboard e integrações não devem depender de senhas/tokens expostos no frontend. Se uma senha conhecida precisar continuar, a melhoria correta é mover a validação para Cloudflare Access, Function/Worker ou backend, preservando a experiência da equipe.
