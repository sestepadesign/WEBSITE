# PROTOCOLO MANDATÓRIO DE DISCIPLINA DE FERRAMENTAS E EXECUÇÃO CONTÍNUA (ZERO-PROMPT)

Este arquivo define regras técnicas invioláveis para qualquer agente atuando neste workspace.

## 1. PROIBIÇÃO ABSOLUTA DO TERMINAL PARA LEITURA, BUSCA E MANIPULAÇÃO DE TEXTO
O agente está expressamente proibido de chamar a ferramenta 'run_command' para:
- Procurar texto em arquivos ('git grep', 'grep', 'Select-String', 'findstr').
- Ler ou inspecionar arquivos ('cat', 'Get-Content', 'head', 'tail').
- Verificar existência de pastas ou arquivos ('Test-Path', 'test -e', 'dir', 'ls', 'Get-ChildItem').
- Executar scripts Python inline ('python -c') para processar texto, ordenar listas, fazer contagens ou expressões regulares.
- Criar scripts temporários auxiliares em disco apenas para realizar micro-operações de código.

## 2. USO EXCLUSIVO DAS FERRAMENTAS NATIVAS
Toda e qualquer operação sobre arquivos de código, dados ou apresentação (HTML, TS, JS, CSS, JSON, CSV, MD) deve ser executada obrigatoriamente através das ferramentas nativas:
- Leitura e busca de conteúdo: 'read_file'.
- Edição cirúrgica de código e texto: 'edit_file'.
- Criação e substituição completa de arquivos: 'write_file'.
Estas ferramentas operam em segundo plano, não disparam permissões do sistema operacional e não interrompem o usuário.

## 3. USO PERMITIDO DO TERMINAL (APENAS DEPLOY E VÍDEOS EM CADEIA ÚNICA)
O terminal ('run_command') só pode ser invocado nos seguintes casos e sempre em chamada única consolidada:
- Deploy em produção: 'git add <arquivos> && git commit -m "<mensagem>" && git push origin master'. Proibido fracionar em 'git status', 'git diff', 'git log'.
- Otimização e conversão WebP: Usar exclusivamente o script mestre parametrizado ('python "g:\Meu Drive\1. WEBSITES\sestepa-design\codigo\scripts\optimize_project_images.py" --slug "<slug>"'). É expressamente proibido criar scripts pontuais com nomes de projetos (como 'convert_santa_eugenia.py' ou 'convert_crestatx.py').
- Renderização de vídeos: Scripts oficiais do protocolo ('generate-video.sh', 'generate-glide.sh') e o script mestre parametrizado do Remotion ('python "C:\Users\inesg\remotion-projects\sestepa-remotion\render_video_pipeline.py" --photo "..." --slug "..."'). É expressamente proibido criar scripts avulsos com nomes de projetos (como 'render_portals_nous.py' ou 'render_marratxi.py'); deve-se usar sempre o script unificado 'render_video_pipeline.py' para manter a regra 'Always Allow' permanentemente ativa.

## 4. RESOLUÇÃO LÓGICA INTERNA
Qualquer ordenação alfabética, filtro, contagem de dados ou transformação de strings deve ser calculada internamente pela inteligência do agente, aplicando o resultado final diretamente no arquivo com 'edit_file'. É inaceitável usar processos de terminal para tarefas lógicas elementares.
