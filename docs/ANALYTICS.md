# CONFIGURAÇÃO DE ANALYTICS E TRACKING — S'ESTEPA DESIGN

Este documento registra as credenciais e identificadores oficiais de acompanhamento, analytics e anúncios de S'Estepa Design para referência técnica e auditorias.

## 0. ESCOPO DE MARCA (DESIGN vs. JARDINAGEM)

* **`design.sestepa.com` (este repositório / `sestepa-design`):** Projetos de paisagismo e design para público ultra-high income, com Instagram próprio, campanhas próprias e foco atual de investimento em Ads. Todos os identificadores abaixo (`GTM-K6MSRJX9`, `GT-WKTZS5C`, `G-DZ9ZSG3VH0` e conversões `| Design S'Estepa`) pertencem exclusivamente a esta frente.
* **`sestepa.com` (pasta `sestepa` separada):** Jardinagem integral com equipe própria, Instagram próprio e campanhas separadas. Como compartilha a mesma conta Google Ads (`AW-795871100` / `S'Estepa`), **não alterar nem auditar** conversões ou campanhas exclusivas de jardinagem ao trabalhar neste projeto.

## 1. IDENTIFICADORES DO GOOGLE

| Ferramenta / Destino | Nome da Propriedade / Recurso | ID Oficial | Descrição / Função |
| :--- | :--- | :--- | :--- |
| **Google Tag (gtag.js)** | S'EstepaDesign | `GT-WKTZS5C` | Tag global unificada que gerencia e distribui os dados no site. |
| **Google Analytics 4 (GA4) ID** | GA4 S'EstepaDesign | `G-DZ9ZSG3VH0` | ID de Métrica associado diretamente à propriedade GA4 (`368818608`). |
| **Google Ads ID** | S'Estepa | `AW-795871100` | ID de conversão e remarketing configurado. |
| **Google Ads Conversion (Form)** | Form \| Design S'Estepa | `AW-795871100/dv-kCJrn0YoaEPyOwPsC` | Ação de conversão primária de envio de formulário de contato. |
| **Google Ads Conversion (WhatsApp)** | Boton Whatsapp \| Design S'Estepa | `AW-795871100/3a-ICMu_2ooaEPyOwPsC` | Ação de conversão de clique em link WhatsApp (`wa.me`). |
| **Google Tag Manager (GTM)** | S'Estepa Design | `GTM-K6MSRJX9` | Contêiner para gestão avançada de tags via script. |

## 2. EVENTOS E TELEMETRIA PERSONALIZADA

| Evento | Disparo | Payload / Destino |
| :--- | :--- | :--- |
| `conversion` | Envio de formulário confirmado com HTTP 200 (`res.ok && result.ok`) em `/api/leads` | `AW-795871100/dv-kCJrn0YoaEPyOwPsC` + `transaction_id` único (Google Ads) |
| `generate_lead` | Envio de formulário confirmado com HTTP 200 (`res.ok && result.ok`) em `/api/leads` | `currency: 'EUR'`, `value: 1.0`, `event_label: pathname` (GA4 & dataLayer) |
| `Lead` (Meta Pixel & CAPI) | Envio de formulário confirmado com HTTP 200 (`res.ok && result.ok`) em `/api/leads` | `1185880420805434` (`fbq('track', 'Lead')` + CAPI deduplicado por `eventID: txId`) |
| `whatsapp_click` / `Contact` | Primeiro clique em link `wa.me` na sessão (`sessionStorage`) | `AW-795871100/3a-ICMu_2ooaEPyOwPsC` (Google Ads `conversion`), `fbq('track', 'Contact')` + CAPI (`1185880420805434`), GA4, dataLayer & `/api/leads` |

## 3. META ADS & OUTROS RASTREADORES

| Ferramenta | Identificador | Função |
| :--- | :--- | :--- |
| **Meta Business Portfolio** | `925336572067280` (`sestepadesign`) | Portfólio empresarial oficial da S'Estepa Design. |
| **Meta Ads Account** | `1450159125790416` | Conta oficial `Cuenta Anuncios S'Estepa Design`. |
| **Meta Pixel / Dataset** | `1185880420805434` | Conjunto de dados `S'Estepa Design - design.sestepa.com` sincronizado com consentimento CookieYes (`advertisement`). |
| **Meta Domain Verification** | `n3kyf9z9ovyhv4kez1adjixiwt2l5f` | Meta tag `facebook-domain-verification` em `Layout.astro` para `design.sestepa.com`. |
| **CookieYes** | `f292b5d0baace10a4365b956` | Banner de consentimento de cookies em conformidade com GDPR. |
| **Metricool** | `4514d2b6d34c58b6a0b6a1c1649df7b` | Hash de rastreamento de métricas de rede social e tráfego. |

## 4. HISTÓRICO DE CORREÇÕES

* **19 de Novembro de 2026 (Meta Pixel, Verificação de Domínio e Públicos de Remarketing/B2B)**: Criação e instalação do Meta Pixel oficial (`1185880420805434` — `S'Estepa Design - design.sestepa.com`) e meta tag de verificação de domínio (`n3kyf9z9ovyhv4kez1adjixiwt2l5f`) em `Layout.astro` e `seo.ts`, estritamente restritos ao host de produção (`design.sestepa.com` / `www.design.sestepa.com`) e sincronizados com o consentimento GDPR do CookieYes (`advertisement`). Adicionado disparo deduplicado por `eventID` dos eventos `Lead` em `ContactForm.astro` e `Contact` no listener de WhatsApp em `Layout.astro`, com suporte server-side CAPI em `functions/api/leads.js`. Criados 5 Públicos Personalizados de Remarketing (`RMKT_IG_Engagers_365d_sestepadesign`, `RMKT_IG_Hot_90d_sestepadesign`, `RMKT_FB_Engagers_365d_SestepaDesign`, `RMKT_WEB_All_Visitors_180d`, `RMKT_WEB_Estate_Fincas_180d`) e 3 Públicos Salvos B2B por idioma (EN/DE/ES) na conta `1450159125790416`.

* **17 de Novembro de 2026 (Bloqueio de Localhost/Preview)**: Adicionada verificação de hostname (`design.sestepa.com` / `www.design.sestepa.com`) em `Layout.astro` (incluindo omissão do `<noscript>` do GTM em `import.meta.env.DEV`), `ContactForm.astro` (bloqueio de `gtag('set', 'user_data')`, `conversion`, `generate_lead`, `dataLayer.push` e `/api/leads` fora de produção) e `functions/api/leads.js` (proteção server-side contra envio ao Google Sheets a partir de previews `.pages.dev` ou hosts não produtivos), impedindo carregamento/contabilização de `CookieYes`, `gtag.js` (`GT-WKTZS5C`), `GTM-K6MSRJX9`, `Metricool` (via GTM) e cliques WhatsApp em `localhost`, `127.0.0.1` e previews `.pages.dev`.
* **17 de Novembro de 2026 (Auditoria GA4/GTM)**: Adicionado envio de `gtag('set', 'user_data', { email, phone_number })` em `ContactForm.astro` após confirmação HTTP 200 de `/api/leads` para alimentar o UPD (User-Provided Data) no GA4/Ads. Limpeza de Key Events no GA4 (`G-DZ9ZSG3VH0`) e pausa de tags redundantes no GTM (`GTM-K6MSRJX9`).
* **17 de Novembro de 2026**: Adicionado disparo direto de conversão Google Ads (`AW-795871100/3a-ICMu_2ooaEPyOwPsC`, `GOOGLE_ADS_CONVERSION_WHATSAPP`) no listener de cliques `wa.me` em `Layout.astro` e registrado em `seo.ts`. O acionador `Apenas links` no GTM (`GTM-K6MSRJX9`) estava configurado como `Evento personalizado` (`click`) em vez de `Just Links` ou `whatsapp_click`, impedindo os pings de conversão para `Boton Whatsapp | Design S'Estepa`.

* **10 de Novembro de 2026**: Blindagem do disparo de conversão em `ContactForm.astro`: validação estrita de `res.ok` e `result.ok` do endpoint `/api/leads` antes de acionar `AW-795871100/dv-kCJrn0YoaEPyOwPsC`, adição de `transaction_id` único contra duplicidade, emissão do evento `generate_lead` para GA4/dataLayer e remoção do disparo falso de conversão dentro do bloco `.catch()`. Adicionada deduplicação por sessão (`sessionStorage`) no listener de `wa.me` em `Layout.astro`.
* **04 de Setembro de 2026**: Atualização cirúrgica do rótulo de conversão de formulário no código (`contactPage.astro`, `HomePage.astro`, `seo.ts`). Substituição do placeholder genérico `AW-795871100/contact_form_lead` pela string alfanumérica oficial do Google Ads: `AW-795871100/dv-kCJrn0YoaEPyOwPsC`. Adição de telemetria de evento `whatsapp_click` via `window.gtag` e `dataLayer` em `Layout.astro`.
* **25 de Junho de 2026**: Substituição do `GTAG_ID` incorreto (`GT-PZ6D6P9N`) no arquivo `src/lib/seo.ts` pelo ID correto e verificado no console do Google Ads: `GT-WKTZS5C`. Isso reestabelece a comunicação da Google Tag com a propriedade correta de GA4 (`G-DZ9ZSG3VH0`) e o Google Ads.
