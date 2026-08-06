# DIRETRIZES DE ORÇAMENTOS E PERFORMANCE — GOOGLE ADS

Este documento estabelece as diretrizes e boas práticas para gerenciamento de orçamentos de campanhas do Google Ads para o projeto S'Estepa Design.

## 1. Funcionamento Básicos dos Orçamentos

* **Definição Diária**: O orçamento estabelece o limite de gastos diários por campanha, atuando como o principal regulador da frequência de veiculação de anúncios, volume de cliques e taxa de conversão.
* **Equilíbrio Operacional**: O ajuste orçamentário deve buscar o equilíbrio entre o custo e o volume de conversões para maximizar o retorno das metas de performance.

## 2. Otimização de Orçamento

### Cenário A: Campanha Limitada pelo Orçamento
* **Indicativo**: Alerta de "Limitada pelo orçamento" exibido no painel de controle.
* **Condição**: Geração de conversões a um Custo por Aquisição (CPA) aceitável.
* **Ação**: Aumentar o orçamento diário para capturar a demanda excedente e escalar o volume de conversões.

### Cenário B: Subutilização do Orçamento
* **Indicativo**: Gasto real significativamente abaixo do limite orçado.
* **Condição**: Baixa frequência de veiculação e baixo volume de impressões.
* **Ação**: Expandir o alcance da campanha por meio de:
  * Inclusão de novas palavras-chave qualificadas (verificar portfólio no arquivo `codigo/src/data/portfolio-categories.ts`).
  * Adição de novas segmentações geográficas pertinentes ao público de alto padrão.

## 3. Ferramentas de Previsão e Simulação

O planejamento de alterações orçamentárias deve ser apoiado por dados preditivos utilizando as ferramentas oficiais da plataforma:
* **Simulador de Orçamento**: Permite projetar o impacto de alterações orçamentárias na frequência de veiculação e no CPA. [Documentação do Simulador de Orçamento](https://support.google.com/google-ads/answer/9634060).
* **Planejador de Performance**: Utilizado para prever conversões e simular cenários de aumento ou diminuição orçamentária. [Documentação do Planejador de Performance](https://support.google.com/google-ads/answer/9230124).

## 4. Monitoramento Contínuo

Qualquer alteração na configuração de orçamento exige acompanhamento rigoroso nas 24 a 72 horas subsequentes para avaliar a variação na performance geral da campanha e a estabilização das métricas de entrega.

## 5. Transições Tecnológicas e IA Max (Setembro de 2026)

A partir de 1º de setembro de 2026, campanhas ativas que utilizam recursos legados serão migradas automaticamente para a arquitetura de **IA Max para Campanhas de Pesquisa**.

### Mudanças Estruturais por Tipo de Campanha
* **Campanhas com Recursos Automáticos (ACA - Automatically Created Assets)**: Serão atualizadas para a IA Max com a correspondência de termos de pesquisa e a personalização de texto ativadas por padrão.
* **Campanhas com Correspondência Ampla no Nível da Campanha**: Serão migradas para a IA Max mantendo a correspondência de termos de pesquisa ativada por padrão.

### Ação Preventiva Recomendada
Recomenda-se realizar a transição manual antecipada para preservar o controle de configurações e segmentações refinadas das campanhas. 
* **Ajuste via Interface**: Utilizar o banner de migração exibido no painel de controle do Google Ads para atualizar para a IA Max.
* **Opção de Cancelamento (Opt-out)**: Para revogar o upgrade automático, deve-se desativar os recursos legados correspondentes ou proceder com a ativação direta da IA Max nas configurações da campanha.

### Documentação e Referências Oficiais
* [Definição de Recursos Automáticos (ACA)](https://c.gle/AKMee0fsUQKcGPFrtAVhyfb4zlrRPIhu-8MAsnqGZ7px5kIuU_WkplURcfMcWTozxXKn_OTNycerQIJVbbbgYcXSJTsFnyXZfI9O0p9DjmOWCVUDSJTDnU0KJlFet8rYYE2utoFLZiCXwIVPd2HKS_jiDqqRfVdr_wWQ)
* [Configuração de Correspondência Ampla no Nível da Campanha](https://c.gle/AKMee0dqSOUevAfzCM7LkTfVlKlmC1MyQ8vtWvwp-PCDvr3umJUxvi0OGBWOxos6IwoivkEpV7nPcYAYhg6zxoUDieeoj_MRgTVUmmD7Q5G06SZRK-woi8_bFy600dkpyOGUUsDNkZ3fH6Ag2gZjCMm0khY05DQasQEd7p7nnh6uGQ4)
* [Anúncio Oficial de Transição (Abril de 2026)](https://c.gle/AKMee0cS6_OOzkx5ltclHwzKHfVKw3YVijITpfMY7eH9llFZqqcHGxI1K34k1VuDvld3rwSwbzIqQQ2g5sHyWOT92HW3ttfzqEhNbBDbcCGPtjCcPrvTFkB8smSVsmEgAzYfpBbB0O8KdjrIuaVJ1MIqgC80R6LK7J9XuJKDtu1ZsEoIT3TFCBZwcjkU9DxXaUAvtHIpuNrnYQ)
* [Guia de Configuração da IA Max no Google Ads](https://c.gle/AKMee0fjHaX3MywEM-hvSmFc30-oaY6UuqlvQkEi4YXM5pHQZP4cnQhXR0KUD4HNeBbez9EKt-qwcU1Y65EzoawnZo1A6rjr0JJXILNWKzLl2mHeRv0uGHvij7gE575YYQa7LirrHbNvDB13PCAqzTLaU6JowoilFvKod509TXPQgcHFeg)
