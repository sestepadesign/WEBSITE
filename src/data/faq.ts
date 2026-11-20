/**
 * Single source of truth for FAQ content — consumed by both the visible
 * FAQ pages (/faq/, /es/faq/, /de/faq/ via FaqPage.astro) and the FAQPage
 * JSON-LD (schema.ts / Schema.astro).
 * Keep them from this one structure so structured data always matches what's
 * actually rendered on the page.
 */
export interface FAQItem {
  question: string;
  answer: string;
}

export const faqsByLocale: Record<'en' | 'es' | 'de', readonly FAQItem[]> = {
  en: [
    {
      question: "How is a project priced?",
      answer: "Every project is quoted individually after an initial site visit and consultation. We provide a fully transparent budget that breaks down each phase — design, materials, construction, and planting — with no hidden fees and no surcharge for international clients. Our pricing reflects the standard of execution, not where you're calling from."
    },
    {
      question: "How long does a project take, from first meeting to finished garden?",
      answer: "Timelines depend on the scale and complexity of the project, but every client receives a clear schedule once the design is finalized, during the Design Refinement stage. Your project has a dedicated point of contact overseeing execution, which allows us to hold to agreed deadlines even on large or technically complex gardens."
    },
    {
      question: "I don't live in Mallorca year-round — how do I manage the project remotely?",
      answer: "Most of our international clients manage their project remotely. You'll have one dedicated point of contact throughout construction, with regular photo and video updates and video calls whenever needed. Physical presence in Mallorca isn't required to stay fully informed and in control of decisions."
    },
    {
      question: "How do you approach water use and sustainability, given Mallorca's water scarcity?",
      answer: "Our Ecological Care approach is built specifically for the Mediterranean climate: xeriscape planting schemes, smart drip irrigation, and a plant palette selected for the island's limestone soil and dry conditions. This comes from 30 years of working directly with Mallorcan terrain and understanding what actually thrives here with minimal water."
    },
    {
      question: "Who is behind S'Estepa Design?",
      answer: "S'Estepa was founded by Pedro Campaner, a Mallorcan Agricultural Technician and Landscaper, who started designing gardens on the island at just 18 years old. Thirty years later, the studio has grown into a team of experienced local professionals working alongside Sofia Grimaux, project manager for every client — your single point of contact from first sketch to finished garden. Our team works with a flat, collaborative structure, which keeps projects agile without losing accountability."
    },
    {
      question: "Why the name \"S'Estepa\"?",
      answer: "Estepa (rockrose) is a hardy Mediterranean shrub that blooms wild across Mallorca's forests, known for thriving in poor, dry soil where little else survives. The name reflects our design philosophy: work with the island's natural resilience, not against it."
    },
    {
      question: "What kind of properties do you work on?",
      answer: "We specialize in private villas, fincas, and estates across Mallorca — from contemporary terraces to large rural properties. Many of our clients are international owners of second homes on the island, as well as architects and estate agents who bring us in on behalf of their clients."
    },
    {
      question: "What languages does your team work in?",
      answer: "Our team manages every stage of the process in English, Spanish, and German, so international clients are never navigating the project through a third party or translation."
    },
    {
      question: "Do you only design, or do you also build and maintain the garden?",
      answer: "We manage the full process end-to-end: conceptual design, technical planning, full garden construction, and ongoing ecological care and maintenance. You work with a single studio from first sketch to the finished, living garden."
    }
  ],
  es: [
    {
      question: "¿Cómo se presupuesta un proyecto de paisajismo?",
      answer: "Cada proyecto se presupuesta de forma individual tras una visita inicial al terreno y una reunión técnica. Entregamos un presupuesto totalmente transparente y desglosado por fases — diseño, materiales, obra civil y plantación — sin costes ocultos ni recargos para clientes internacionales. Nuestras tarifas reflejan el estándar de ejecución y los materiales reales, no el país de origen del propietario."
    },
    {
      question: "¿Cuánto tiempo tarda un proyecto desde la primera reunión hasta el jardín terminado?",
      answer: "Los plazos dependen de la escala y complejidad de la finca o villa, pero cada cliente recibe un cronograma claro una vez definido el diseño, durante la fase de Refinamiento. Su proyecto cuenta con un único interlocutor que supervisa la obra in situ, lo que nos permite cumplir los plazos acordados incluso en jardines de gran escala o alta exigencia técnica."
    },
    {
      question: "No resido en Mallorca todo el año: ¿cómo se gestiona la obra a distancia?",
      answer: "La mayoría de nuestros clientes internacionales gestionan su proyecto desde el extranjero. Contará con un único punto de contacto durante toda la ejecución, con informes periódicos de fotografía y vídeo desde la obra y videollamadas concertadas para cada toma de decisión. No es necesario estar físicamente en Mallorca para mantener el control total del proyecto."
    },
    {
      question: "¿Cómo abordan el consumo de agua y la sostenibilidad ante la sequía en Mallorca?",
      answer: "Nuestro enfoque de Cuidado Ecológico está diseñado específicamente para el clima balear: esquemas de xerojardinería mediterránea, hidro-zonificación, riego inteligente por goteo subterráneo y una paleta botánica adaptada al suelo calcáreo y la arcilla Call Vermell de la isla. Son tres décadas trabajando directamente el terreno mallorquín y conociendo qué especies prosperan con una fracción del agua convencional."
    },
    {
      question: "¿Quién está detrás de S'Estepa Design?",
      answer: "S'Estepa fue fundada en 1999 por Pedro Campaner, técnico agrícola y paisajista mallorquín que comenzó a diseñar jardines en la isla a los 18 años. Tres décadas después, el estudio integra un equipo propio de profesionales locales — arquitecta paisajista, jefe de obra y especialistas en piedra seca — junto a Sofia Grimaux, gestora de proyectos e interlocutora única desde el primer boceto hasta la entrega del jardín."
    },
    {
      question: "¿Por qué el nombre \"S'Estepa\"?",
      answer: "S'Estepa (la jara o estepa blanca) es un arbusto mediterráneo autóctono que florece de forma silvestre en los montes de Mallorca, capaz de prosperar en suelos secos y calcáreos donde pocas especies sobreviven. El nombre resume nuestra filosofía: diseñar a favor de la resiliencia natural de la isla, nunca en su contra."
    },
    {
      question: "¿En qué tipo de propiedades y con qué perfiles trabajan?",
      answer: "Nos especializamos en fincas históricas, grandes propiedades rurais (estates), villas contemporáneas, áticos y hoteles boutique en toda Mallorca. Además de propietarios privados, colaboramos estrechamente con estudios de arquitectura, project managers y family offices como socio técnico integral de paisajismo y construcción."
    },
    {
      question: "¿En qué idiomas trabaja el equipo?",
      answer: "Nuestro equipo gestiona todas las etapas del proyecto directamente en español, inglés y alemán, garantizando una comunicación técnica fluida y sin intermediarios."
    },
    {
      question: "¿Solo realizan el diseño o también construyen y mantienen el jardín?",
      answer: "Ejecutamos el ciclo completo llave en mano: diseño conceptual, planos técnicos 2D y renders 3D, construcción integral del jardín (movimientos de tierra, muros de paret seca, riego subterráneo y plantación de ejemplares centenarios) y mantenimiento ecológico continuo con equipo propio."
    }
  ],
  de: [
    {
      question: "Wie wird ein Landschaftsarchitektur-Projekt kalkuliert?",
      answer: "Jedes Projekt wird nach einer ersten Besichtigung vor Ort individuell kalkuliert. Wir erstellen ein vollständig transparentes, nach Phasen aufgeschlüsseltes Budget — Entwurf, Materialien, Gartenbau und Bepflanzung — ohne versteckte Gebühren und ohne Aufschläge für internationale Eigentümer. Unsere Preise spiegeln die Ausführungsqualität und den Projektumfang wider, nicht Ihre Herkunft."
    },
    {
      question: "Wie lange dauert ein Projekt vom ersten Gespräch bis zum fertigen Garten?",
      answer: "Der Zeitrahmen hängt von der Größe und technischen Komplexität des Anwesens ab. Sobald der Entwurf in der Detailabstimmung finalisiert ist, erhalten Sie einen verbindlichen Bauzeitenplan. Eine feste Projektleitung überwacht die Ausführung vor Ort, sodass vereinbarte Termine auch bei weitläufigen Fincas zuverlässig eingehalten werden."
    },
    {
      question: "Ich lebe nicht ganzjährig auf Mallorca — wie funktioniert die Projektbetreuung aus der Ferne?",
      answer: "Die meisten unserer internationalen Bauherren steuern ihr Gartenprojekt aus dem Ausland. Sie haben während der gesamten Bauphase eine feste Ansprechpartnerin auf Deutsch, Englisch oder Spanisch und erhalten regelmäßige Foto- und Videodokumentationen von der Baustelle sowie abgestimmte Videocalls. Ihre persönliche Anwesenheit auf der Insel ist nicht erforderlich, um jede Entscheidung sicher zu treffen."
    },
    {
      question: "Wie gehen Sie mit Wasserknappheit und Nachhaltigkeit auf Mallorca um?",
      answer: "Unser Konzept der ökologischen Wassereffizienz ist gezielt auf das mallorquinische Klima abgestimmt: mediterranes Xeriscaping, Hydro-Zonierung, unterirdische Tropfbewässerung und eine auf den kalkhaltigen Inselboden abgestimmte Pflanzenpalette. Dieses Wissen stammt aus fast 30 Jahren direkter Praxis mit Mallorcas Boden, Wind und endemischer Flora."
    },
    {
      question: "Wer steht hinter S'Estepa Design?",
      answer: "S'Estepa wurde 1999 von Pedro Campaner gegründet, einem auf Mallorca geborenen Agrartechniker und Landschaftsgestalter, der bereits mit 18 Jahren begann, Gärten auf der Insel zu entwerfen. Heute vereint das Studio ein eigenes lokales Fachteam aus Architektur, Bauleitung und Trockenmauerbau rund um Projektmanagerin Sofia Grimaux — Ihre zentrale Ansprechpartnerin vom ersten Entwurf bis zur Schlüsselübergabe."
    },
    {
      question: "Woher stammt der Name \"S'Estepa\"?",
      answer: "S'Estepa (die Zistrose) ist ein widerstandsfähiger, auf Mallorca heimischer Wildstrauch, der selbst auf kargen, trockenen Kalkböden prächtig blüht. Der Name steht für unsere Gestaltungsphilosophie: mit der natürlichen Widerstandskraft der Insel zu planen, statt gegen sie zu arbeiten."
    },
    {
      question: "Für welche Immobilien und Auftraggeber arbeiten Sie?",
      answer: "Wir sind auf private Fincas, weitläufige Landgüter, moderne Luxusvillen, Dachterrassen und ausgewählte Boutique-Hotels auf ganz Mallorca spezialisiert. Neben privaten Eigentümern arbeiten wir regelmäßig als ausführender Landschaftsarchitektur-Partner für Architekturbüros, Projektmanager und Family Offices."
    },
    {
      question: "In welchen Sprachen arbeitet Ihr Studio?",
      answer: "Unser Team betreut jede Projektphase fließend auf Deutsch, Englisch und Spanisch — direkt und ohne externe Übersetzer oder Reibungsverluste."
    },
    {
      question: "Übernehmen Sie nur die Planung oder auch den schlüsselfertigen Gartenbau und die Pflege?",
      answer: "Wir realisieren den gesamten Prozess schlüsselfertig aus einer Hand: Konzeptentwurf, 2D-Ausführungspläne und 3D-Visualisierungen, kompletten Garten- und Landschaftsbau (Erdarbeiten, traditionelle Pedra-en-sec-Trockenmauern, Bewässerungstechnik, Großbaumverpflanzung) sowie die anschließende ökologische Fachpflege."
    }
  ],
};

export const faqs = faqsByLocale.en;
