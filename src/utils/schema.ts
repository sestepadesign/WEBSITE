// Define translations for dynamic text fields
const translations = {
  es: {
    description: "Estudio de arquitectura del paisaje, diseño de jardines y paisajismo en Mallorca y las Islas Baleares con más de 30 años de experiencia. Paisajistas especialistas en jardines mediterráneos auténticos para fincas privadas, villas y residencias.",
    siteName: "S'Estepa Design | Arquitectura del Paisaje y Diseño de Jardines en Mallorca",
    catalogName: "Servicios de Diseño de Jardines",
    services: [
      { name: "Diseño Conceptual de Jardines", description: "Concepto de diseño preliminar en 2D que define la distribución, materiales y características propuestas." },
      { name: "Diseño de Jardín a Escala 2D", description: "Planos detallados a escala en 2D para la construcción y plantación del jardín." },
      { name: "Renders 3D de Jardines", description: "Visualizaciones en 3D fotorrealistas del diseño del jardín propuesto antes de la construcción." },
      { name: "Construcción de Jardines", description: "Instalación y construcción completa de jardines diseñados en Mallorca, desde terrazas hasta fincas." },
      { name: "Mantenimiento de Jardines", description: "Mantenimiento continuo de jardines establecidos, incluyendo poda, riego y control fitosanitario." },
      { name: "Consulta Inicial Gratuita", description: "Primera reunión de cortesía para discutir los objetivos del pródigo, condiciones del sitio y presupuesto." }
    ]
  },
  en: {
    description: "Landscape architecture, garden design and landscaping studio in Mallorca and the Balearic Islands with over 30 years of experience. Specialist landscape architects creating authentic Mediterranean gardens for private estates, villas, and fincas.",
    siteName: "S'Estepa Design | Landscape Architecture & Garden Design Mallorca",
    catalogName: "Garden Design Services",
    services: [
      { name: "Conceptual Garden Design", description: "Preliminary 2D design concept outlining layout, materials, and proposed features based on site analysis and client brief." },
      { name: "2D Scaled Garden Design", description: "Detailed scaled 2D plans for garden construction and planting." },
      { name: "3D Garden Renders", description: "Photorealistic 3D visualizations of the proposed garden design prior to construction." },
      { name: "Garden Construction", description: "Full installation and construction of designed gardens across Mallorca, from terraces to fincas." },
      { name: "Garden Maintenance", description: "Ongoing maintenance of established gardens including pruning, irrigation, and plant health management." },
      { name: "Free Initial Consultation", description: "Complimentary first meeting to discuss project goals, site conditions, and budget." }
    ]
  },
  de: {
    description: "Landschaftsarchitektur-, Gartengestaltungs- und Landschaftsbau-Studio auf Mallorca und den Balearen mit über 30 Jahren Erfahrung. Landschaftsarchitekten spezialisiert auf authentische mediterrane Gärten für private Fincas, Villen und Residenzen.",
    siteName: "S'Estepa Design | Landschaftsarchitektur & Gartengestaltung Mallorca",
    catalogName: "Gartengestaltung Dienstleistungen",
    services: [
      { name: "Konzeptionelle Gartengestaltung", description: "Vorläufiger 2D-Entwurf, der das Layout, die Materialien und die vorgeschlagenen Funktionen auf der Grundlage der Standortanalyse beschreibt." },
      { name: "Skalierte 2D-Gartengestaltung", description: "Detaillierte, maßstabsgetreue 2D-Pläne für den Gartenbau und die Bepflanzung." },
      { name: "3D-Garten-Renders", description: "Fotorealistische 3D-Visualisierungen der vorgeschlagenen Gartengestaltung vor dem Bau." },
      { name: "Gartenbau", description: "Komplette Installation und Bau von gestalteten Gärten auf ganz Mallorca, von Terrassen bis hin zu Fincas." },
      { name: "Gartenpflege", description: "Laufende Pflege etablierter Gärten einschließlich Rückschnitt, Bewässerung und Pflanzengesundheitsmanagement." },
      { name: "Kostenlose Erstberatung", description: "Kostenloses Erstgespräch zur Besprechung von Projektzielen, Standortbedingungen und Budget." }
    ]
  }
};

export function getLocalizedSchema(
  locale: 'es' | 'en' | 'de',
  currentUrl: string,
  isHome: boolean,
  isServiceOrPortfolio: boolean
) {
  const trans = translations[locale] || translations.en;
  
  // 1. Organization Schema (LocalBusiness / HomeAndConstructionBusiness)
  const organization = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": "https://design.sestepa.com/#business",
    "name": "S'Estepa Design",
    "legalName": "S'Estepa Jardineria Integral SL",
    "alternateName": ["S'Estepa Garden Design", "Sestepa Design Mallorca"],
    "description": trans.description,
    "image": {
      "@type": "ImageObject",
      "url": "https://design.sestepa.com/portfolio/campos/images/GARDEN-LANDSCAPE-DESIGN-MALLORCA-SESTEPA-DESIGN-JARDINES-1.jpg",
      "width": 1200,
      "height": 800
    },
    "logo": {
      "@type": "ImageObject",
      "url": "https://design.sestepa.com/images/S-ESTEPA-GARDEN-DESIGN-MALLORCA-LOGO-BLACK-344.png",
      "width": 344,
      "height": 120
    },
    "url": "https://design.sestepa.com",
    "telephone": "+34 681 272 252",
    "email": "sofia@sestepa.com",
    "foundingDate": "1999-01-01",
    "numberOfEmployees": { "@type": "QuantitativeValue", "value": 15 },
    "founder": [{ "@type": "Person", "name": "Pedro Campaner", "jobTitle": "CEO & Founder" }],
    "member": [
      { "@type": "Person", "name": "Pedro Campaner", "jobTitle": "CEO & Founder" },
      { "@type": "Person", "name": "Sofia Grimaux", "jobTitle": "Project Manager" }
    ],
    "employee": [
      { "@type": "Person", "name": "Sofia Grimaux", "jobTitle": "Project Manager" },
      { "@type": "Person", "name": "Blanca González", "jobTitle": "Financial Director" }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Carrer dels Menestrals, 5",
      "addressLocality": "Inca",
      "addressRegion": "Illes Balears",
      "postalCode": "07300",
      "addressCountry": "ES"
    },
    "geo": { "@type": "GeoCoordinates", "latitude": 39.7197, "longitude": 2.9103 },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Mallorca",
        "alternateName": ["Majorca", "Mallorca island"],
        "sameAs": "https://www.wikidata.org/wiki/Q8818",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Illes Balears",
          "alternateName": ["Balearic Islands", "Islas Baleares"],
          "sameAs": "https://www.wikidata.org/wiki/Q5722",
          "containedInPlace": { "@type": "Country", "name": "España", "sameAs": "https://www.wikidata.org/wiki/Q29" }
        }
      },
      {
        "@type": "AdministrativeArea",
        "name": "Balearic Islands",
        "alternateName": ["Illes Balears", "Islas Baleares"],
        "sameAs": "https://www.wikidata.org/wiki/Q5722"
      },
      { "@type": "City", "name": "Palma de Mallorca" },
      { "@type": "City", "name": "Andratx" },
      { "@type": "City", "name": "Campos" },
      { "@type": "City", "name": "Llucmajor" },
      { "@type": "City", "name": "Santa Ponsa" },
      { "@type": "City", "name": "Pollença" },
      { "@type": "City", "name": "Inca" },
      { "@type": "City", "name": "Tramuntana" }
    ],
    "award": [
      "abcMallorca Only The Best 2024 — Landscape Architecture & Garden Design"
    ],
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "name": "abcMallorca Only The Best 2024",
      "description": "Selected by abcMallorca magazine as one of the island's leading landscape architecture and garden design studios in the Only The Best 2024 editorial ranking.",
      "recognizedBy": {
        "@type": "Organization",
        "name": "abcMallorca",
        "url": "https://www.abc-mallorca.com"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "3",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "James H." },
        "reviewBody": "S'Estepa transformed our finca in Campos into something beyond our imagination. The team understood the land's character and created a garden that feels completely natural yet utterly refined.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "datePublished": "2024-06-15",
        "itemReviewed": { "@id": "https://design.sestepa.com/#business" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Claudia M." },
        "reviewBody": "The only studio that truly understands Mallorca's landscape DNA. Working with S'Estepa was a seamless and inspired experience from the very first meeting.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "datePublished": "2024-09-03",
        "itemReviewed": { "@id": "https://design.sestepa.com/#business" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Peter K." },
        "reviewBody": "From design to final planting — a seamless, exceptional experience. Every detail was handled with care and the result exceeded all our expectations.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "datePublished": "2025-03-20",
        "itemReviewed": { "@id": "https://design.sestepa.com/#business" }
      }
    ],
    "priceRange": "$$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "https://schema.org/Monday",
          "https://schema.org/Tuesday",
          "https://schema.org/Wednesday",
          "https://schema.org/Thursday",
          "https://schema.org/Friday"
        ],
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "knowsAbout": [
      { "@type": "Thing", "name": "Landscape Architecture", "sameAs": "https://en.wikipedia.org/wiki/Landscape_architecture" },
      { "@type": "Thing", "name": "Garden Design", "sameAs": "https://en.wikipedia.org/wiki/Garden_design" },
      { "@type": "Thing", "name": "Sustainable Landscaping", "sameAs": "https://en.wikipedia.org/wiki/Sustainable_landscaping" },
      "Landscape Design Mallorca",
      "Garden Design Mallorca",
      "Mallorca Garden Design",
      "Landscape Architect Mallorca",
      "Architect Garden Design Mallorca",
      "Landscaping Mallorca",
      "Landscaping Balearic Islands",
      "Garden Design Balearic Islands",
      "Mediterranean Garden Design",
      "Diseño de Jardines Mallorca",
      "Diseño de Jardines Islas Baleares",
      "Paisajismo Mallorca",
      "Arquitectura del Paisaje Mallorca",
      "Gartengestaltung Mallorca",
      "Landschaftsgestaltung Mallorca",
      "Landschaftsarchitektur Balearen",
      "Endemic Species Planting"
    ],
    "knowsLanguage": ["es", "en", "de"],
    "sameAs": [
      "https://www.sestepa.com",
      "https://www.instagram.com/sestepadesign",
      "https://www.facebook.com/sestepadesign",
      "https://www.pinterest.com/sestepadesign",
      "https://www.youtube.com/@SESTEPADESIGN",
      "https://www.helencummins.com/sestepa-garden-designers-mallorca/",
      "https://www.houzz.com/pro/sestepadesign/s-estepa-design",
      "https://www.homify.com/professionals/10013396/s-estepa-design"
    ]
  };

  // 2. Services Schema
  const servicesList = trans.services.map((srv) => {
    const isFree = srv.name.toLowerCase().includes("free") || srv.name.toLowerCase().includes("gratuita") || srv.name.toLowerCase().includes("kostenlose");
    return {
      "@type": "Offer",
      ...(isFree ? { "price": "0.00", "priceCurrency": "EUR" } : {}),
      "itemOffered": {
        "@type": "Service",
        "name": srv.name,
        "description": srv.description
      }
    };
  });

  const services = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": trans.catalogName,
    "serviceType": "Landscape Architecture & Garden Design",
    "provider": { "@id": "https://design.sestepa.com/#business" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Mallorca", "sameAs": "https://www.wikidata.org/wiki/Q8818" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": trans.catalogName,
      "itemListElement": servicesList
    }
  };

  // 3. WebSite Schema
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://design.sestepa.com/#website",
    "url": "https://design.sestepa.com",
    "name": trans.siteName,
    "description": trans.description,
    "inLanguage": [locale],
    "publisher": { "@id": "https://design.sestepa.com/#business" }
  };

  const schemas: any[] = [organization];
  if (isHome) {
    schemas.push(website);
  }
  if (isServiceOrPortfolio) {
    schemas.push(services);
  }

  return schemas;
}
