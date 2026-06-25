# S'Estepa Design: Looker Studio Dashboard Specification

This document provides the technical specification and layout blueprint for the Looker Studio business intelligence dashboard of S'Estepa Design. The dashboard integrates Google Ads and Google Analytics 4 (GA4) data to monitor high-value user acquisitions, localized page-level behavior (ES, EN, DE), and conversion funnels.

---

## 1. Dashboard Structure & Layout Blueprint

The dashboard is structured into three dedicated report pages to ensure optimal data density and clear logical separation.

### Global Filter Bar (Present on all pages)
* **Date Range Control**: Default to "Last 30 Days" compared to the previous period.
* **Language Filter**: Dropdown menu filtering by language code derived from browser settings or URL pattern (ES, EN, DE).
* **Device Category**: Dropdown menu (Desktop, Mobile, Tablet).
* **Traffic Channel Grouping**: Dropdown menu to filter traffic sources.

---

### Page 1: Executive Summary & Conversion Funnel
Focuses on the high-level macro conversion KPIs and user acquisition flow.

#### Component 1.1: Core KPIs (Scorecard Grid)
* **Visual Component**: Scorecard with comparison indicators (vs. previous period).
* **Metrics**:
  * Total Sessions (GA4: `sessions`)
  * Total Leads / Form Submissions (GA4 custom event: `form_submission` or `generate_lead`)
  * Macro Conversion Rate (Calculated: `Leads / Sessions`)
  * Total Marketing Spend (Google Ads: `cost`)

#### Component 1.2: User Journey & Lead Generation Funnel
* **Visual Component**: Horizontal or Vertical Funnel Chart (using pre-defined GA4 event steps).
* **Funnel Stages**:
  1. **All Sessions**: Total sessions starting on the site.
  2. **Portfolio/Project Viewers**: Sessions with views on `/portfolio` or specific project pages.
  3. **Contact Page Visitors**: Sessions reaching `/contact`, `/es/contacto`, or `/de/kontakt`.
  4. **Lead Generated**: Sessions firing the custom event `generate_lead` / `form_submission`.
* **Metrics**: Session count and step-to-step drop-off percentage.

#### Component 1.3: Top Entry Pages & Conversion Paths
* **Visual Component**: Data Table.
* **Dimension**: `Landing page + query string`
* **Metrics**: `Sessions`, `Engaged sessions`, `Form submissions`, `Conversion rate`.

---

### Page 2: Google Ads Performance
Focusses on paid search and display acquisition metrics, budget efficiency, and campaign ROI.

#### Component 2.1: Paid Acquisition Trend
* **Visual Component**: Time-series chart.
* **Dimension**: `Date`
* **Metrics (Dual Axis)**: `Clicks` (left axis) vs. `Cost` (right axis).

#### Component 2.2: Ad Efficiency Metrics (Scorecard Grid)
* **Visual Component**: Scorecard row.
* **Metrics**:
  * Impressions (Google Ads: `impressions`)
  * Clicks (Google Ads: `clicks`)
  * Click-Through Rate (Google Ads: `CTR`)
  * Average CPC (Google Ads: `avg_cpc`)
  * Cost Per Conversion (Google Ads: `cost_per_conversion`)

#### Component 2.3: Campaign Performance Breakdown
* **Visual Component**: Data Table (sorted by Cost descending).
* **Dimension**: `Campaign`
* **Metrics**: `Cost`, `Clicks`, `CTR`, `Average CPC`, `Conversions`, `Conversion rate`, `Cost per conversion`.

---

### Page 3: Page-Level Behavior & Localization (ES, EN, DE)
Monitors how the high-net-worth target audience interacts with content based on their preferred language.

#### Component 3.1: Language Segment Breakdown
* **Visual Component**: Donut / Pie Chart.
* **Dimension**: `Custom Language Dimension` (extracted from page path or browser language).
* **Metric**: `Sessions`.

#### Component 3.2: Behavior Matrix by Page & Language
* **Visual Component**: Data Table with heat map coloring.
* **Dimensions**: `Page path`, `Custom Language Dimension`
* **Metrics**:
  * Views (`screenPageViews`)
  * Average Engagement Time (`userEngagementDuration` / `activeUsers`)
  * Bounce Rate (Calculated as `1 - Engagement Rate`)
  * Scroll Depth Rate (Sessions where scroll event reached 90% scroll depth / Total Sessions)

---

## 2. Metric & Dimension Mapping

The table below outlines the exact fields and calculation formulas required in Looker Studio.

| Looker Studio Component | Source | Source Dimension/Metric | Looker Studio Field Name / Formula |
| :--- | :--- | :--- | :--- |
| **Sessions** | GA4 | `sessions` | `Sessions` |
| **Views** | GA4 | `screenPageViews` | `Views` |
| **Bounce Rate** | GA4 | `bounceRate` or custom formula | `1 - (Engaged Sessions / Sessions)` |
| **Average Engagement Time** | GA4 | `userEngagementDuration` / `activeUsers` | `Avg. Session Duration` |
| **Language** | GA4 | `language` or URL extraction | `CASE WHEN REGEXP_CONTAINS(Page path, '^/es(/|$)') THEN 'ES' WHEN REGEXP_CONTAINS(Page path, '^/de(/|$)') THEN 'DE' ELSE 'EN' END` |
| **Form Submissions** | GA4 | Event Name = `generate_lead` | `Leads` |
| **Scroll Depth (90%)** | GA4 | Event Name = `scroll` where parameter `percent_scrolled` = 90 | `Deep Scrolls` |
| **Spend** | Google Ads | `cost` | `Cost` |
| **Clicks** | Google Ads | `clicks` | `Clicks` |
| **CTR** | Google Ads | `ctr` | `CTR` |
| **Avg. CPC** | Google Ads | `averageCpc` | `Avg. CPC` |
| **Conversions** | Google Ads | `conversions` | `Conversions` |
| **Cost Per Conversion** | Google Ads | `costPerConversion` | `Cost / Conversion` |

---

## 3. Data Source Integration & Analytics Configuration

### Google Analytics 4 (GA4) Configuration
1. **Custom Event Tracking**:
   * Configure a custom event `generate_lead` in GA4 using Google Tag Manager (GTM). The trigger must fire upon successful validation of the contact form submission.
   * Mark `generate_lead` as a conversion event in the GA4 property.
2. **Scroll Tracking**:
   * Enable enhanced measurement for scrolls. For precise 90% scroll tracking, configure a dedicated scroll depth trigger in GTM (firing at 90%) and map it to a custom GA4 event parameters if native precision is insufficient.
3. **Language Dimension Customization**:
   * If browser settings conflict with the website's localized URLs, use the `Page path` regex rule defined in Section 2 to create a custom field directly inside the Looker Studio data source.

### Google Ads Integration
1. **Link Accounts**:
   * Link the Google Ads account directly to the GA4 property under Admin > Product Links.
   * Ensure GCLID auto-tagging is enabled in Google Ads to auto-populate campaign dimensions inside GA4.
2. **Conversion Import**:
   * Import the GA4 `generate_lead` event into Google Ads as a conversion action to align bidding algorithms and performance reporting.
3. **Looker Studio Data Sources**:
   * Add two separate data sources to the Looker Studio report:
     * **Data Source A**: Google Analytics 4 (linked directly to the S'Estepa property).
     * **Data Source B**: Google Ads (linked directly to the active Ads account).
   * Do not use data blending unless joining Google Ads campaigns with GA4 sessions using GCLID/Campaign parameters (standard native connectors are preferred to avoid performance degradation).
