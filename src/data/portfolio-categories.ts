/** Portfolio filter tabs — shared across portfolio index and project detail pages. */
export type PortfolioFilterCategory =
  | 'residential'
  | 'estate'
  | 'terrace'
  | 'commercial'
  | 'vertical';

export const PORTFOLIO_FILTER_ORDER: PortfolioFilterCategory[] = [
  'estate',
  'residential',
  'terrace',
  'commercial',
  'vertical',
];

export const projectCategoryMap: Record<string, PortfolioFilterCategory> = {
  binissalem: 'residential',
  bunyola: 'residential',
  'campanet-garden': 'residential',
  costadelacalma: 'residential',
  'crestatx-garden-design': 'residential',
  'garden-design-llubi-mallorca': 'residential',
  'finca-garden-inca': 'residential',
  'santa-ponsa': 'residential',
  'son-vida': 'residential',
  'seaside-house-alcudia': 'residential',
  'sacabaneta': 'residential',
  'finca-garden-campos-mallorca': 'estate',
  'sant-llorenc': 'estate',
  'terrace-garden-in-palma': 'terrace',
  'terrace-garden-santa-eugenia': 'residential',
  hotelcabotlasvelas: 'commercial',
  'vertical-gardens-in-mallorca': 'vertical',
};

export function getProjectCategory(slug: string): PortfolioFilterCategory {
  return projectCategoryMap[slug] ?? 'residential';
}

export const PORTFOLIO_PROJECT_ORDER: string[] = [
  'sant-llorenc',
  'finca-garden-campos-mallorca',
  'binissalem',
  'terrace-garden-santa-eugenia',
  'garden-design-llubi-mallorca',
  'santa-ponsa',
  'crestatx-garden-design',
  'bunyola',
  'son-vida',
  'terrace-garden-in-palma',
  'campanet-garden',
  'costadelacalma',
  'finca-garden-inca',
  'hotelcabotlasvelas',
  'vertical-gardens-in-mallorca',
  'sacabaneta',
  'seaside-house-alcudia'
];
