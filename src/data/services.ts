export interface ServiceItem {
  title: string;
  text: string;
  linkText: string;
  linkUrl: string;
}

export interface ServicesContent {
  tag: string;
  seoTitle?: string;
  /** Evocative hero headline (the single <h1> of the page). */
  heroHeadline: string;
  /** Hero supporting line. */
  heroLead: string;
  /** Keyword-framed section heading (rendered as <h2>), kept for SEO. */
  title: string;
  subtitle: string;
  metaDescription: string;
  intro: string;
  items: ServiceItem[];
}

export const servicesContent: Record<'en' | 'es' | 'de', ServicesContent> = {
  en: {
    tag: 'Our Studio',
    seoTitle: "Garden Design & Landscaping Services in Mallorca | S'Estepa Design",
    heroHeadline: 'The garden becomes the favourite room of the house.',
    heroLead:
      'We stay with you for the whole of it — design, construction, irrigation and care — carried out by our own team. Thirty years shaping Mediterranean gardens with a Mallorcan hand.',
    title: 'Our Garden Design and Landscaping Services in Mallorca',
    subtitle:
      'Specialist landscape design and garden design studio in Mallorca. We create and maintain living Mediterranean ecosystems for private villas, fincas and holiday residences — from concept to completion.',
    metaDescription:
      'Boutique garden design, construction and ecological care for private villas, fincas and estates in Mallorca. S\'Estepa Design — 30 years of Mediterranean landscape architecture.',
    intro:
      'Our team oversees the entire process—from design and construction to technical irrigation and planting. We ensure a seamless experience, managing every detail in English, Spanish, and German.',
    items: [
      {
        title: 'Villas & Holiday Homes',
        text: 'Exclusive tailor-made botanical environments designed to enrich refined residences, holiday homes, and fincas across Mallorca.',
        linkText: 'View Projects',
        linkUrl: 'portfolio',
      },
      {
        title: 'Landscape Design',
        text: 'High-fidelity conceptual drawings, technical layouts, and virtual 3D renders that breathe spatial order and structure into your vision.',
        linkText: 'Meet Our Team',
        linkUrl: 'about',
      },
      {
        title: 'Full Garden Construction',
        text: 'Rigorous site development, structural earthworks, and planting executed by our dedicated team of local professionals.',
        linkText: 'Meet Our Team',
        linkUrl: 'about',
      },
      {
        title: 'Ecological Care',
        text: 'Xeriscape planting schemes, water resource planning, and intelligent drip irrigation systems designed for ultimate sustainability.',
        linkText: 'Request Consultation',
        linkUrl: 'contact',
      },
    ],
  },
  es: {
    tag: 'Nuestro Estudio',
    seoTitle: "Servicios de Diseño de Jardines y Paisajismo en Mallorca | S'Estepa Design",
    heroHeadline: 'El jardín se convierte en el lugar favorito de la casa.',
    heroLead:
      'Te acompañamos en todo el proceso —diseño, construcción, riego y cuidado— con equipo propio. Treinta años dando forma a jardines mediterráneos con mano mallorquina.',
    title: 'Nuestros Servicios de Diseño de Jardines y Paisajismo en Mallorca',
    subtitle: '',
    metaDescription:
      'Estudio boutique de paisajismo y diseño de jardines en Mallorca — de Palma a fincas y villas de la isla. 30 años de alma mediterránea auténtica.',
    intro:
      'Nuestro equipo supervisa todo el proceso, desde el diseño y la construcción hasta el riego técnico y la plantación. Garantizamos una experiencia sin fisuras, gestionando cada detalle en inglés, español y alemán.',
    items: [
      {
        title: 'Villas y Fincas',
        text: 'Entornos botánicos exclusivos y a medida, diseñados para enriquecer distinguidas residencias, villas de vacaciones y fincas en Mallorca.',
        linkText: 'Ver Proyectos',
        linkUrl: 'portfolio',
      },
      {
        title: 'Diseño de Paisaje',
        text: 'Planos conceptuales de alta fidelidad, distribuciones técnicas y renders 3D virtuales que aportan orden y estructura espacial a su visión.',
        linkText: 'Conozca al Equipo',
        linkUrl: 'about',
      },
      {
        title: 'Construcción y Obra',
        text: 'Desarrollo riguroso de la obra, movimientos de tierra estructurales y plantación ejecutada por nuestro equipo local de profesionales.',
        linkText: 'Conozca al Equipo',
        linkUrl: 'about',
      },
      {
        title: 'Cuidado Ecológico',
        text: 'Diseños de xerojardinería, planificación de recursos hídricos y sistemas inteligentes de riego por goteo para la máxima sostenibilidad.',
        linkText: 'Solicitar Consulta',
        linkUrl: 'contact',
      },
    ],
  },
  de: {
    tag: 'Unser Studio',
    seoTitle: "Gartengestaltung und Pflege auf Mallorca — Leistungen | S'Estepa Design",
    heroHeadline: 'Der Garten wird zum Lieblingsort des Hauses.',
    heroLead:
      'Wir begleiten Sie durch den gesamten Prozess — Entwurf, Bau, Bewässerung und Pflege — mit unserem eigenen Team. Dreißig Jahre mediterrane Gärten mit mallorquinischer Handschrift.',
    title: 'Unsere Leistungen für Gartengestaltung auf Mallorca',
    subtitle:
      'Wir bieten einen umfassenden Ansatz für die Landschaftsgestaltung auf Mallorca, mit Schwerpunkt auf der Schaffung und langfristigen Pflege lebendiger Ökosysteme für Villen und Feriendomizile.',
    metaDescription:
      'Boutique-Gartengestaltung und Landschaftsarchitektur auf Mallorca für private Fincas und Villen. S\'Estepa Design — 30 Jahre mediterrane Gartenplanung. Planung, Bau und ökologische Pflege.',
    intro:
      'Unser Team überwacht den gesamten Prozess – vom Entwurf und Bau bis hin zur technischen Bewässerung und Bepflanzung. Wir garantieren einen reibungslosen Ablauf und regeln jedes Detail auf Englisch, Spanisch und Deutsch.',
    items: [
      {
        title: 'Villen & Feriendomizile',
        text: 'Exklusive, maßgeschneiderte botanische Umgebungen, die anspruchsvolle Residenzen, Feriendomizile und Fincas auf ganz Mallorca bereichern.',
        linkText: 'Projekte Ansehen',
        linkUrl: 'portfolio',
      },
      {
        title: 'Landschaftsarchitektur',
        text: 'Präzise Konzeptzeichnungen, technische Layouts und virtuelle 3D-Renderings, die Ihrer Vision räumliche Ordnung und Struktur verleihen.',
        linkText: 'Team Kennenlernen',
        linkUrl: 'about',
      },
      {
        title: 'Bauausführung',
        text: 'Präzise Erschließung des Geländes, strukturierte Erdarbeiten und Bepflanzung, ausgeführt von unserem engagierten lokalen Team.',
        linkText: 'Team Kennenlernen',
        linkUrl: 'about',
      },
      {
        title: 'Ökologische Pflege',
        text: 'Xeriscape-Bepflanzungspläne, Wasserressourcenplanung und Tröpfchenbewässerungssysteme für höchste Nachhaltigkeit.',
        linkText: 'Beratung Anfragen',
        linkUrl: 'contact',
      },
    ],
  },
};
