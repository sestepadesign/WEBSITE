export interface ServiceItem {
  title: string;
  text: string;
  linkText: string;
  linkUrl: string;
}

export interface ServicesContent {
  tag: string;
  title: string;
  subtitle: string;
  metaDescription: string;
  intro: string;
  items: ServiceItem[];
}

export const servicesContent: Record<'en' | 'es' | 'de', ServicesContent> = {
  en: {
    tag: 'Our Expertise',
    title: 'Landscape Design & Garden Design in Mallorca',
    subtitle:
      'Specialist landscape design and garden design studio in Mallorca. We create and maintain living Mediterranean ecosystems for private villas, fincas and holiday residences — from concept to completion.',
    metaDescription:
      'Expert landscape design & garden design in Mallorca. S\'Estepa Design — 30 years crafting bespoke Mediterranean gardens for private villas, fincas and holiday estates.',
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
        title: 'Master Construction',
        text: 'Rigorous site development, structural earthworks, dry-stone walling, and planting executed by our dedicated team of local professionals.',
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
    tag: 'Nuestra Experiencia',
    title: 'Diseño de Jardines y Servicios de Paisajismo en Mallorca',
    subtitle:
      'Ofrecemos un enfoque integral del paisajismo en Mallorca, centrándonos en la creación y el mantenimiento a largo plazo de ecosistemas vivos para villas y residencias vacacionales.',
    metaDescription:
      'Diseño de jardines, arquitectura del paisaje, construcción y cuidado ecológico para villas, fincas y casas de vacaciones en Mallorca. S\'Estepa Design — 30 años de experiencia.',
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
        text: 'Desarrollo riguroso de la obra, movimientos de tierra estructurales, muros de piedra seca y plantación ejecutada por nuestro equipo local de profesionales.',
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
    tag: 'Unsere Expertise',
    title: 'Gartendesign & Landschaftsdienstleistungen auf Mallorca',
    subtitle:
      'Wir bieten einen umfassenden Ansatz für die Landschaftsgestaltung auf Mallorca, mit Schwerpunkt auf der Schaffung und langfristigen Pflege lebendiger Ökosysteme für Villen und Feriendomizile.',
    metaDescription:
      'Landschaftsgestaltung & Gartendesign auf Mallorca und den Balearen. S\'Estepa Design — über 30 Jahre Erfahrung in der Gestaltung mediterraner Gärten für Villen, Fincas und Privatresidenzen.',
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
        text: 'Präzise Erschließung des Geländes, strukturierte Erdarbeiten, Trockenmauern und Bepflanzung, ausgeführt von unserem engagierten lokalen Team.',
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
