# CONFIGURAÇÃO DE ANALYTICS E TRACKING — S'ESTEPA DESIGN

Este documento registra as credenciais e identificadores oficiais de acompanhamento, analytics e anúncios de S'Estepa Design para referência técnica e auditorias.

## 1. IDENTIFICADORES DO GOOGLE

| Ferramenta / Destino | Nome da Propriedade / Recurso | ID Oficial | Descrição / Função |
| :--- | :--- | :--- | :--- |
| **Google Tag (gtag.js)** | S'EstepaDesign | `GT-WKTZS5C` | Tag global unificada que gerencia e distribui os dados no site. |
| **Google Analytics 4 (GA4) ID** | GA4 S'EstepaDesign | `G-DZ9ZSG3VH0` | ID de Métrica associado diretamente à propriedade GA4 (`368818608`). |
| **Google Ads ID** | S'Estepa | `AW-795871100` | ID de conversão e remarketing configurado. |
| **Google Tag Manager (GTM)** | S'Estepa Design | `GTM-K6MSRJX9` | Contêiner para gestão avançada de tags via script. |

## 2. OUTROS RASTREADORES

| Ferramenta | Identificador | Função |
| :--- | :--- | :--- |
| **CookieYes** | `f292b5d0baace10a4365b956` | Banner de consentimento de cookies em conformidade com GDPR. |
| **Metricool** | `4514d2b6d34c58b6a0b6a1c1649df7b` | Hash de rastreamento de métricas de rede social e tráfego. |

## 3. HISTÓRICO DE CORREÇÕES

* **25 de Junho de 2026**: Substituição do `GTAG_ID` incorreto (`GT-PZ6D6P9N`) no arquivo `src/lib/seo.ts` pelo ID correto e verificado no console do Google Ads: `GT-WKTZS5C`. Isso reestabelece a comunicação da Google Tag com a propriedade correta de GA4 (`G-DZ9ZSG3VH0`) e o Google Ads.
