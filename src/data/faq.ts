/**
 * Single source of truth for FAQ content — consumed by both the visible
 * /faq/ page (FaqPage.astro) and the FAQPage JSON-LD (schema.ts / Schema.astro).
 * Keep them from this one array so structured data always matches what's
 * actually rendered on the page.
 */
export const faqs = [
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
] as const;
