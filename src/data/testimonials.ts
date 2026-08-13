/**
 * Single source of truth for client testimonials — consumed by both the
 * visible carousel on the home page (HomePage.astro) and the Review /
 * AggregateRating JSON-LD (schema.ts / Schema.astro). Keeping them driven
 * from this one array means structured data always matches what's actually
 * rendered on the page (Google spam policy: don't mark up content that
 * isn't visible to users).
 *
 * Source: genuine Google reviews left directly on the S'Estepa Google
 * Business Profile. Original language noted per entry; EN/ES/DE are our
 * own translations, kept faithful to the original wording and meaning.
 * Attribution uses first name + surname initial, per the studio's privacy
 * preference for its clientele. `sourceUrl` is the official Google share
 * link for that review, used as the "read full review" link for longer
 * quotes.
 */
export const testimonials = [
  {
    author: 'Christine H.',
    rating: 5,
    long: false,
    sourceUrl: 'https://share.google/FEa0xwiEDSEmL0Whq',
    quote: {
      en: "We have been working with S'Estepa for over four years. Their team planned and planted our over 100 square meter roof terrace and now maintains it regularly. We are totally satisfied! Thanks for this trustful relationship!",
      es: "Llevamos más de cuatro años trabajando con S'Estepa. Su equipo diseñó y plantó nuestra terraza en la azotea, de más de 100 metros cuadrados, y ahora se encarga de su mantenimiento regular. ¡Estamos totalmente satisfechos! Gracias por esta relación de confianza.",
      de: "Wir arbeiten seit über vier Jahren mit S'Estepa zusammen. Ihr Team hat unsere über 100 Quadratmeter große Dachterrasse geplant und bepflanzt und kümmert sich jetzt regelmäßig um die Pflege. Wir sind rundum zufrieden! Danke für diese vertrauensvolle Zusammenarbeit!",
    },
  },
  {
    author: 'Jaume R.',
    rating: 5,
    long: true,
    sourceUrl: 'https://share.google/Q2hQT1DkicO9ydofs',
    quote: {
      en: "Excellent experience with S'Estepa. They designed the garden from scratch with great judgment and taste, and as the garden developed they kept contributing ideas to improve it. The result exceeded our expectations. Since then, they've also taken care of the maintenance, and the garden is always immaculate. They cover every aspect involved in keeping a garden, with real professionalism and commitment. You can tell they love what they do. Highly recommended.",
      es: "Experiencia excelente con S'Estepa. Diseñaron el jardín desde cero con mucho criterio y buen gusto, y a medida que el jardín se iba haciendo, siguieron aportando ideas para mejorarlo. El resultado ha superado las expectativas. Además, desde entonces se encargan del mantenimiento y el jardín está siempre perfecto. Cubren todos los aspectos que implica tener un jardín, con gran profesionalidad e implicación. Se nota que aman su trabajo. Totalmente recomendables.",
      de: "Exzellente Erfahrung mit S'Estepa. Sie haben den Garten von Grund auf mit viel Gespür und gutem Geschmack gestaltet, und während der Garten wuchs, brachten sie immer wieder neue Ideen zur Verbesserung ein. Das Ergebnis hat unsere Erwartungen übertroffen. Seitdem übernehmen sie außerdem die Pflege, und der Garten ist stets makellos. Sie kümmern sich um jeden Aspekt der Gartenpflege mit großer Professionalität und Hingabe. Man merkt, dass sie ihre Arbeit lieben. Absolut empfehlenswert.",
    },
  },
  {
    author: 'Sean Z.',
    rating: 5,
    long: true,
    sourceUrl: 'https://share.google/q9OjsyAkGOpaGwYt4',
    quote: {
      en: "I have had the pleasure of working with the team at S'Estepa over an extended period of time, and I am very happy with both the collaboration and the results. From the beginning, the team has shown great professionalism, commitment, and attention to detail. They have always made an effort to find the best possible solutions and to carry out the work with great care and a high standard of quality. It has been a real pleasure working with S'Estepa, and I would like to sincerely thank the entire team for their effort, support, and professionalism throughout the project. I can highly recommend S'Estepa and their entire team.",
      es: "He tenido el placer de trabajar con el equipo de S'Estepa durante un largo periodo de tiempo, y estoy muy satisfecho tanto con la colaboración como con los resultados. Desde el principio, el equipo ha mostrado un gran profesionalismo, compromiso y atención al detalle. Siempre se han esforzado por encontrar las mejores soluciones posibles y ejecutar el trabajo con mucho cuidado y un alto estándar de calidad. Ha sido un verdadero placer trabajar con S'Estepa, y quiero agradecer sinceramente a todo el equipo su esfuerzo, apoyo y profesionalidad a lo largo del proyecto. Recomiendo totalmente a S'Estepa y a todo su equipo.",
      de: "Ich hatte das Vergnügen, über einen längeren Zeitraum mit dem Team von S'Estepa zusammenzuarbeiten, und bin sehr zufrieden mit der Zusammenarbeit und den Ergebnissen. Von Anfang an zeigte das Team große Professionalität, Engagement und Liebe zum Detail. Sie haben sich stets bemüht, die bestmöglichen Lösungen zu finden und die Arbeit mit großer Sorgfalt und hohem Qualitätsanspruch auszuführen. Es war eine echte Freude, mit S'Estepa zu arbeiten, und ich möchte dem gesamten Team herzlich für ihren Einsatz, ihre Unterstützung und Professionalität während des Projekts danken. Ich kann S'Estepa und das gesamte Team sehr empfehlen.",
    },
  },
  {
    author: 'A. K.',
    rating: 5,
    long: false,
    sourceUrl: 'https://share.google/QrfUWIUQ4lW97ZULH',
    quote: {
      en: 'The team is incredibly knowledgeable and friendly, always ready to offer helpful advice. The variety of gardening services is extensive and carried out with love for detail. Highly recommended!',
      es: 'El equipo tiene un conocimiento increíble y es muy amable, siempre dispuesto a dar consejos útiles. La variedad de servicios de jardinería es muy amplia y se cuida cada detalle con cariño. ¡Muy recomendable!',
      de: 'Das Team ist unglaublich kompetent und freundlich und immer bereit, hilfreiche Ratschläge zu geben. Das Angebot an Gartenbau-Dienstleistungen ist umfangreich und wird mit viel Liebe zum Detail umgesetzt. Sehr empfehlenswert!',
    },
  },
  {
    author: 'Sibylle M.',
    rating: 5,
    long: false,
    sourceUrl: 'https://share.google/TSQa47qQzfQ0c0c9p',
    quote: {
      en: "Thanks to S'Estepa, our patio has become a balanced, peaceful place to relax. Sofia arranged, organised and looked after everything with professionalism, always available when needed — she is simply incredible. The gardeners also did an excellent job: hardworking, courteous and friendly. Thanks to the entire team at S'Estepa.",
      es: "Gracias a S'Estepa, nuestro patio se ha convertido en un lugar equilibrado y tranquilo para relajarnos. Sofía lo organizó y cuidó todo con gran profesionalidad, siempre disponible cuando la necesitamos: es sencillamente increíble. Los jardineros también hicieron un trabajo excelente, trabajadores, amables y atentos. Gracias a todo el equipo de S'Estepa.",
      de: "Dank S'Estepa ist unsere Terrasse zu einem ausgeglichenen, ruhigen Ort zum Entspannen geworden. Sofia hat alles mit viel Professionalität organisiert und betreut, immer erreichbar, wenn wir sie brauchten — sie ist einfach unglaublich. Auch die Gärtner haben hervorragende Arbeit geleistet: fleißig, freundlich und zuvorkommend. Danke an das gesamte Team von S'Estepa.",
    },
  },
  {
    author: 'S. H.',
    rating: 5,
    long: false,
    sourceUrl: 'https://share.google/jHTJgI9J7DRzqEgdx',
    quote: {
      en: "We've now had our second terrace planted and have a monthly maintenance service. We're thrilled with the personalised advice, the friendly and reliable team, and the service overall.",
      es: 'Ya hemos plantado nuestra segunda terraza y tenemos un servicio de mantenimiento mensual. Estamos encantados con el asesoramiento personalizado, el equipo amable y fiable, y el servicio en general.',
      de: 'Wir haben inzwischen die zweite Terrasse bepflanzen lassen und haben einen monatlichen Wartungs-Service. Wir sind über die individuelle Beratung, das freundliche und zuverlässige Team und den Service begeistert.',
    },
  },
] as const;

// The studio's actual Google Business Profile rating (all 18 reviews on
// Google, not just the curated ones quoted above). Confirmed live on
// google.com/maps 2026-08-13 — update by hand if it changes, don't derive
// it from `testimonials.length`, since that's a curated subset shown on
// the page, not the full review count.
export const googleRating = 4.9;
export const googleReviewCount = 18;
