# Prompt - Auditoria separada de tracked deletados

Data: 2026-10-07

Use este prompt em uma nova tarefa antes de decidir qualquer remoção, restauração ou commit envolvendo os muitos arquivos marcados como deletados no Git.

## Contexto

Projeto:

`G:\Meu Drive\1. WEBSITES\sestepa-design\codigo`

Regras críticas:

- Não tocar no disco J:.
- Não usar `git add -A`.
- Não rodar `npm install`, `npm run dev`, `npm run preview`, `npm run build` ou `npx astro` diretamente dentro de `G:\...`.
- Para build/preview usar somente, a partir da raiz do projeto:
  - `python scripts\preview_local.py`
  - `python scripts\preview_local.py build`
- Não apagar, mover, converter ou renomear assets sem aprovação explícita.
- Não reduzir qualidade de imagens premium por padrão.
- Preservar autoridade SEO de imagens: URLs públicas antigas precisam de 301 antes de remoção.
- Separar tracked/deploy, untracked locais, ignored/backups/originais, realmente referenciados, duplicados auditados.

## Problema a auditar

O `git status --short` mostra muitos arquivos tracked como `D` / deletados.

Importante: `D` no Git não significa automaticamente "arquivo inútil" nem "pode apagar". Significa apenas que o arquivo existia no último commit/index do Git e agora não está presente no working tree. As causas possíveis incluem:

- remoção real e intencional ainda não commitada;
- arquivo perdido por sincronização do Google Drive;
- arquivo removido por outra sessão/agente;
- arquivo substituído por canônica/redirect;
- arquivo que ainda deveria existir para deploy, documentação, press, SEO ou páginas de projeto.

## Tarefa

Auditar todos os arquivos tracked deletados sem restaurar nem remover nada automaticamente.

Classificar cada arquivo ou grupo em:

1. `aprovado_para_remocao`: existe 301 quando URL pública antiga importa, não tem referência real de código/conteúdo, não prejudica documentação/press/SEO.
2. `provavel_restaurar`: ainda é referenciado, é asset premium/original necessário, PDF de press, documentação pública, imagem de projeto sem canônica equivalente ou possível perda por sync.
3. `precisa_decisao_humana`: ambíguo, envolve qualidade visual, documentação da empresa, imagem premium, origem/editorial ou SEO histórico.
4. `ja_resolvido_em_outra_passada`: duplicado já coberto por relatório, redirect e remoção aprovada.

## Verificações obrigatórias

- Listar apenas com `git status --short -- <paths>` e leituras/auditorias; não fazer `git add`.
- Para cada candidato público removível, confirmar:
  - refs em `src/`, `public/*.html`, `scripts/`, `docs/` relevantes;
  - presença ou necessidade de 301 em `public/_redirects`;
  - existência de canônica viva;
  - se aparece em `public/sitemap-images.xml`;
  - se é PDF/press/documentação institucional.
- Rodar `python scripts\preview_local.py build` somente depois de qualquer mudança reversível aprovada.

## Entregável

Criar um relatório em `docs/DELETED-TRACKED-ASSETS-AUDIT-2026-10-07.md` com:

- resumo por pasta;
- tabela dos deletados classificados;
- recomendação clara de restaurar, manter deletado para commit futuro, ou pedir decisão humana;
- lista de comandos seguros, se houver próxima ação;
- confirmação de que nenhum arquivo foi apagado/restaurado durante a auditoria.
