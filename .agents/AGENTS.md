# Regras do Projeto S'Estepa Design

## Limitações do Ambiente e Google Drive
- **ATENÇÃO CRÍTICA**: O código deste projeto está localizado em uma pasta sincronizada pelo **Google Drive**. 
- O Google Drive tem um comportamento agressivo de bloqueio de arquivos (file locking) durante a sincronização de pastas grandes. 
- **O que NÃO fazer**: Nunca confie na execução do comando `npm run build` ou `npx astro build` localmente neste repositório. O Google Drive frequentemente corrompe o arquivo binário do Astro (`node_modules/astro/bin/astro.mjs` é reduzido a 0 bytes silenciosamente) ou bloqueia os arquivos no meio da compilação.
- O sintoma deste problema local é o compilador (build) abortar silenciosamente (exit code 0 sem gerar a pasta `/dist`) sem exibir nenhum erro de sintaxe.
- **O que FAZER**: Ao investigar problemas de "Build Failed" no Cloudflare Pages (que roda em Linux na nuvem), NÃO presuma que a compilação local no Windows espelhará a realidade se estiver usando Google Drive. Revise o código alterado nos últimos commits (usando `git diff`) e busque por erros de sintaxe (como tags HTML ou JSX não fechadas), pois esses erros quebram o Cloudflare Pages, enquanto localmente o compilador pode apenas colidir com o Google Drive de forma invisível.

## Procedimento para Atualizações em Massa
- Sempre que fizer substituições em massa no código (ex: `replace_file_content` para codificação de caracteres ou textos grandes), faça verificações visuais no arquivo logo em seguida para garantir que a formatação e as chaves de fechamento de blocos de lógica ou tags de HTML permaneçam válidas. O Astro é estrito quanto ao fechamento correto de tags.
