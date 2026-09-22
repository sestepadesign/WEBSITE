# DIRETRIZES GLOBAIS DA AGÊNCIA IA

Estas regras aplicam-se estritamente a todos os projetos deste diretório e devem ser rigorosamente seguidas.

## 1. Protocolo de Operação e Rigor Estrutural
1. **Rigor Estrutural:** Mapear e auditar a taxonomia de pastas antes de alterações em massa. Proibido arquivos soltos ou fora de convenção.
2. **Comunicação e Tom:** Estritamente técnico, direto, objetivo e impessoal. Zero emojis. Proibido o uso de pronomes ou referências pessoais direcionadas ao operador ("você", "tú", menções a estados emocionais). Alertas críticos utilizam exclusivamente a sintaxe Markdown do GitHub (`> [!NOTE]`, `> [!IMPORTANT]`, `> [!WARNING]`, `> [!CAUTION]`).
3. **Inversão do Fardo Operacional:** O agente propõe a arquitetura e executa a solução técnica; o operador atua como homologador/aprovador.
4. **Primeiros Princípios:** Desafios arquiteturais complexos exigem apresentação de matriz com 2 a 3 cenários comparativos contendo prós, contras e viabilidade técnica.

## 2. Protocolo Estrito de Validação, Homologação e Deploy
Fica proibido qualquer deploy direto na branch `master` sem homologação prévia em ambiente controlado:

### Rota A: Sessão Interativa/Desktop (Homologação Localhost)
1. **Isolamento contra Bloqueios de I/O:** É terminantemente proibido executar `npm run dev` ou `npm install` diretamente na unidade de rede sincronizada `G:\`. O servidor local deve ser iniciado exclusivamente via:
   `python scripts/preview_local.py` (executado a partir da pasta `codigo/`).
   O script clona os arquivos necessários para `%TEMP%`, evitando bloqueios sincrônicos de leitura/escrita.
2. **Validação do Operador:** Fornecer a URL local gerada (tipicamente `http://localhost:4321/`) para testes do operador.
3. **Higiene de Disco:** Purgar permanentemente os arquivos temporários criados em `%TEMP%` após a homologação e deploy.

### Rota B: Sessão Remota/Mobile (Homologação via Cloudflare Staging)
1. **Branch de Feature:** Criar ramificação temporária (`git checkout -b feature/<nome-da-feature>`).
2. **Push de Staging:** Enviar a branch ao repositório remoto para acionamento do build no Cloudflare Pages.
3. **Aprovação Formal:** Disponibilizar a URL pública de preview ao operador. Nenhum merge em `master` pode ocorrer sem aprovação explícita e por escrito.
4. **Merge e Purga:** Concluída a aprovação, realizar o merge em `master` e deletar a branch de feature local e remota (`git push origin --delete feature/<nome-da-feature>`).

## 3. Protocolo de Rigor Operacional (PRO)
1. **Handoff e Verificação de Estado (`STATUS.md`):** É LEI ABSOLUTA ler `STATUS.md` antes de editar código. Comparar o hash do último deploy/commit com o ambiente local (`git log -n 1`). Discrepâncias exigem sincronização imediata. Antes de encerrar qualquer sessão, registrar o log no topo de *HISTÓRICO DE SESSÕES* em ordem cronológica reversa.
2. **Ancoragem em Skills:** Ler obrigatoriamente o arquivo `SKILL.md` em `.agents/skills/` antes de atuar em domínios específicos (ex.: telemetria de anúncios em `google-ads-troubleshooting`, regras de negócio e SEO em `sestepa-domain`).
3. **Tratamento de Erros:** Todo erro reportado deve indicar causa raiz técnica e via acionável imediata de resolução (arquivos e comandos exatos).

## 4. Performance & Core Web Vitals (Salvaguardas Intocáveis)
A pontuação de 98 Mobile no Google PageSpeed Insights não pode ser desfeita:
1. **Fontes Self-Hosted:** Fontes Cormorant Garamond e Jost hospedadas localmente em `public/fonts/`. Proibida importação de CDN remota via URL.
2. **Preload:** As fontes principais `400` devem conter `<link rel="preload" as="font" ... />` no `<head>` (`Layout.astro`).
3. **Font-Display Optional:** As declarações `@font-face` em `global.css` utilizam estritamente `font-display: optional` para zerar CLS e FOUT. Proibido alterar para `swap`.

## 5. Blindagem Contra Regressões & Trabalho em Equipe Multi-Agente
1. **Auditoria Estrita de `git diff` Pré-Commit:** Antes de criar qualquer commit, auditar o diff completo linha a linha (`git diff`). É terminantemente proibido deletar, omitir ou truncar seções, blocos condicionais ou galerias adjacentes durante reordenações visuais ou refatorações de layout.
2. **Preservação de Ativos e Portfólio:** Nenhum agente tem autonomia para remover, ocultar ou desindexar fotos de projetos ou coleções sem instrução explícita do operador.
3. **Verificação Transversal de Componentes Globais:** Componentes base que atendem múltiplos tipos de dados (como `ProjectDetail.astro`, que atende tanto projetos com `galleryChapters` quanto projetos com galeria padrão) exigem validação em ambos os cenários antes de qualquer publicação.
