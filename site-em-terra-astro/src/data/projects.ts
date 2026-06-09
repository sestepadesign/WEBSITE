export interface ProjectTranslation {
  title: string;
  subtitle: string;
  category: string;
  description: string[];
  botanical: string;
}

export interface Project {
  slug: string;
  location: string;
  year: string;
  architect: string | null;
  video: string | null;
  cover: string;
  images: string[];
  en: ProjectTranslation;
  es: ProjectTranslation;
  de: ProjectTranslation;
}

export const projects: Project[] = [
  {
    slug: "binissalem",
    location: "Binissalem, Mallorca",
    year: "2023",
    architect: null,
    video: null,
    cover: "/portfolio/binissalem/cover.jpg",
    images: [
      "LANDSCAPE-GARDEN-MALLORCA-SESTEPA-DESIGN-1.jpg",
      "LANDSCAPE-GARDEN-MALLORCA-SESTEPA-DESIGN-10.jpg",
      "LANDSCAPE-GARDEN-MALLORCA-SESTEPA-DESIGN-11.jpg",
      "LANDSCAPE-GARDEN-MALLORCA-SESTEPA-DESIGN-12.jpg",
      "LANDSCAPE-GARDEN-MALLORCA-SESTEPA-DESIGN-13.jpg",
      "LANDSCAPE-GARDEN-MALLORCA-SESTEPA-DESIGN-14.jpg",
      "LANDSCAPE-GARDEN-MALLORCA-SESTEPA-DESIGN-15.jpg",
      "LANDSCAPE-GARDEN-MALLORCA-SESTEPA-DESIGN-16.jpg",
      "LANDSCAPE-GARDEN-MALLORCA-SESTEPA-DESIGN-17.jpg",
      "LANDSCAPE-GARDEN-MALLORCA-SESTEPA-DESIGN-18.jpg",
      "LANDSCAPE-GARDEN-MALLORCA-SESTEPA-DESIGN-19.jpg",
      "LANDSCAPE-GARDEN-MALLORCA-SESTEPA-DESIGN-2.jpg",
      "LANDSCAPE-GARDEN-MALLORCA-SESTEPA-DESIGN-20.jpg",
      "LANDSCAPE-GARDEN-MALLORCA-SESTEPA-DESIGN-3.jpg",
      "LANDSCAPE-GARDEN-MALLORCA-SESTEPA-DESIGN-4.jpg",
      "LANDSCAPE-GARDEN-MALLORCA-SESTEPA-DESIGN-5.jpg",
      "LANDSCAPE-GARDEN-MALLORCA-SESTEPA-DESIGN-6.jpg",
      "LANDSCAPE-GARDEN-MALLORCA-SESTEPA-DESIGN-7.jpg",
      "LANDSCAPE-GARDEN-MALLORCA-SESTEPA-DESIGN-8.jpg",
      "LANDSCAPE-GARDEN-MALLORCA-SESTEPA-DESIGN-9.jpg",
      "LANDSCAPE-GARDEN-MALLORCA-SESTEPA-DESIGN.jpg"
    ],
    en: {
      title: "Binissalem Garden",
      subtitle: "Framing the Tramuntana mountain range as the true protagonist",
      category: "Residential Garden",
      botanical: "Yucca elephantipes, Stipa tenuissima, Festuca glauca",
      description: [
        "This garden frames the Serra de Tramuntana as its true protagonist, blending color, movement, and open spaces to create a serene, contemplative Mediterranean landscape.",
        "The design is structured around two main planting lines that preserve the memory of the former orange grove while maintaining unobstructed views from the residence.",
        "At the heart of the design, a dedicated rest area is enveloped by ornamental grasses and structural Yuccas, creating a perfect space where wind, light, and vegetation converge."
      ]
    },
    es: {
      title: "Jardín Binissalem",
      subtitle: "Enmarcando la Serra de Tramuntana como la verdadera protagonista",
      category: "Jardín Residencial",
      botanical: "Yucca elephantipes, Stipa tenuissima, Festuca glauca",
      description: [
        "Este jardín enmarca la Serra de Tramuntana como su verdadera protagonista, combinando color, movimiento y espacios abiertos para crear un paisaje mediterráneo sereno y contemplativo.",
        "El diseño se estructura en torno a dos líneas principales de plantación que preservan la memoria del antiguo huerto de naranjos, manteniendo despejadas las vistas desde la vivienda.",
        "En el corazón del diseño, una zona de descanso dedicada queda envuelta por gramíneas ornamentales y Yuccas estructurales, creando un espacio perfecto donde convergen el viento, la luz y la vegetación."
      ]
    },
    de: {
      title: "Garten Binissalem",
      subtitle: "Die Tramuntana-Bergkette als wahre Protagonistin einrahmen",
      category: "Wohnbereich Garten",
      botanical: "Yucca elephantipes, Stipa tenuissima, Festuca glauca",
      description: [
        "Dieser Garten rahmt die Serra de Tramuntana als seine wahre Protagonistin ein und verbindet Farbe, Bewegung und offene Räume zu einer heiteren, kontemplativen mediterranen Landschaft.",
        "Der Entwurf ist um zwei Hauptpflanzlinien herum strukturiert, die die Erinnerung an den ehemaligen Orangenhain bewahren und gleichzeitig einen ungehinderten Blick vom Wohnhaus ermöglichen.",
        "Im Herzen des Gartens befindet sich ein eigener Ruhebereich, der von Ziergräsern und strukturellen Yuccas umgeben ist und einen perfekten Ort schafft, an dem Wind, Licht und Vegetation zusammenkommen."
      ]
    }
  },
  {
    slug: "bunyola",
    location: "Bunyola, Mallorca",
    year: "2022",
    architect: null,
    video: null,
    cover: "/portfolio/bunyola/cover.jpg",
    images: [
      "BUNYOLA-2D-SESTEPA-DESIGN-MALLORCA.png",
      "BUNYOLA-MALLORCA-SESTEPA-LANDSCAPE-GARDEN-DESIGN-1.jpg",
      "BUNYOLA-MALLORCA-SESTEPA-LANDSCAPE-GARDEN-DESIGN-2.jpg",
      "BUNYOLA-MALLORCA-SESTEPA-LANDSCAPE-GARDEN-DESIGN.jpg"
    ],
    en: {
      title: "Bunyola Terraces",
      subtitle: "Order and rhythm navigating a steep topography",
      category: "Residential Garden",
      botanical: "Pittosporum tobira nana, Stipa tenuissima, Festuca glauca, Aptenia cordifolia",
      description: [
        "This garden is structured around a strong articulation of the site’s level changes, achieved through natural stone staircases and retaining walls that define pathways and seating areas.",
        "The wide, simply traced steps create a main circulation axis that connects the entrance level with the upper terraces, while lateral plinths and raised beds serve a dual purpose: containing the soil and accommodating plantings that soften the transition between planes.",
        "In the elevated planters flanking the stairs, species adapted to Mallorca’s dry climate prioritizing low water consumption have been combined, adding chromatic dynamism and texture throughout the year."
      ]
    },
    es: {
      title: "Terrazas de Bunyola",
      subtitle: "Orden y ritmo navegando por una topografía escarpada",
      category: "Jardín Residencial",
      botanical: "Pittosporum tobira nana, Stipa tenuissima, Festuca glauca, Aptenia cordifolia",
      description: [
        "Este jardín se estructura en torno a una marcada articulación de los desniveles del terreno, mediante escaleras de piedra natural y muros de contención que definen caminos y zonas de estar.",
        "Los escalones, de trazo amplio y sencillo, crean un eje de circulación principal que conecta el nivel de entrada con las terrazas superiores, mientras que los plintos laterales y bancales elevados cumplen una doble función: contener la tierra y albergar plantas que suavizan la transición entre planos.",
        "En las jardineras elevadas que flanquean la escalera se combinan especies adaptadas al clima seco de Mallorca que priorizan el bajo consumo de agua, aportando dinamismo cromático y textura durante todo el año."
      ]
    },
    de: {
      title: "Terrassen von Bunyola",
      subtitle: "Ordnung und Rhythmus in steiler Topographie",
      category: "Wohnbereich Garten",
      botanical: "Pittosporum tobira nana, Stipa tenuissima, Festuca glauca, Aptenia cordifolia",
      description: [
        "Dieser Garten ist um eine ausgeprägte Gliederung der Höhenunterschiede des Geländes herum strukturiert, erreicht durch Natursteintreppen und Stützmauern, die Wege und Sitzbereiche definieren.",
        "Die breiten, einfach gestalteten Stufen bilden eine Hauptverkehrsachse, die den Eingangsbereich mit den oberen Terrassen verbindet, während seitliche Sockel und Hochbeete einen doppelten Zweck erfüllen: das Erdreich zu stützen und Bepflanzungen aufzunehmen, die den Übergang abmildern.",
        "In den Hochbeeten flankierend zur Treppe wurden an das trockene Klima Mallorcas angepasste Pflanzenarten kombiniert, die einen geringen Wasserverbrauch aufweisen und das ganze Jahr über chromatische Dynamik und Textur bieten."
      ]
    }
  },
  {
    slug: "campanet",
    location: "Campanet, Mallorca",
    year: "2023",
    architect: null,
    video: null,
    cover: "/portfolio/campanet/cover.jpg",
    images: [
      "garden-design-mallorca-landscape-design-sestepa-campanet-1.jpg",
      "garden-design-mallorca-landscape-design-sestepa-campanet-2.jpg",
      "garden-design-mallorca-landscape-design-sestepa-campanet-3.jpg",
      "garden-design-mallorca-landscape-design-sestepa-campanet-4.jpg",
      "garden-design-mallorca-landscape-design-sestepa-campanet-6.jpg",
      "garden-design-mallorca-landscape-design-sestepa-campanet-7.jpg"
    ],
    en: {
      title: "Campanet Sanctuary",
      subtitle: "A silent retreat facing the foothills of the Tramuntana",
      category: "Residential Garden",
      botanical: "Olea europaea, Stipa tenuissima, Rosmarinus officinalis, Lavandula dentata",
      description: [
        "Designed in natural harmony with the Mallorcan landscape, this garden serves as a private retreat shaped by nature's rhythm.",
        "By utilizing endemic species and traditional dry-stone elements, we established a seamless visual connection to the surrounding mountains, preserving the rustic soul of the original estate.",
        "The plant selection emphasizes wild textures and drought tolerance, allowing the garden to mature gracefully with minimal intervention."
      ]
    },
    es: {
      title: "Santuario de Campanet",
      subtitle: "Un refugio silencioso frente a las faldas de la Tramuntana",
      category: "Jardín Residencial",
      botanical: "Olea europaea, Stipa tenuissima, Rosmarinus officinalis, Lavandula dentata",
      description: [
        "Diseñado en armonía natural con el paisaje mallorquín, este jardín sirve como un refugio privado moldeado por el ritmo de la naturaleza.",
        "Mediante el uso de especies endémicas y elementos tradicionales de piedra en seco, establecemos una conexión visual fluida con las montañas circundantes, preservando el alma rústica de la finca original.",
        "La selección de plantas destaca las texturas silvestres y la tolerancia a la sequía, permitiendo que el jardín madure con gracia con la mínima intervención."
      ]
    },
    de: {
      title: "Zufluchtsort Campanet",
      subtitle: "Ein stiller Rückzugsort an den Ausläufern der Tramuntana",
      category: "Wohnbereich Garten",
      botanical: "Olea europaea, Stipa tenuissima, Rosmarinus officinalis, Lavandula dentata",
      description: [
        "In natürlicher Harmonie mit der mallorquinischen Landschaft entworfen, dient dieser Garten als privater Rückzugsort, der vom Rhythmus der Natur geprägt ist.",
        "Durch die Verwendung einheimischer Arten und traditioneller Trockensteinelemente haben wir eine nahtlose visuelle Verbindung zu den umliegenden Bergen hergestellt und die rustikale Seele des ursprünglichen Anwesens bewahrt.",
        "Die Pflanzenauswahl betont wilde Texturen und Trockenheitsresistenz, sodass der Garten mit minimalem Aufwand anmutig reifen kann."
      ]
    }
  },
  {
    slug: "campos",
    location: "Campos, Mallorca",
    year: "2021",
    architect: null,
    video: "https://www.youtube.com/embed/McyZviXDxhc?feature=oembed",
    cover: "/portfolio/campos/cover.webp",
    images: [
      "GARDEN-LANDSCAPE-DESIGN-MALLORCA-SESTEPA-DESIGN-JARDINES-1.jpg",
      "GARDEN-LANDSCAPE-DESIGN-MALLORCA-SESTEPA-DESIGN-JARDINES-10.jpg",
      "GARDEN-LANDSCAPE-DESIGN-MALLORCA-SESTEPA-DESIGN-JARDINES-11.jpg",
      "GARDEN-LANDSCAPE-DESIGN-MALLORCA-SESTEPA-DESIGN-JARDINES-12.jpg",
      "GARDEN-LANDSCAPE-DESIGN-MALLORCA-SESTEPA-DESIGN-JARDINES-13.jpg",
      "GARDEN-LANDSCAPE-DESIGN-MALLORCA-SESTEPA-DESIGN-JARDINES-14.jpg",
      "GARDEN-LANDSCAPE-DESIGN-MALLORCA-SESTEPA-DESIGN-JARDINES-22.webp",
      "GARDEN-LANDSCAPE-DESIGN-MALLORCA-SESTEPA-DESIGN-JARDINES-4.jpg",
      "GARDEN-LANDSCAPE-DESIGN-MALLORCA-SESTEPA-DESIGN-JARDINES-5.jpg",
      "GARDEN-LANDSCAPE-DESIGN-MALLORCA-SESTEPA-DESIGN-JARDINES-6.jpg",
      "GARDEN-LANDSCAPE-DESIGN-MALLORCA-SESTEPA-DESIGN-JARDINES-7.jpg",
      "GARDEN-LANDSCAPE-DESIGN-MALLORCA-SESTEPA-DESIGN-JARDINES-8.jpg",
      "GARDEN-LANDSCAPE-DESIGN-MALLORCA-SESTEPA-DESIGN-JARDINES-9.jpg",
      "finca-garden-campos-sestepa-design-landscaper-mallorca-20.jpg",
      "finca-garden-campos-sestepa-design-landscaper-mallorca-22.jpg",
      "finca-garden-campos-sestepa-design-landscaper-mallorca-23.jpg",
      "finca-garden-campos-sestepa-design-landscaper-mallorca-28.jpg"
    ],
    en: {
      title: "Finca Garden Campos",
      subtitle: "A majestic 10,000 m2 landscape blending geometry and wild nature",
      category: "Estate Garden",
      botanical: "Lippia nodiflora, Phytolacca dioica (Bellasombra), Gaura lindheimeri, Stipa tenuissima, Agapanthus praecox, Bougainvillea spectabilis",
      description: [
        "Finca Garden Campos is an expansive 10,000 m² landscape where structured mathematical grids gracefully transition into wild, organic environments.",
        "The journey begins with symmetrical pathways of low-growing Lippia nodiflora that lead toward a majestic, sculptural Bellasombra tree. Closer to the main house, an elevated gravel garden serves as a vibrant botanical carpet, offering long-distance views across the landscape.",
        "Further into the estate, a reed-like grass garden featuring Stipa and Gaura sways like a natural meadow, while hidden plant tunnels and dense green buffers provide a sense of discoverable wonder and absolute privacy."
      ]
    },
    es: {
      title: "Finca Jardín Campos",
      subtitle: "Un majestuoso paisaje de 10.000 m² que une la geometría y la naturaleza salvaje",
      category: "Jardín de Finca",
      botanical: "Lippia nodiflora, Phytolacca dioica (Bellasombra), Gaura lindheimeri, Stipa tenuissima, Agapanthus praecox, Bougainvillea spectabilis",
      description: [
        "Finca Jardín Campos es un extenso paisaje de 10.000 m² donde las cuadrículas geométricas estructuradas dan paso a entornos orgánicos y silvestres.",
        "El recorrido se inicia con senderos simétricos de tapizante Lippia nodiflora que conducen a un majestuoso y escultural árbol de Bellasombra. Junto a la casa principal, un jardín de grava elevado funciona como una alfombra botánica que permite contemplar todo el paisaje.",
        "Más adentro en la finca, un jardín de gramíneas con Stipa y Gaura oscila como una pradera natural, mientras que túneles vegetales ocultos y densas pantallas verdes aportan una sensación de descubrimiento y absoluta privacidad."
      ]
    },
    de: {
      title: "Finca Garten Campos",
      subtitle: "Eine majestätische 10.000 m² große Landschaft, die Geometrie und wilde Natur vereint",
      category: "Landgut Garten",
      botanical: "Lippia nodiflora, Phytolacca dioica (Bellasombra), Gaura lindheimeri, Stipa tenuissima, Agapanthus praecox, Bougainvillea spectabilis",
      description: [
        "Der Finca-Garten Campos ist eine weitläufige, 10.000 m² große Landschaft, in der strukturierte geometrische Raster elegant in wilde, organische Umgebungen übergehen.",
        "Die Reise beginnt mit symmetrischen Pfaden aus kriechendem Lippia nodiflora, die zu einem majestätischen, skulpturalen Bellasombra-Baum führen. Neben dem Haupthaus dient ein erhöhter Kiesgarten als lebendiger botanischer Teppich, der weite Ausblicke über die Landschaft bietet.",
        "Weiter im Inneren des Anwesens wiegt sich ein schilfartiger Grasgarten aus Stipa und Gaura wie eine natürliche Wiese, während versteckte Pflanzentunnel und dichte grüne Puffer ein Gefühl von entdeckenswerter Schönheit und absoluter Privatsphäre vermitteln."
      ]
    }
  },
  {
    slug: "costadelacalma",
    location: "Costa de la Calma, Calvià",
    year: "2022",
    architect: null,
    video: null,
    cover: "/portfolio/costadelacalma/cover.jpg",
    images: [
      "JARDIN-COSTA-DE-LA-CALMA-FABRICE-SESTEPA-GARDEN-DESIGN-_1_.webp",
      "JARDIN-COSTA-DE-LA-CALMA-FABRICE-SESTEPA-GARDEN-DESIGN-_2_.webp",
      "JARDIN-COSTA-DE-LA-CALMA-FABRICE-SESTEPA-GARDEN-DESIGN-_3_.webp",
      "JARDIN-COSTA-DE-LA-CALMA-FABRICE-SESTEPA-GARDEN-DESIGN-_4_.webp",
      "JARDIN-COSTA-DE-LA-CALMA-FABRICE-SESTEPA-GARDEN-DESIGN-_5_.webp",
      "JARDIN-COSTA-DE-LA-CALMA-FABRICE-SESTEPA-GARDEN-DESIGN-_6_.webp",
      "garden-design-costa-de-la-calma-mallorca-landscape-design-sestepa.jpg"
    ],
    en: {
      title: "Costa de la Calma Zen",
      subtitle: "A tropical and serene atmosphere celebrating texture and privacy",
      category: "Residential Garden",
      botanical: "Bambusa vulgaris, Strelitzia nicolai, Phormium tenax variegata, Phoenix dactylifera",
      description: [
        "Located in Costa de la Calma, this garden harmoniously combines tropical-inspired plants and natural elements to achieve a serene, Zen-like atmosphere.",
        "The design features architectural lines of bamboo along the boundaries, which not only serve an aesthetic purpose but also provide natural acoustic dampening and complete visual privacy from neighboring properties.",
        "In the central planters, the bold foliage of Strelitzia augusta and variegated Phormiums creates a striking interplay of textures and golden-green tones that complement the mature, preserved palms."
      ]
    },
    es: {
      title: "Costa de la Calma Zen",
      subtitle: "Una atmósfera tropical y serena que celebra la textura y la privacidad",
      category: "Jardín Residencial",
      botanical: "Bambusa vulgaris, Strelitzia nicolai, Phormium tenax variegata, Phoenix dactylifera",
      description: [
        "Situado en Costa de la Calma, este jardín combina armoniosamente plantas de inspiración tropical y elementos naturales para lograr una atmósfera Zen y serena.",
        "El diseño incorpora líneas arquitectónicas de bambú en los límites de la propiedad, que no solo cumplen un fin estético, sino que también actúan como barrera acústica y visual natural frente a las viviendas colindantes.",
        "En las jardineras centrales, el follaje escultural de Strelitzia augusta y Phormiums variegados crea un juego vibrante de texturas y tonos verde-dorados que complementan las palmeras adultas preservadas."
      ]
    },
    de: {
      title: "Costa de la Calma Zen",
      subtitle: "Eine tropische und heitere Atmosphäre, die Textur und Privatsphäre zelebriert",
      category: "Wohnbereich Garten",
      botanical: "Bambusa vulgaris, Strelitzia nicolai, Phormium tenax variegata, Phoenix dactylifera",
      description: [
        "In Costa de la Calma gelegen, verbindet dieser Garten harmonisch tropisch inspirierte Pflanzen und natürliche Elemente, um eine ruhige, Zen-ähnliche Atmosphäre zu schaffen.",
        "Der Entwurf zeichnet sich durch architektonische Bambuslinien entlang der Grundstücksgrenzen aus, die nicht nur einen ästhetischen Zweck erfüllen, sondern auch eine natürliche Schalldämpfung und vollständige Privatsphäre bieten.",
        "In den zentralen Pflanzkübeln sorgt das kräftige Laub von Strelitzia augusta und buntblättrigem Phormium für ein markantes Zusammenspiel von Texturen und grüngoldenen Tönen, die die erhaltenen Palmen ergänzen."
      ]
    }
  },
  {
    slug: "crestatx",
    location: "Crestatx, Sa Pobla",
    year: "2023",
    architect: null,
    video: "https://www.youtube.com/embed/-xs_kKaUnGA?feature=oembed",
    cover: "/portfolio/crestatx/cover.webp",
    images: [
      "2D_Crestatx_SEstepa_Design_960-2.jpg",
      "2D_Crestatx_SEstepa_Design_960.jpg",
      "3D_Plan_Crestatx_SEstepa_Design-1.jpg",
      "3D_Plan_Crestatx_SEstepa_Design-2.jpg",
      "GARDEN-DESIGN-MALLORCA-CRESTATX-SESTEPA-LANDSCAPE-DESIGN-1.jpg",
      "GARDEN-DESIGN-MALLORCA-CRESTATX-SESTEPA-LANDSCAPE-DESIGN-10.jpg",
      "GARDEN-DESIGN-MALLORCA-CRESTATX-SESTEPA-LANDSCAPE-DESIGN-11.jpg",
      "GARDEN-DESIGN-MALLORCA-CRESTATX-SESTEPA-LANDSCAPE-DESIGN-12.jpg",
      "GARDEN-DESIGN-MALLORCA-CRESTATX-SESTEPA-LANDSCAPE-DESIGN-13.jpg",
      "GARDEN-DESIGN-MALLORCA-CRESTATX-SESTEPA-LANDSCAPE-DESIGN-14.jpg",
      "GARDEN-DESIGN-MALLORCA-CRESTATX-SESTEPA-LANDSCAPE-DESIGN-15.jpg",
      "GARDEN-DESIGN-MALLORCA-CRESTATX-SESTEPA-LANDSCAPE-DESIGN-16.jpg",
      "GARDEN-DESIGN-MALLORCA-CRESTATX-SESTEPA-LANDSCAPE-DESIGN-17.jpg",
      "GARDEN-DESIGN-MALLORCA-CRESTATX-SESTEPA-LANDSCAPE-DESIGN-18.jpg",
      "GARDEN-DESIGN-MALLORCA-CRESTATX-SESTEPA-LANDSCAPE-DESIGN-19.jpg",
      "GARDEN-DESIGN-MALLORCA-CRESTATX-SESTEPA-LANDSCAPE-DESIGN-2.jpg",
      "GARDEN-DESIGN-MALLORCA-CRESTATX-SESTEPA-LANDSCAPE-DESIGN-20.jpg",
      "GARDEN-DESIGN-MALLORCA-CRESTATX-SESTEPA-LANDSCAPE-DESIGN-21.jpg",
      "GARDEN-DESIGN-MALLORCA-CRESTATX-SESTEPA-LANDSCAPE-DESIGN-22.jpg",
      "GARDEN-DESIGN-MALLORCA-CRESTATX-SESTEPA-LANDSCAPE-DESIGN-23.jpg",
      "GARDEN-DESIGN-MALLORCA-CRESTATX-SESTEPA-LANDSCAPE-DESIGN-3.jpg",
      "GARDEN-DESIGN-MALLORCA-CRESTATX-SESTEPA-LANDSCAPE-DESIGN-4.jpg",
      "GARDEN-DESIGN-MALLORCA-CRESTATX-SESTEPA-LANDSCAPE-DESIGN-5.jpg",
      "GARDEN-DESIGN-MALLORCA-CRESTATX-SESTEPA-LANDSCAPE-DESIGN-6.jpg",
      "GARDEN-DESIGN-MALLORCA-CRESTATX-SESTEPA-LANDSCAPE-DESIGN-7.jpg",
      "GARDEN-DESIGN-MALLORCA-CRESTATX-SESTEPA-LANDSCAPE-DESIGN-8.jpg",
      "GARDEN-DESIGN-MALLORCA-CRESTATX-SESTEPA-LANDSCAPE-DESIGN-9.jpg",
      "GARDEN-LANDSCAPE-DESIGN-MALLORCA-SESTEPA-DESIGN-JARDINES-1.webp"
    ],
    en: {
      title: "Crestatx Transformation",
      subtitle: "A modern, water-conscious garden replacing lawn with rich mineral layers",
      category: "Sustainable Garden",
      botanical: "Cycas revoluta, Strelitzia reginae, Salvia rosmarinus, Pittosporum tobira, Agapanthus praecox, Ophiopogon japonicus",
      description: [
        "In the Crestatx garden, we executed a complete environmental transformation by replacing the water-demanding lawn with a sustainable, dry-gravel design structured with river stones.",
        "The entrance greets visitors with dynamic lines of wild grasses and aromatic salvias. Surrounding the pool area, a lush, tropical-inspired plant palette featuring Cycads, Strelitzias, and Pittosporum creates a fresh oasis.",
        "In the shaded rear sections, custom corten steel borders frame woodland islands planted with Myrtles, Agapanthus, and Ophiopogon, ensuring a clear division of light and texture."
      ]
    },
    es: {
      title: "Transformación Crestatx",
      subtitle: "Un jardín moderno y de bajo consumo hídrico que sustituye el césped por capas minerales",
      category: "Jardín Sostenible",
      botanical: "Cycas revoluta, Strelitzia reginae, Salvia rosmarinus, Pittosporum tobira, Agapanthus praecox, Ophiopogon japonicus",
      description: [
        "En el jardín de Crestatx llevamos a cabo una transformación ambiental completa, sustituyendo el césped por un diseño de grava seca y cantos rodados que facilitan la circulación y ahorran agua.",
        "La entrada recibe a los visitantes con líneas dinámicas de gramíneas y salvias aromáticas, mientras que la zona de la piscina se envuelve en una paleta exuberante de inspiración tropical con Cicas, Estrelitzias y Pitosporos.",
        "En la zona trasera sombreada, bordes de acero corten enmarcan islas boscosas plantadas con mirtos, agapantos y ophiopogon, definiendo con elegancia los juegos de luz y sombra."
      ]
    },
    de: {
      title: "Umgestaltung Crestatx",
      subtitle: "Ein moderner, wassersparender Garten, der den Rasen durch reichhaltige Mineralschichten ersetzt",
      category: "Nachhaltiger Garten",
      botanical: "Cycas revoluta, Strelitzia reginae, Salvia rosmarinus, Pittosporum tobira, Agapanthus praecox, Ophiopogon japonicus",
      description: [
        "Im Garten von Crestatx haben wir eine vollständige ökologische Umgestaltung vorgenistet, indem wir den wasserintensiven Rasen durch einen nachhaltigen Trockenkiesgarten mit Flusskieseln ersetzt haben.",
        "Der Eingang empfängt Besucher mit dynamischen Linien aus Wildgräsern und aromatischen Salbeipflanzen. Rund um den Poolbereich sorgt eine üppige, tropisch inspirierte Pflanzenpalette aus Cycas, Strelitzien und Pittosporum für eine frische Oase.",
        "In den schattigen hinteren Bereichen rahmen maßgeschneiderte Cortenstahlkanten Waldinseln mit Myrten, Agapanthus und Ophiopogon ein, was eine klare Trennung von Licht und Textur gewährleistet."
      ]
    }
  },
  {
    slug: "hotelcabotlasvelas",
    location: "Puerto Pollença, Mallorca",
    year: "2022",
    architect: null,
    video: null,
    cover: "/portfolio/hotelcabotlasvelas/cover.webp",
    images: [
      "CABOT-LAS-VELAS-HOTEL-SESTEPA-DESIGN-MALLORCA-1.webp",
      "CABOT-LAS-VELAS-HOTEL-SESTEPA-DESIGN-MALLORCA-2.webp",
      "CABOT-LAS-VELAS-HOTEL-SESTEPA-DESIGN-MALLORCA-_4_.webp",
      "CABOT-LAS-VELAS-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-1500-1.jpg",
      "CABOT-LAS-VELAS-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-1500-10.jpg",
      "CABOT-LAS-VELAS-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-1500-11.jpg",
      "CABOT-LAS-VELAS-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-1500-12.jpg",
      "CABOT-LAS-VELAS-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-1500-13.jpg",
      "CABOT-LAS-VELAS-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-1500-2.jpg",
      "CABOT-LAS-VELAS-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-1500-3.jpg",
      "CABOT-LAS-VELAS-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-1500-5-1.jpg",
      "CABOT-LAS-VELAS-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-1500-6.jpg",
      "CABOT-LAS-VELAS-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-1500-8.jpg",
      "CABOT-LAS-VELAS-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-1500-9.jpg",
      "HOTEL-CABOT-LAS-VELAS-SESTEPA-GARDEN-DESIGN-MALLORCA-15.jpg"
    ],
    en: {
      title: "Hotel Cabot Las Velas",
      subtitle: "A low-lying mineral oasis optimized for expansive panoramic views",
      category: "Commercial Landscape",
      botanical: "Chamaerops humilis, Agave attenuata, Lavandula angustifolia, Rosmarinus prostratus, Stipa tenuissima, Agapanthus praecox, Pistacia lentiscus",
      description: [
        "In the gardens of Hotel Cabot Las Velas, we completely reimagined the communal space, replacing the old hedges and grass with a clean, low-maintenance layer of rich volcanic gravel.",
        "To achieve a visual rhythm, we designed strategic clusters of ground-covering plants like lavender, prostrate rosemary, stipa grass, and blue agapanthus, combined with structural dwarf palms (Chamaerops humilis) and exotic Agave attenuata.",
        "We intentionally restricted the height of the plantings to preserve completely open, unobstructed views of the pool and mountain scenery from any window, transforming a previously cramped environment into a spacious, elegant retreat."
      ]
    },
    es: {
      title: "Hotel Cabot Las Velas",
      subtitle: "Un oasis mineral de baja altura optimizado para vistas panorámicas amplias",
      category: "Paisajismo Comercial",
      botanical: "Chamaerops humilis, Agave attenuata, Lavandula angustifolia, Rosmarinus prostratus, Stipa tenuissima, Agapanthus praecox, Pistacia lentiscus",
      description: [
        "En los jardines del Hotel Cabot Las Velas replanteamos por completo el espacio común, sustituyendo los antiguos setos y praderas por una capa limpia de grava volcánica de bajo mantenimiento.",
        "Para lograr un ritmo visual, diseñamos agrupaciones estratégicas de plantas tapizantes como lavanda, romero postrado, estipa y agapantos, combinadas con palmeras enanas estructurantes (Chamaerops humilis) y exóticos Agave attenuata.",
        "Evitamos intencionadamente el uso de plantas altas para preservar vistas despejadas de la piscina y el entorno desde cualquier punto, transformando un espacio que antes se sentía estrecho en un refugio amplio y elegante."
      ]
    },
    de: {
      title: "Hotel Cabot Las Velas",
      subtitle: "Eine flache mineralische Oase, optimiert für weite Panoramablicke",
      category: "Gewerbliche Landschaft",
      botanical: "Chamaerops humilis, Agave attenuata, Lavandula angustifolia, Rosmarinus prostratus, Stipa tenuissima, Agapanthus praecox, Pistacia lentiscus",
      description: [
        "In den Gärten des Hotels Cabot Las Velas haben wir den Gemeinschaftsbereich komplett neu gestaltet und die alten Hecken und Rasenflächen durch eine saubere, pflegeleichte Schicht aus reichem Vulkankies ersetzt.",
        "Um einen visuellen Rhythmus zu erzielen, haben wir strategische Gruppen von bodendeckenden Pflanzen wie Lavendel, kriechendem Rosmarin, Stipa-Gras und blauem Agapanthus entworfen, kombiniert mit strukturellen Zwergpalmen und exotischer Agave attenuata.",
        "Wir haben bewusst auf hohe Pflanzen verzichtet, um von jedem Punkt aus einen völlig freien Blick auf den Pool und die Berge zu gewährleisten, was die zuvor enge Umgebung in einen weitläufigen, eleganten Rückzugsort verwandelte."
      ]
    }
  },
  {
    slug: "llubi",
    location: "Llubí, Mallorca",
    year: "2023",
    architect: null,
    video: null,
    cover: "/portfolio/llubi/cover.webp",
    images: [
      "GARDEN-DESIGN-MALLORCA-LLUBI-SESTEPA-LANDSCAPE-DESIGN-1.png",
      "GARDEN-DESIGN-MALLORCA-LLUBI-SESTEPA-LANDSCAPE-DESIGN-3.png",
      "GARDEN-DESIGN-MALLORCA-LLUBI-SESTEPA-LANDSCAPE-DESIGN-5.png",
      "GARDEN-DESIGN-MALLORCA-LLUBI-SESTEPA-LANDSCAPE-DESIGN-6.png",
      "GARDEN-DESIGN-MALLORCA-LLUBI-SESTEPA-LANDSCAPE-DESIGN-8.png",
      "LLUBI-GARDEN-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-1.webp",
      "LLUBI-GARDEN-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-10.webp",
      "LLUBI-GARDEN-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-11.webp",
      "LLUBI-GARDEN-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-12.webp",
      "LLUBI-GARDEN-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-13.webp",
      "LLUBI-GARDEN-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-14.webp",
      "LLUBI-GARDEN-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-15.webp",
      "LLUBI-GARDEN-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-16.webp",
      "LLUBI-GARDEN-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-17.webp",
      "LLUBI-GARDEN-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-2.webp",
      "LLUBI-GARDEN-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-3.webp",
      "LLUBI-GARDEN-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-4.webp",
      "LLUBI-GARDEN-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-5.webp",
      "LLUBI-GARDEN-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-6.webp",
      "LLUBI-GARDEN-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-7.webp",
      "LLUBI-GARDEN-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-8.webp",
      "LLUBI-GARDEN-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-9.webp",
      "LLUBI-GARDEN-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-_18_.webp",
      "LLUBI-GARDEN-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-_19_.webp",
      "LLUBI-GARDEN-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-_20_.webp",
      "LLUBI-GARDEN-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-_21_.webp",
      "LLUBI-GARDEN-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-_22_.webp",
      "LLUBI-GARDEN-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-_23_.webp",
      "LLUBI-GARDEN-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-_24_.webp"
    ],
    en: {
      title: "Llubí Wild Garden",
      subtitle: "A low-maintenance country escape structured with wildflowers and fire",
      category: "Residential Garden",
      botanical: "Jacaranda mimosifolia, Salvia rosmarinus, Lavandula dentata, Wildflowers",
      description: [
        "In the Llubí garden, the focus was to build a water-conserving, low-maintenance design that respects the open rural landscape of Mallorca's interior.",
        "We laid a large gravel expanse stabilized near the house to create seamless outdoor dining zones, breaking the visual plane with five long, narrow islands of rosemary and lavender.",
        "At the center, a firepit is surrounded by three young Jacaranda trees that will grow to provide a canopy of purple flowers and natural shade. Sown wildflowers colonize the boundaries, reinforcing the wild, natural spirit of the space."
      ]
    },
    es: {
      title: "Jardín Silvestre Llubí",
      subtitle: "Un escape de campo de bajo mantenimiento estructurado con flores silvestres y fuego",
      category: "Jardín Residencial",
      botanical: "Jacaranda mimosifolia, Salvia rosmarinus, Lavandula dentata, Flores Silvestres",
      description: [
        "En el jardín de Llubí, el enfoque principal fue construir un diseño de bajo mantenimiento y conservación de agua que respete el paisaje abierto del interior de Mallorca.",
        "Instalamos una amplia extensión de grava con estabilizadores cerca de la casa para crear zonas fluidas de comedor exterior, rompiendo la monotonía mineral con cinco islas alargadas de romero y lavanda.",
        "En el centro, una zona de fuego se rodea de tres Jacarandas que crecerán para proporcionar sombra natural y floración violeta. Flores silvestres sembradas colonizan los bordes, reforzando el espíritu natural y libre del espacio."
      ]
    },
    de: {
      title: "Wildgarten Llubí",
      subtitle: "Ein pflegeleichter Rückzugsort auf dem Land mit Wildblumen und Feuerstelle",
      category: "Wohnbereich Garten",
      botanical: "Jacaranda mimosifolia, Salvia rosmarinus, Lavandula dentata, Wildblumen",
      description: [
        "Im Garten von Llubí lag der Schwerpunkt auf dem Entwurf eines wassersparenden, pflegeleichten Konzepts, das die offene ländliche Landschaft im Landesinneren Mallorcas respektiert.",
        "Wir haben eine große Kiesfläche angelegt, die in Hausnähe stabilisiert wurde, um fließende Essbereiche im Freien zu schaffen, und die visuelle Ebene durch fünf lange, schmale Inseln aus Rosmarin und Lavendel unterbrochen.",
        "Im Zentrum befindet sich eine Feuerstelle, umgeben von drei jungen Jacaranda-Bäumen, die heranwachsen werden, um ein Dach aus violetten Blüten und natürlichen Schatten zu spenden. Ausgesäte Wildblumen besiedeln die Ränder und verstärken den wilden, natürlichen Geist des Ortes."
      ]
    }
  },
  {
    slug: "sant-llorenc",
    location: "Sant Llorenç, Mallorca",
    year: "2023",
    architect: null,
    video: "https://www.youtube.com/embed/IdGlxUKjhUQ?feature=oembed",
    cover: "/portfolio/sant-llorenc/cover.jpg",
    images: [
      "landscape-garden-design-mallorca-sestepa-landscape-design-sant-llorenc-01.jpg",
      "landscape-garden-design-mallorca-sestepa-landscape-design-sant-llorenc-02.jpg",
      "landscape-garden-design-mallorca-sestepa-landscape-design-sant-llorenc-03.jpg",
      "landscape-garden-design-mallorca-sestepa-landscape-design-sant-llorenc-04.jpg",
      "landscape-garden-design-mallorca-sestepa-landscape-design-sant-llorenc-05.jpg",
      "landscape-garden-design-mallorca-sestepa-landscape-design-sant-llorenc-06.jpg",
      "landscape-garden-design-mallorca-sestepa-landscape-design-sant-llorenc-07.jpg",
      "landscape-garden-design-mallorca-sestepa-landscape-design-sant-llorenc-08.jpg",
      "landscape-garden-design-mallorca-sestepa-landscape-design-sant-llorenc-09.jpg",
      "landscape-garden-design-mallorca-sestepa-landscape-design-sant-llorenc-10.jpg",
      "landscape-garden-design-mallorca-sestepa-landscape-design-sant-llorenc-11.jpg",
      "landscape-garden-design-mallorca-sestepa-landscape-design-sant-llorenc-12.jpg"
    ],
    en: {
      title: "Sant Llorenç Estate",
      subtitle: "A sustainable landscape designed as a gradual reveal",
      category: "Estate Garden",
      botanical: "Olea europaea (Centenary), Cupressus sempervirens, Rosmarinus officinalis, Stipa tenuissima, Perovskia atriplicifolia, Teucrium fruticans, Chamaerops humilis",
      description: [
        "Situated in a warm, dry region, the Sant Llorenç garden is a model of arid sustainability, utilizing drought-tolerant native plants that preserve Mallorcan identity.",
        "The design keeps the villa hidden from the main gates, allowing the architecture to appear as a surprise emerging from natural vegetation at the end of the entry path. Centenary olive trees are planted in irregular, asymmetric positions, while vertical cypresses evoke a classic Mediterranean silhouette.",
        "Around the residence, a grass garden featuring Stipa tenuissima introduces motion, so that looking through the windows, the wind creates a soft, continuous dance across the landscape."
      ]
    },
    es: {
      title: "Finca Sant Llorenç",
      subtitle: "Un paisaje sostenible diseñado como una revelación gradual",
      category: "Jardín de Finca",
      botanical: "Olea europaea (Centenario), Cupressus sempervirens, Rosmarinus officinalis, Stipa tenuissima, Perovskia atriplicifolia, Teucrium fruticans, Chamaerops humilis",
      description: [
        "Situado en una región cálida y seca, el jardín de Sant Llorenç es un modelo de sostenibilidad árida, utilizando plantas autóctonas tolerantes a la sequía que preservan la identidad mallorquina.",
        "El diseño mantiene la villa oculta desde las puertas principales, permitiendo que la arquitectura aparezca como una sorpresa que emerge de la vegetación natural al final del sendero de entrada. Olivos centenarios se plantan en posiciones irregulares y asimétricas, mientras cipreses verticales evocan una silueta mediterránea clásica.",
        "Alrededor de la residencia, un jardín de gramíneas con Stipa tenuissima introduce movimiento, de modo que al mirar a través de las ventanas, el viento crea una danza suave y continua en el paisaje."
      ]
    },
    de: {
      title: "Landgut Sant Llorenç",
      subtitle: "Eine nachhaltige Landschaft, konzipiert als allmähliche Enthüllung",
      category: "Landgut Garten",
      botanical: "Olea europaea (Centenary), Cupressus sempervirens, Rosmarinus officinalis, Stipa tenuissima, Perovskia atriplicifolia, Teucrium fruticans, Chamaerops humilis",
      description: [
        "In einer warmen, trockenen Region gelegen, ist der Garten von Sant Llorenç ein Modell für Trockenheitsresistenz, bei dem trockenheitstolerante einheimische Pflanzen verwendet werden, die die mallorquinische Identität bewahren.",
        "Der Entwurf hält die Villa von den Haupttoren aus verborgen, sodass die Architektur am Ende des Eingangspfads wie eine Überraschung aus der natürlichen Vegetation hervortritt. Hundertjährige Olivenbäume sind in unregelmäßigen, asymmetrischen Positionen gepflanzt, während vertikale Zypressen eine klassische mediterrane Silhouette hervorrufen.",
        "Rund um das Wohnhaus sorgt ein Grasgarten mit Stipa tenuissima für Bewegung, sodass der Wind beim Blick durch die Fenster einen sanften, kontinuierlichen Tanz in der Landschaft erzeugt."
      ]
    }
  },
  {
    slug: "santa-eugenia",
    location: "Santa Eugènia, Mallorca",
    year: "2023",
    architect: null,
    video: null,
    cover: "/portfolio/santa-eugenia/cover.jpg",
    images: [
      "Terrace-Garden-Santa-Eugenia-SEstepa-Design-Mallorca-1.jpg",
      "Terrace-Garden-Santa-Eugenia-SEstepa-Design-Mallorca-10.jpg",
      "Terrace-Garden-Santa-Eugenia-SEstepa-Design-Mallorca-11.jpg",
      "Terrace-Garden-Santa-Eugenia-SEstepa-Design-Mallorca-12.jpg",
      "Terrace-Garden-Santa-Eugenia-SEstepa-Design-Mallorca-2.jpg",
      "Terrace-Garden-Santa-Eugenia-SEstepa-Design-Mallorca-4.jpg",
      "Terrace-Garden-Santa-Eugenia-SEstepa-Design-Mallorca-5.jpg",
      "Terrace-Garden-Santa-Eugenia-SEstepa-Design-Mallorca-6.jpg",
      "Terrace-Garden-Santa-Eugenia-SEstepa-Design-Mallorca-7.jpg",
      "Terrace-Garden-Santa-Eugenia-SEstepa-Design-Mallorca-8.jpg",
      "Terrace-Garden-Santa-Eugenia-SEstepa-Design-Mallorca-9.jpg",
      "Terrace-Garden-Santa-Eugenia-SEstepa-Design-Mallorca.jpg"
    ],
    en: {
      title: "Santa Eugènia Terraces",
      subtitle: "Softening contemporary concrete with vertical greenery",
      category: "Terrace Garden",
      botanical: "Climbing Hedera, Trachelospermum jasminoides, Bougainvillea, Groundcovers",
      description: [
        "In this terrace garden in Santa Eugènia, we designed several interventions to integrate dense vegetation and soften the presence of the villa's predominant concrete architecture.",
        "We installed custom planters at different heights along the terrace, hosting a variety of ground-covering plants selected to wrap the soil completely and add vibrant green spots.",
        "For the 35-meter perimeter walls, we custom-built 3-meter tall iron frameworks that support climbing plants like star jasmine. This structures the growth neatly, adding vertical warmth without saturating the clean architectural design."
      ]
    },
    es: {
      title: "Terrazas de Santa Eugènia",
      subtitle: "Suavizando el hormigón contemporáneo con vegetación vertical",
      category: "Jardín de Terraza",
      botanical: "Climbing Hedera, Trachelospermum jasminoides, Bougainvillea, Tapizantes",
      description: [
        "En este jardín de terraza en Santa Eugènia, diseñamos varias intervenciones para integrar vegetación densa y suavizar la presencia de la arquitectura de hormigón predominante en la villa.",
        "Instalamos jardineras a medida a diferentes alturas a lo largo de la terraza, albergando una variedad de plantas tapizantes seleccionadas para cubrir el suelo por completo y añadir puntos verdes vibrantes.",
        "Para los muros perimetrales de 35 metros, fabricamos estructuras de hierro de 3 metros de altura que soportan plantas trepadoras como el jazmín estrellado, estructurando el crecimiento de forma limpia sin saturar el diseño arquitectónico."
      ]
    },
    de: {
      title: "Terrassen von Santa Eugènia",
      subtitle: "Zeitgenössischen Beton mit vertikalem Grün abmildern",
      category: "Terrassengarten",
      botanical: "Climbing Hedera, Trachelospermum jasminoides, Bougainvillea, Bodendecker",
      description: [
        "In diesem Terrassengarten in Santa Eugènia haben wir verschiedene Eingriffe entworfen, um dichte Vegetation zu integrieren und die Präsenz der vorherrschenden Betonarchitektur der Villa abzumildern.",
        "Wir haben maßgeschneiderte Pflanzkübel in verschiedenen Höhen entlang der Terrasse aufgestellt, die eine Vielzahl von bodendeckenden Pflanzen beherbergen, die das Erdreich vollständig bedecken und lebendige grüne Akzente setzen.",
        "Für die 35 Meter langen Außenmauern haben wir 3 Meter hohe Eisengerüste angefertigt, die Kletterpflanzen wie Sternjasmin stützen. Dies strukturiert das Wachstum sauber und sorgt für vertikale Wärme, ohne das klare architektonische Design zu überladen."
      ]
    }
  },
  {
    slug: "santa-ponsa",
    location: "Santa Ponsa, Calvià",
    year: "2023",
    architect: null,
    video: null,
    cover: "/portfolio/santa-ponsa/cover.jpg",
    images: [
      "GARDEN-DESIGN-LANDSCAPING-MALLORCA-PUIG-NA-MORISCA-SESTEPA-DESIGN-11.jpg",
      "GARDEN-DESIGN-LANDSCAPING-MALLORCA-PUIG-NA-MORISCA-SESTEPA-DESIGN-12.jpg",
      "GARDEN-DESIGN-LANDSCAPING-MALLORCA-PUIG-NA-MORISCA-SESTEPA-DESIGN-13.jpg",
      "GARDEN-DESIGN-PUIG-NA-MORISCA-SESTEPA-DESIGN-MALLORCAjpeg-1-scaled-e1747007143156-1.jpeg",
      "GARDEN-DESIGN-PUIG-NA-MORISCA-SESTEPA-DESIGN-MALLORCAjpeg-1-scaled-e1747007143156.jpeg",
      "GARDEN-DESIGN-PUIG-NA-MORISCA-SESTEPA-DESIGN-MALLORCAjpeg-4-scaled-1.jpeg",
      "GARDEN-DESIGN-PUIG-NA-MORISCA-SESTEPA-DESIGN-MALLORCAjpeg-7-scaled-1.jpeg",
      "GARDEN-DESIGN-PUIG-NA-MORISCA-SESTEPA-DESIGN-MALLORCAjpeg-9-scaled-1.jpeg",
      "landscape-garden-design-mallorca-sa-ponsa-sestepa-design-1.jpg",
      "landscape-garden-design-mallorca-sa-ponsa-sestepa-design-2.jpg",
      "landscape-garden-design-mallorca-sa-ponsa-sestepa-design-3.jpg",
      "landscape-garden-design-mallorca-sa-ponsa-sestepa-design-4.jpg",
      "landscape-garden-design-mallorca-sa-ponsa-sestepa-design-5.jpg",
      "landscape-garden-design-mallorca-sa-ponsa-sestepa-design-6.jpg",
      "landscape-garden-design-mallorca-sa-ponsa-sestepa-design-7.jpg",
      "landscape-garden-design-mallorca-sa-ponsa-sestepa-design-8.jpg",
      "landscape-garden-design-mallorca-sa-ponsa-sestepa-design-9.jpg"
    ],
    en: {
      title: "Santa Ponsa Ravine",
      subtitle: "Honoring the original contours and rocky slopes of Calvià",
      category: "Residential Garden",
      botanical: "Pistacia lentiscus, Rosmarinus officinalis, Lavandula, Mediterranean Rockeries",
      description: [
        "This project honors the natural incline of the Mallorca landscape, utilizing its original ravines and slopes as the structural foundation of the garden.",
        "By rejecting heavy land leveling in favor of stone rockeries and native plant masses, the design achieves a seamless, organic integration with the terrain.",
        "Stone elements stabilize the soil and mirror the land's contour, allowing Mediterranean vegetation to nestle organically as if it had always been part of the site."
      ]
    },
    es: {
      title: "Barranco de Santa Ponsa",
      subtitle: "Honrando los contornos originales y las laderas rocosas de Calvià",
      category: "Jardín Residencial",
      botanical: "Pistacia lentiscus, Rosmarinus officinalis, Lavandula, Rocallas Mediterráneas",
      description: [
        "Este proyecto honra la inclinación natural del paisaje de Mallorca, utilizando sus barrancos y laderas originales como base estructural del jardín.",
        "Al rechazar la nivelación agresiva del terreno en favor de rocallas de piedra y masas de plantas autóctonas, el diseño logra una integración orgánica y fluida con el entorno.",
        "Los elementos de piedra estabilizan el suelo y reflejan el contorno del terreno, permitiendo que la vegetación mediterránea se asiente de manera orgánica, como si siempre hubiera formado parte del lugar."
      ]
    },
    de: {
      title: "Schlucht von Santa Ponsa",
      subtitle: "Die ursprünglichen Konturen und felsigen Hänge von Calvià würdigen",
      category: "Wohnbereich Garten",
      botanical: "Pistacia lentiscus, Rosmarinus officinalis, Lavandula, Mediterrane Steingärten",
      description: [
        "Dieses Projekt würdigt das natürliche Gefälle der mallorquinischen Landschaft und nutzt die ursprünglichen Schluchten und Hänge als strukturelles Fundament des Gartens.",
        "Durch den Verzicht auf eine großflächige Einebnung des Geländes zugunsten von Steingärten und einheimischen Pflanzenmassen erreicht der Entwurf eine nahtlose, organische Integration in das Gelände.",
        "Steinelemente stabilisieren den Boden und spiegeln die Kontur des Landes wider, sodass sich die mediterrane Vegetation organisch einfügt, als wäre sie schon immer Teil des Ortes gewesen."
      ]
    }
  },
  {
    slug: "son-vida",
    location: "Son Vida, Palma",
    year: "2022",
    architect: null,
    video: null,
    cover: "/portfolio/son-vida/cover.jpg",
    images: [
      "GARDEN-DESIGN-MALLORCA-SESTEPA-JARDINERIA-INTEGRAL-1-1.jpg",
      "GARDEN-DESIGN-MALLORCA-SESTEPA-JARDINERIA-INTEGRAL-2-1.jpg",
      "GARDEN-DESIGN-MALLORCA-SESTEPA-JARDINERIA-INTEGRAL-3-1.jpg",
      "GARDEN-DESIGN-MALLORCA-SESTEPA-JARDINERIA-INTEGRAL-4-1.jpg",
      "GARDEN-DESIGN-MALLORCA-SESTEPA-JARDINERIA-INTEGRAL-5-1.jpg"
    ],
    en: {
      title: "Son Vida Estate",
      subtitle: "Geometric precision dialoguing with modern architecture",
      category: "Residential Garden",
      botanical: "Olea europaea, Pittosporum tobira nana, Buxus sempervirens, Phoenix canariensis",
      description: [
        "In Mallorca's most exclusive enclave, this garden aligns with the minimalist geometry of a contemporary private villa.",
        "The design features clean lines of structural green spheres and architectural palms, establishing a dialogue of light and shadow against white stone facades.",
        "By focusing on form and deep green textures, the landscape enhances the architectural lines while offering private pockets of contemplation."
      ]
    },
    es: {
      title: "Finca Son Vida",
      subtitle: "Precisión geométrica dialogando con la arquitectura moderna",
      category: "Jardín Residencial",
      botanical: "Olea europaea, Pittosporum tobira nana, Buxus sempervirens, Phoenix canariensis",
      description: [
        "En la zona más exclusiva de Mallorca, este jardín se alinea con la geometría minimalista de una villa contemporánea privada.",
        "El diseño presenta líneas limpias de esferas verdes estructurales y palmeras arquitectónicas, estableciendo un diálogo de luces y sombras contra las fachadas de piedra blanca.",
        "Al centrarse en la forma y en texturas de verde profundo, el paisaje realza las líneas arquitectónicas ofreciendo al mismo tiempo rincones privados de contemplación."
      ]
    },
    de: {
      title: "Anwesen Son Vida",
      subtitle: "Geometrische Präzision im Dialog mit moderner Architektur",
      category: "Wohnbereich Garten",
      botanical: "Olea europaea, Pittosporum tobira nana, Buxus sempervirens, Phoenix canariensis",
      description: [
        "In Mallorcas exklusivster Enklave passt sich dieser Garten der minimalistischen Geometrie einer zeitgenössischen privaten Villa an.",
        "Der Entwurf zeichnet sich durch klare Linien aus strukturellen grünen Kugeln und architektonischen Palmen aus, die einen Dialog von Licht und Schatten vor weißen Steinfassaden herstellen.",
        "Durch die Konzentration auf Form und tiefgrüne Texturen wertet die Landschaft die architektonischen Linien auf und bietet gleichzeitig private Ecken der Kontemplation."
      ]
    }
  },
  {
    slug: "terrace-garden-palma",
    location: "Palma de Mallorca",
    year: "2023",
    architect: "Contemporary Studio",
    video: "https://www.youtube.com/embed/1q1Qnh2s_mg?feature=oembed",
    cover: "/portfolio/terrace-garden-palma/cover.jpg",
    images: [
      "TERRACE-GARDEN-PALMA-MALLORCA-SESTEPA-DESIGN-1.jpg",
      "TERRACE-GARDEN-PALMA-MALLORCA-SESTEPA-DESIGN-2.jpg",
      "TERRACE-GARDEN-PALMA-MALLORCA-SESTEPA-DESIGN-3.jpg",
      "TERRACE-GARDEN-PALMA-MALLORCA-SESTEPA-DESIGN-4.jpg",
      "TERRACE-GARDEN-PALMA-MALLORCA-SESTEPA-DESIGN-5.jpg",
      "TERRACE-GARDEN-PALMA-MALLORCA-SESTEPA-DESIGN-6.jpg"
    ],
    en: {
      title: "Palma Penthouse Terrace",
      subtitle: "A high-altitude Mediterranean sanctuary resistant to wind and sun",
      category: "Terrace Garden",
      botanical: "Strelitzia nicolai, Chamaerops humilis, Phoenix roebelenii, Rhapis excelsa, Cycas revoluta, Monstera deliciosa, Columnar Cacti",
      description: [
        "Located on the top floor of a contemporary building in Palma, this terrace was transformed from a bare concrete deck into a lush, liveable garden.",
        "The design features custom linear planters that structure the lounging and dining zones without blocking the views of the city and sea. The plant selection prioritizes species resistant to heavy sun and wind, such as Strelitzia nicolai and compact palms, paired with sculptural columnar cacti in custom ceramic pots.",
        "The integration of light stone porcelain paving and clean-lined furniture completes a contemporary, high-end landscape requiring minimal water and pruning."
      ]
    },
    es: {
      title: "Ático Terraza Palma",
      subtitle: "Un santuario mediterráneo en las alturas resistente al viento y al sol",
      category: "Jardín de Terraza",
      botanical: "Strelitzia nicolai, Chamaerops humilis, Phoenix roebelenii, Rhapis excelsa, Cycas revoluta, Monstera deliciosa, Cactus Columnares",
      description: [
        "Situado en la planta superior de un edificio contemporáneo en Palma, transformamos este ático de hormigón desnudo en un jardín exuberante y habitable.",
        "El diseño utiliza jardineras lineales a medida para estructurar las zonas de estar y comedor sin bloquear las vistas de la ciudad y el mar. Priorizamos especies resistentes a la radiación solar y al viento, como Strelitzia nicolai y palmeras compactas, junto a cactus columnares en macetas cerámicas.",
        "El pavimento de porcelana clara y el mobiliario de líneas limpias completan una composición contemporánea y sofisticada que requiere poca agua y poda."
      ]
    },
    de: {
      title: "Dachterrasse Palma Penthouse",
      subtitle: "Ein mediterranes Refugium in luftiger Höhe, wind- und sonnenresistent",
      category: "Terrassengarten",
      botanical: "Strelitzia nicolai, Chamaerops humilis, Phoenix roebelenii, Rhapis excelsa, Cycas revoluta, Monstera deliciosa, Säulenkakteen",
      description: [
        "Auf der obersten Etage eines zeitgenössischen Gebäudes in Palma gelegen, wurde diese Terrasse von einem kahlen Betondeck in einen üppigen, bewohnbaren Garten verwandelt.",
        "Der Entwurf verfügt über maßgeschneiderte lineare Pflanzkübel, die die Lounge- und Essbereiche strukturieren, ohne den Blick auf die Stadt und das Meer zu versperren. Die Pflanzenauswahl priorisiert sonnen- und windresistente Arten wie Strelitzia nicolai und kompakte Palmen, gepaart mit skulpturalen Säulenkakteen in Keramiktöpfen.",
        "Die Integration von hellem Steinzeug-Porzellanpflaster und geradlinigen Möbeln vervollständigt eine zeitgenössische, hochwertige Landschaft, die nur wenig Wasser und Schnitt erfordert."
      ]
    }
  },
  {
    slug: "vertical-garden",
    location: "Mallorca",
    year: "2023",
    architect: "Vertical Garden Mallorca",
    video: "https://www.youtube.com/embed/x3W0KQmr-pQ?feature=oembed",
    cover: "/portfolio/vertical-garden/cover.jpg",
    images: [
      "VERTICAL-GARDEN-DESIGN-MALLORCA-SESTEPA-LANDSCAPE-DESIGN-1.jpg",
      "VERTICAL-GARDEN-DESIGN-MALLORCA-SESTEPA-LANDSCAPE-DESIGN-10.jpg",
      "VERTICAL-GARDEN-DESIGN-MALLORCA-SESTEPA-LANDSCAPE-DESIGN-11.jpg",
      "VERTICAL-GARDEN-DESIGN-MALLORCA-SESTEPA-LANDSCAPE-DESIGN-12.jpg",
      "VERTICAL-GARDEN-DESIGN-MALLORCA-SESTEPA-LANDSCAPE-DESIGN-2.jpg",
      "VERTICAL-GARDEN-DESIGN-MALLORCA-SESTEPA-LANDSCAPE-DESIGN-3.jpg",
      "VERTICAL-GARDEN-DESIGN-MALLORCA-SESTEPA-LANDSCAPE-DESIGN-4.jpg",
      "VERTICAL-GARDEN-DESIGN-MALLORCA-SESTEPA-LANDSCAPE-DESIGN-5.jpg",
      "VERTICAL-GARDEN-DESIGN-MALLORCA-SESTEPA-LANDSCAPE-DESIGN-6.jpg",
      "VERTICAL-GARDEN-DESIGN-MALLORCA-SESTEPA-LANDSCAPE-DESIGN-7.jpg",
      "VERTICAL-GARDEN-DESIGN-MALLORCA-SESTEPA-LANDSCAPE-DESIGN-8.jpg",
      "VERTICAL-GARDEN-DESIGN-MALLORCA-SESTEPA-LANDSCAPE-DESIGN-9.jpg"
    ],
    en: {
      title: "Vertical Living Walls",
      subtitle: "Suspended jungle lattices filtering light and purifying air",
      category: "Vertical Garden",
      botanical: "Tropical and hanging species, climatic-adapted climbers",
      description: [
        "In collaboration, we designed two vertical living walls (indoor and outdoor) structured as a green lattice along the building's facade.",
        "The facade system reduces structural temperature by up to 40% and absorbs urban sound, improving acoustics. The dense foliage acts as an active air purifier, trapping dust particles and converting CO2 into oxygen.",
        "The meticulous plant selection provides a continuous sensation of freshness, warm green-yellow-red tones, and a magical 'jungle light' effect as beams of sun filter through the leaves."
      ]
    },
    es: {
      title: "Muros Verdes Verticales",
      subtitle: "Celosías de selva suspendidas que filtran la luz y purifican el aire",
      category: "Jardín Vertical",
      botanical: "Especies tropicales y colgantes, trepadoras adaptadas",
      description: [
        "En colaboración, diseñamos dos jardines verticales (interior y exterior) que se estructuran como una celosía verde a lo largo de la fachada del edificio.",
        "El sistema de fachada reduce la temperatura estructural hasta en un 40% y absorbe el ruido urbano, mejorando la acústica. El denso follaje funciona como purificador activo del aire, atrapando polvo y convirtiendo CO2 en oxígeno.",
        "La meticulosa selección botánica aporta una sensación constante de frescura, tonos cálidos y un efecto mágico de 'luz de selva' a medida que el sol se filtra entre las hojas."
      ]
    },
    de: {
      title: "Vertikale Pflanzenwände",
      subtitle: "Hängende Dschungelgitter, die Licht filtern und Luft reinigen",
      category: "Vertikaler Garten",
      botanical: "Tropische und hängende Arten, klimaangepasste Kletterpflanzen",
      description: [
        "In Zusammenarbeit haben wir zwei vertikale Pflanzenwände (innen und außen) entworfen, die als grünes Gitter entlang der Gebäudefassade strukturiert sind.",
        "Das Fassadensystem senkt die Strukturtemperatur um bis zu 40 % und absorbiert den Stadtlärm, was die Akustik verbessert. Das dichte Laub wirkt als aktiver Luftreiniger, der Staubpartikel einfängt und CO2 in Sauerstoff umwandelt.",
        "Die sorgfältige Pflanzenauswahl sorgt für ein kontinuierliches Gefühl der Frische, warme grün-gelb-rote Töne und einen magischen 'Dschungellicht'-Effekt, wenn das Sonnenlicht durch die Blätter dringt."
      ]
    }
  },
  {
    slug: "finca-garden-inca",
    location: "Inca, Mallorca",
    year: "2023",
    architect: null,
    video: null,
    cover: "/portfolio/finca-garden-inca/cover.jpg",
    images: [
      "PLANO-DE-JARDIN-INCA-SESTEPA-GARDEN-DESIGN-MALLORCA.jpg"
    ],
    en: {
      title: "Finca Garden Inca",
      subtitle: "A two-dimensional layout with height perspectives and natural colour",
      category: "Residential Garden",
      botanical: "Pittosporum tobira nana, Agapanthus praecox, Rosmarinus officinalis, Euryops, Teucrium, Eremophila, Santolina, Gaura, Jacaranda mimosifolia, Prunus dulcis",
      description: [
        "This design presents an interesting two-dimensional layout. The garden is elevated one metre above the level of the house and pool and is divided into two distinct zones: an existing lawn area and a pathway area designed with gravel. Pittosporum tobira nana creates a pleasant visual separation, while the gravel pathway widens in the centre to provide a space for enjoyment.",
        "Along the pathway, planters offer height perspectives with smaller shrubs in front and larger ones toward the back. In the centre, a small lake flanked by Pittosporum is complemented by Agapanthus. Hardy plants provide green, grey and red tones including rosemary, euryops, teucrium, eremophila, santolina and gaura.",
        "Two medium-sized semi-evergreen trees provide gentle summer shade, while an almond tree adds a Mallorcan touch. In the relaxation area, a sandglass-shaped design tapering toward the centre maximises the panoramic view across the entire garden."
      ]
    },
    es: {
      title: "Finca Jardín Inca",
      subtitle: "Una disposición bidimensional con perspectivas de altura y color natural",
      category: "Jardín Residencial",
      botanical: "Pittosporum tobira nana, Agapanthus praecox, Rosmarinus officinalis, Euryops, Teucrium, Eremophila, Santolina, Gaura, Jacaranda mimosifolia, Prunus dulcis",
      description: [
        "Este diseño presenta una interesante disposición bidimensional. El jardín se eleva un metro sobre el nivel de la casa y la piscina y se divide en dos zonas: césped existente y camino de grava. El Pittosporum tobira nana crea una agradable separación visual, mientras el camino se ensancha en el centro para ofrecer un espacio de disfrute.",
        "A lo largo del camino, jardineras ofrecen perspectivas de altura con arbustos pequeños al frente y más grandes al fondo. En el centro, un pequeño lago flanqueado por Pittosporum se complementa con Agapanthus. Plantas resistentes aportan tonos verdes, grises y rojos: romero, euryops, teucrium, eremophila, santolina y gaura.",
        "Dos árboles semiperennifolios de tamaño medio ofrecen sombra suave en verano, mientras un almendro añade un toque mallorquín. En la zona de descanso, un diseño en forma de reloj de arena maximiza la vista panorámica de todo el jardín."
      ]
    },
    de: {
      title: "Finca Garten Inca",
      subtitle: "Ein zweidimensionales Layout mit Höhenperspektiven und natürlicher Farbvielfalt",
      category: "Wohnbereich Garten",
      botanical: "Pittosporum tobira nana, Agapanthus praecox, Rosmarinus officinalis, Euryops, Teucrium, Eremophila, Santolina, Gaura, Jacaranda mimosifolia, Prunus dulcis",
      description: [
        "Dieser Entwurf bietet ein interessantes zweidimensionales Layout. Der Garten liegt einen Meter über dem Niveau des Hauses und des Pools und ist in zwei Zonen unterteilt: bestehende Rasenfläche und Kiesweg. Pittosporum tobira nana schafft eine angenehme optische Trennung, während sich der Kiesweg in der Mitte verbreitert.",
        "Entlang des Weges bieten Pflanzgefäße Höhenperspektiven mit kleineren Sträuchern vorne und größeren hinten. In der Mitte flankiert Pittosporum einen kleinen See, ergänzt durch Agapanthus. Winterharte Pflanzen in Grün-, Grau- und Rottönen: Rosmarin, Euryops, Teucrium, Eremophila, Santolina und Gaura.",
        "Zwei halb-immergrüne Bäume spenden sanften Sommerschatten, ein Mandelbaum verleiht einen mallorquinischen Touch. Im Entspannungsbereich maximiert ein sanduhrförmiges Design den Panoramablick über den gesamten Garten."
      ]
    }
  },
  {
    slug: "seaside-house-alcudia",
    location: "Alcúdia, Mallorca",
    year: "2023",
    architect: null,
    video: null,
    cover: "/portfolio/seaside-house-alcudia/cover.jpg",
    images: [
      "ALCANADA-RENDER-SESTEPA-GARDEN-DESIGN-scaled.jpg"
    ],
    en: {
      title: "Seaside House Alcúdia",
      subtitle: "Tropical colour contrasts on a sloping plot by the sea",
      category: "Residential Garden",
      botanical: "Tropical and coastal-adapted species, frost-tolerant exotics",
      description: [
        "On this plot located by the sea and on a sloping area, we found enclosed and defined garden spaces. We ensured colours stood out for their intensity and contrast: intense greens, lilacs, blues, yellows, and whites create colourful lines, especially during summer and spring.",
        "Most plants were of tropical origin and adapted to the sloping seaside plot, with characteristics allowing them to withstand the few winter frosts that can be detrimental to development.",
        "This garden design successfully combined visual and functional elements, creating a charming and harmonious space to enjoy by the sea and appreciate the beauty of nature."
      ]
    },
    es: {
      title: "Casa de Mar Alcúdia",
      subtitle: "Contrastes tropicales de color en una parcela en pendiente junto al mar",
      category: "Jardín Residencial",
      botanical: "Especies tropicales y adaptadas al litoral, exóticas tolerantes a heladas",
      description: [
        "En esa parcela situada junto al mar y en una zona en pendiente, encontramos espacios ajardinados cerrados y definidos. Acentuamos verdes intensos, lilas, azules, amarillos y blancos para crear líneas de color, especialmente en verano y primavera.",
        "La mayoría de las plantas eran de origen tropical y adaptadas a la zona en pendiente junto al mar, con características que les permitían soportar las escasas heladas invernales.",
        "Este diseño combinó con éxito elementos visuales y funcionales, creando un espacio encantador y armonioso para disfrutar junto al mar."
      ]
    },
    de: {
      title: "Haus am Meer Alcúdia",
      subtitle: "Tropische Farbkontraste auf einem Hanggrundstück am Meer",
      category: "Wohnbereich Garten",
      botanical: "Tropische und küstenangepasste Arten, frosttolerante Exoten",
      description: [
        "Auf diesem am Meer gelegenen Grundstück in Hanglage fanden wir geschlossene und abgegrenzte Gartenbereiche. Intensive Grün-, Flieder-, Blau-, Gelb- und Weißtöne schaffen kontrastreiche Farblinien, besonders im Sommer und Frühjahr.",
        "Die meisten Pflanzen waren tropischen Ursprungs und an die Hanglage in Meeresnähe angepasst, mit Eigenschaften, die wenige Winterfröste überstehen.",
        "Die Gestaltung verband visuelle und funktionale Elemente zu einem harmonischen Raum am Meer."
      ]
    }
  }
];
