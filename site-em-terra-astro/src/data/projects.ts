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
      botanical: "Citrus sinensis, Cycas revoluta, Strelitzia augusta, Pittosporum tobira 'Nana', Gaura lindheimeri, Muhlenbergia capillaris, Stipa tenuissima, Yucca elephantipes",
      description: [
        "This garden frames the Serra de Tramuntana as its true protagonist, blending color, movement, and open spaces to create a serene, contemplative Mediterranean landscape.",
        "The design is structured around two main planting lines that preserve the memory of the former orange grove while maintaining unobstructed views from the residence.",
        "The Green Line (lower tier), closer to the house and contained by a low wall, integrates existing Citrus sinensis and is enhanced with Gaura lindheimeri, Lavandula dentata, and Rosa 'KORbin'.",
        "The Pink Line (upper tier) is designed for high visual impact and movement, creating a natural prairie effect with Muhlenbergia capillaris, pink Gaura lindheimeri, Stipa tenuissima, and Pennisetum alopecuroides.",
        "At the heart of the pink line, a dedicated rest area is enveloped by grasses and three Yucca elephantipes — a point where wind, light, and vegetation converge to elegantly frame the distant mountain range."
      ]
    },
    es: {
      title: "Jardín Binissalem",
      subtitle: "Enmarcando la Serra de Tramuntana como la verdadera protagonista",
      category: "Jardín Residencial",
      botanical: "Citrus sinensis, Gaura lindheimeri, Lavandula dentata, Muhlenbergia capillaris, Stipa tenuissima, Yucca elephantipes",
      description: [
        "Este jardín enmarca la Serra de Tramuntana como su verdadera protagonista, combinando color, movimiento y espacios abiertos para crear un paisaje mediterráneo sereno y contemplativo.",
        "El diseño se estructura en torno a dos líneas principales de plantación que preservan la memoria del antiguo huerto de naranjos, manteniendo despejadas las vistas desde la vivienda.",
        "La Línea Verde (nivel inferior), más cercana a la casa y contenida por un muro bajo, integra los Citrus sinensis existentes y se realza con Gaura lindheimeri, Lavandula dentata y Rosa 'KORbin'.",
        "La Línea Rosa (nivel superior) está diseñada para un alto impacto visual y movimiento, creando un efecto de pradera natural con Muhlenbergia capillaris, Gaura lindheimeri rosa, Stipa tenuissima y Pennisetum alopecuroides.",
        "En el corazón de la línea rosa, una zona de descanso queda envuelta por gramíneas y tres Yucca elephantipes, un punto donde convergen el viento, la luz y la vegetación para enmarcar con elegancia la cordillera lejana."
      ]
    },
    de: {
      title: "Garten Binissalem",
      subtitle: "Die Tramuntana-Bergkette als wahre Protagonistin einrahmen",
      category: "Wohnbereich Garten",
      botanical: "Citrus sinensis, Gaura lindheimeri, Lavandula dentata, Muhlenbergia capillaris, Stipa tenuissima, Yucca elephantipes",
      description: [
        "Dieser Garten rahmt die Serra de Tramuntana als seine wahre Protagonistin ein und verbindet Farbe, Bewegung und offene Räume zu einer heiteren, kontemplativen mediterranen Landschaft.",
        "Der Entwurf ist um zwei Hauptpflanzlinien herum strukturiert, die die Erinnerung an den ehemaligen Orangenhain bewahren und gleichzeitig einen ungehinderten Blick vom Wohnhaus ermöglichen.",
        "Die Grüne Linie (untere Ebene), näher am Haus und von einer niedrigen Mauer begrenzt, integriert bestehende Citrus sinensis und wird mit Gaura lindheimeri, Lavandula dentata und Rosa 'KORbin' ergänzt.",
        "Die Rosa Linie (obere Ebene) ist für hohe visuelle Wirkung und Bewegung konzipiert und schafft mit Muhlenbergia capillaris, rosa Gaura lindheimeri, Stipa tenuissima und Pennisetum alopecuroides einen natürlichen Prärieeffekt.",
        "Im Herzen der rosa Linie liegt ein Ruhebereich, umgeben von Gräsern und drei Yucca elephantipes — ein Ort, an dem Wind, Licht und Vegetation zusammenkommen, um die ferne Bergkette elegant einzurahmen."
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
        "The garden designed in Bunyola is structured around a strong articulation of the site’s level changes",
        "Structured around a strong articulation of the site’s level changes, achieved through natural stone staircases and retaining walls that define pathways and seating areas. The wide, simply traced steps create a main circulation axis that connects the entrance level with the upper terraces, while the lateral plinths and raised beds serve a dual purpose: containing the soil and accommodating plantings that soften the transition between planes. This constructive system brings order and hierarchy to the space while lending a Mediterranean character through noble materials and mineral textures.",
        "In the elevated planters and beds flanking the stairs, species adapted to Mallorca’s dry climate have been combined, prioritizing low water consumption and long-lasting visual impact. Among them stand out the spherical shrubs of Pittosporum tobira nana, which provide perennial structure; ornamental grasses such as Stipa tenuissima and Festuca glauca, which introduce movement and seasonal variation; and flowering groundcovers like Aptenia cordifolia, which gradually colonize the gravel surfaces with a fresh, natural look. The result is a balanced plant palette capable of enhancing the architecture of the house and adding chromatic dynamism to the garden throughout the year.",
        "The proposal is completed with a warm lighting system of low bollard fixtures that highlights the volume of the walls and the relief of the stairs at night, along with a drip irrigation network divided into sectors to optimize water use.",
        "This garden not only provides a functional solution to the site's topography but also creates an immersive landscape experience, where materials, textures and vegetation interact in a coherent and sustainable way."
      ]
    },
    es: {
      title: "Terrazas de Bunyola",
      subtitle: "Orden y ritmo navegando por una topografía escarpada",
      category: "Jardín Residencial",
      botanical: "Pittosporum tobira nana, Stipa tenuissima, Festuca glauca, Aptenia cordifolia",
      description: [
        "El jardín diseñado en Bunyola se estructura en torno a una fuerte articulación de los cambios de nivel del lugar",
        "Se estructuró en torno a una fuerte articulación de los cambios de nivel del emplazamiento, lograda mediante escaleras de piedra natural y muros de contención que definen los caminos y las zonas de asiento. Los anchos escalones, de trazado sencillo, crean un eje principal de circulación que conecta el nivel de entrada con las terrazas superiores, mientras que los zócalos laterales y los bancales elevados cumplen una doble función: contener el suelo y albergar plantaciones que suavizan la transición entre planos. Este sistema constructivo aporta orden y jerarquía al espacio, al tiempo que le confiere un carácter mediterráneo mediante materiales nobles y texturas minerales.",
        "En las jardineras y parterres elevados que flanquean la escalera, se han combinado especies adaptadas al clima seco de Mallorca, priorizando el bajo consumo de agua y el impacto visual duradero. Entre ellas destacan los arbustos esféricos de Pittosporum tobira nana, que proporcionan estructura perenne; gramíneas ornamentales como Stipa tenuissima y Festuca glauca, que introducen movimiento y variación estacional; y cubresuelos floridos como Aptenia cordifolia, que colonizan gradualmente las superficies de grava con un aspecto fresco y natural. El resultado es una paleta de plantas equilibrada, capaz de realzar la arquitectura de la casa y añadir dinamismo cromático al jardín durante todo el año.",
        "La propuesta se completa con un sistema de iluminación cálida de luminarias de bolardo bajo que resalta el volumen de los muros y el relieve de las escaleras por la noche, junto con una red de riego por goteo dividida en sectores para optimizar el uso del agua.",
        "Este jardín no sólo proporciona una solución funcional a la topografía del lugar, sino que también crea una experiencia paisajística envolvente, donde los materiales, las texturas y la vegetación interactúan de forma coherente y sostenible."
      ]
    },
    de: {
      title: "Terrassen von Bunyola",
      subtitle: "Ordnung und Rhythmus in steiler Topographie",
      category: "Wohnbereich Garten",
      botanical: "Pittosporum tobira nana, Stipa tenuissima, Festuca glauca, Aptenia cordifolia",
      description: [
        "Der in Bunyola gestaltete Garten ist um eine ausgeprägte Gliederung der Höhenunterschiede des Geländes herum strukturiert, erreicht durch Natursteintreppen und Stützmauern, die Wege und Sitzbereiche definieren.",
        "Die breiten, einfach gestalteten Stufen bilden eine Hauptverkehrsachse, die den Eingangsbereich mit den oberen Terrassen verbindet, während seitliche Sockel und Hochbeete den Boden stützen und Bepflanzungen aufnehmen, die den Übergang zwischen den Ebenen abmildern.",
        "In den Hochbeeten entlang der Treppe wurden an das trockene Klima Mallorcas angepasste Arten kombiniert — darunter Pittosporum tobira nana, Stipa tenuissima, Festuca glauca und Aptenia cordifolia — mit geringem Wasserverbrauch und ganzjähriger visueller Wirkung.",
        "Die Gestaltung wird durch warme Bodenleuchten und ein sektorweises Tropfbewässerungssystem ergänzt. Der Garten bietet nicht nur eine funktionale Lösung für die Topographie, sondern schafft ein intensives Landschaftserlebnis, in dem Materialien, Texturen und Vegetation kohärent und nachhaltig zusammenwirken."
      ]
    }
  },
  {
    slug: "campanet-garden",
    location: "Campanet, Mallorca",
    year: "2023",
    architect: null,
    video: null,
    cover: "/portfolio/campanet-garden/cover.jpg",
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
    slug: "finca-garden-campos-mallorca",
    location: "Campos, Mallorca",
    year: "2021",
    architect: null,
    video: "https://www.youtube.com/embed/McyZviXDxhc?feature=oembed",
    cover: "/portfolio/finca-garden-campos-mallorca/cover.webp",
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
        "The Finca Garden Campos is an impressive 10.000 m2 space, designed and created by our gardening company, S'Estepa.",
        "Every corner of this garden has been carefully planned to provide a unique and enjoyable visual experience.",
        "Upon entering the garden, you are greeted by two central pathways covered in lippia, which act as visual axes.",
        "At the end of these pathways, a majestic tree known as bellasombra stands out. Along the entrance path to the estate, we have used red lippia and gauras, creating a vibrant and welcoming area.",
      ]
    },
    es: {
      title: "Finca Jardín Campos",
      subtitle: "Un majestuoso paisaje de 10.000 m² que une la geometría y la naturaleza salvaje",
      category: "Jardín de Finca",
      botanical: "Lippia nodiflora, Phytolacca dioica (Bellasombra), Gaura lindheimeri, Stipa tenuissima, Agapanthus praecox, Bougainvillea spectabilis",
      description: [
        "La Finca Garden Campos es un impresionante espacio de 10.000 m2, diseñado y creado por nuestra empresa de jardinería, S'Estepa.",
        "Cada rincón de este jardín se ha planificado cuidadosamente para proporcionar una experiencia visual única y agradable.",
        "Al entrar en el jardín, te reciben dos caminos centrales cubiertos de lippia, que actúan como ejes visuales.",
        "Al final de estos senderos destaca un majestuoso árbol conocido como bellasombra. A lo largo del camino de entrada a la finca, hemos utilizado lippia roja y gauras, creando una zona vibrante y acogedora.",
      ]
    },
    de: {
      title: "Finca Garten Campos",
      subtitle: "Eine majestätische 10.000 m² große Landschaft, die Geometrie und wilde Natur vereint",
      category: "Landgut Garten",
      botanical: "Lippia nodiflora, Phytolacca dioica (Bellasombra), Gaura lindheimeri, Stipa tenuissima, Agapanthus praecox, Bougainvillea spectabilis",
      description: [
        "Der Finca-Garten Campos ist ein beeindruckender 10.000 m² großer Raum, entworfen und geschaffen von unserem Gartenbauunternehmen S'Estepa.",
        "Jede Ecke dieses Gartens wurde sorgfältig geplant, um ein einzigartiges und angenehmes visuelles Erlebnis zu bieten.",
        "Beim Betreten des Gartens werden Sie von zwei zentralen Wegen begrüßt, die mit Lippia bepflanzt sind und als visuelle Achsen wirken.",
        "Am Ende dieser Wege ragt ein majestätischer Baum, die Bellasombra, hervor. Entlang des Eingangswegs zum Anwesen haben wir rote Lippia und Gauras verwendet und so einen lebendigen und einladenden Bereich geschaffen."
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
        "Located in Costa de La Calma, Calvià, this garden harmoniously combines a variety of natural elements and lush plants.",
        "As you venture into this garden, you will find yourself surrounded by a carefully selected array of plants that create a tropical and Zen atmosphere.",
        "We have also incorporated a small grassy area and preserved the existing palm trees, adding an authentic touch to this space.",
        "To achieve a visually captivating design, we have created color lines in the garden, using vibrant tones such as the yellow of the Phormium and the striking green and yellow of the bamboo. These plants intertwine in a play of colors that complement the existing palm trees. The result is a truly beautiful garden that invites relaxation and contemplation.",
      ]
    },
    es: {
      title: "Costa de la Calma Zen",
      subtitle: "Una atmósfera tropical y serena que celebra la textura y la privacidad",
      category: "Jardín Residencial",
      botanical: "Bambusa vulgaris, Strelitzia nicolai, Phormium tenax variegata, Phoenix dactylifera",
      description: [
        "Situado en Costa de La Calma, Calvià, este jardín combina armoniosamente una variedad de elementos naturales y plantas exuberantes.",
        "Al adentrarse en este jardín, se encontrará rodeado de una cuidada selección de plantas que crean una atmósfera tropical y zen, entre ellas elegantes bambúes, llamativas Strelitzias y exquisitos Phormium variegata. También hemos incorporado una pequeña zona de césped y conservado las palmeras existentes.",
        "Para lograr un diseño visualmente cautivador, hemos creado líneas de color en el jardín, utilizando tonos vibrantes como el amarillo del Phormium y el llamativo verde y amarillo del bambú. El resultado es un jardín realmente hermoso que invita a la relajación y la contemplación.",
        "Además de su función estética, el bambú desempeña un papel importante a la hora de proporcionar intimidad: lo hemos colocado en las paredes para separar los espacios vecinos y reducir el ruido del entorno. En las jardineras centrales, Phormium variegata, Strelitzia augusta y Strelitzia reginae crean un interesante contraste de texturas y dinamismo."
      ]
    },
    de: {
      title: "Costa de la Calma Zen",
      subtitle: "Eine tropische und heitere Atmosphäre, die Textur und Privatsphäre zelebriert",
      category: "Wohnbereich Garten",
      botanical: "Bambusa vulgaris, Strelitzia nicolai, Phormium tenax variegata, Phoenix dactylifera",
      description: [
        "Dieser Garten in Costa de La Calma, Calvià, vereint harmonisch eine Vielzahl von natürlichen Elementen und üppigen Pflanzen.",
        "Wenn Sie sich in diesen Garten begeben, werden Sie von einer sorgfältig ausgewählten Auswahl an Pflanzen umgeben sein, die eine tropische und Zen-Atmosphäre schaffen — darunter eleganter Bambus, auffällige Strelitzien und exquisites Phormium variegata. Wir haben auch eine kleine Rasenfläche angelegt und die vorhandenen Palmen erhalten.",
        "Um ein visuell fesselndes Design zu erreichen, haben wir Farblinien im Garten geschaffen, die leuchtende Töne wie das Gelb des Phormiums und das auffällige Grün und Gelb des Bambus verwenden. Das Ergebnis ist ein wirklich schöner Garten, der zur Entspannung und Kontemplation einlädt.",
        "Neben seiner ästhetischen Funktion spielt der Bambus auch eine wichtige Rolle bei der Wahrung der Privatsphäre: Wir haben ihn an den Wänden angebracht, um benachbarte Räume abzutrennen und den Lärm zu reduzieren. In den mittleren Pflanzgefäßen schaffen Phormium variegata, Strelitzia augusta und Strelitzia reginae einen interessanten Kontrast."
      ]
    }
  },
  {
    slug: "crestatx-garden-design",
    location: "Crestatx, Sa Pobla",
    year: "2023",
    architect: null,
    video: "https://www.youtube.com/embed/-xs_kKaUnGA?feature=oembed",
    cover: "/portfolio/crestatx-garden-design/cover.webp",
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
        "In the Crestatx garden, we have undergone a significant transformation by replacing the lawn with a carefully planned design. We have opted for mini-sized river stones to facilitate circulation, combined with a selection of strategically placed plants to create a harmonious visual balance.",
        "At the entrance, grasses and salvias predominate, offering a natural and fresh welcome. Around the pool, we have opted for shrubby species inspired by the tropics, such as Cycads, Bird of Paradise, Ficus, and Pittosporum.",
        "In the rear of the garden, we created vegetation islands leading to the side area, using aromatic and ground-covering plants alongside carefully selected trees. A wooded zone bordered by band-shaped plants like Ophiopogon and Agapanthus is elegantly framed with corten steel.",
        "Our main goal was to reduce water consumption by eliminating the lawn while creating pedestrian paths between the plants to fully enjoy the beauty and serenity of the green space."
      ]
    },
    es: {
      title: "Transformación Crestatx",
      subtitle: "Un jardín moderno y de bajo consumo hídrico que sustituye el césped por capas minerales",
      category: "Jardín Sostenible",
      botanical: "Cycas revoluta, Strelitzia reginae, Salvia rosmarinus, Pittosporum tobira, Agapanthus praecox, Ophiopogon japonicus",
      description: [
        "En el jardín de Crestatx, hemos llevado a cabo una importante transformación sustituyendo el césped por un diseño cuidadosamente planificado. Hemos optado por piedras de río de tamaño mini para facilitar la circulación, combinadas con una selección de plantas estratégicamente colocadas para crear un armonioso equilibrio visual.",
        "En la entrada predominan las gramíneas y las salvias, que ofrecen una bienvenida natural y fresca. Alrededor de la piscina, hemos optado por especies arbustivas inspiradas en los trópicos, como cicadáceas, aves del paraíso, ficus y pittosporum.",
        "En la parte trasera del jardín, hemos creado islas de vegetación que conducen hacia la zona lateral. Destacamos una zona arbolada, bordeada por plantas en forma de cinta como el Ophiopogon y el Agapanthus, enmarcada elegantemente con acero corten.",
        "En resumen, nuestro principal objetivo al diseñar este jardín era reducir el consumo de agua eliminando el césped y creando al mismo tiempo senderos peatonales entre las plantas para disfrutar plenamente de la belleza y la serenidad del espacio verde."
      ]
    },
    de: {
      title: "Umgestaltung Crestatx",
      subtitle: "Ein moderner, wassersparender Garten, der den Rasen durch reichhaltige Mineralschichten ersetzt",
      category: "Nachhaltiger Garten",
      botanical: "Cycas revoluta, Strelitzia reginae, Salvia rosmarinus, Pittosporum tobira, Agapanthus praecox, Ophiopogon japonicus",
      description: [
        "Im Garten von Crestatx haben wir eine bedeutende Umgestaltung vorgenommen, indem wir den Rasen durch eine sorgfältig geplante Gestaltung ersetzt haben. Wir haben uns für Flusssteine im Miniformat entschieden, kombiniert mit strategisch platzierten Pflanzen für ein harmonisches visuelles Gleichgewicht.",
        "Im Eingangsbereich überwiegen Gräser und Salbei, die einen natürlichen und frischen Eindruck machen. Rund um den Pool haben wir uns für tropisch inspirierte Straucharten wie Cycadeen, Paradiesvögel, Ficus und Pittosporum entschieden.",
        "Im hinteren Teil des Gartens haben wir Vegetationsinseln angelegt. Wir heben ein Waldgebiet hervor, das von bandartigen Pflanzen wie Ophiopogon und Agapanthus sowie von Sträuchern wie Myrten gesäumt wird, elegant umrahmt mit Cortenstahl.",
        "Zusammenfassend lag unser Hauptaugenmerk darauf, den Wasserverbrauch zu reduzieren, indem wir den Rasen eliminierten und gleichzeitig Fußgängerwege zwischen den Pflanzen anlegten, um die Schönheit und Ruhe der Grünfläche voll und ganz zu genießen."
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
        "An elegant garden that highlights the beauty of the Mediterranean surroundings for the enjoyment of hotel guests.",
        "In the garden of Hotel Cabot Las Velas, we have completely transformed the space, replacing the lawn and meadow areas with a captivating layer of volcanic gravel.",
        "This volcanic gravel provides a backdrop of intense brown color that contrasts with the lush variety of green tones and heights that dominate this garden.",
        "To achieve this effect, we have created clusters of ground-covering plants in strategic points, composed of lavender, rosemary, stipa grass, and agapanthus. These smaller and compact plants bring a touch of fragrance and beauty while complementing the Mediterranean aesthetics of the garden.",
      ]
    },
    es: {
      title: "Hotel Cabot Las Velas",
      subtitle: "Un oasis mineral de baja altura optimizado para vistas panorámicas amplias",
      category: "Paisajismo Comercial",
      botanical: "Chamaerops humilis, Agave attenuata, Lavandula angustifolia, Rosmarinus prostratus, Stipa tenuissima, Agapanthus praecox, Pistacia lentiscus",
      description: [
        "Un elegante jardín que resalta la belleza del entorno mediterráneo para disfrute de los huéspedes del hotel.",
        "En el jardín del Hotel Cabot Las Velas, hemos transformado completamente el espacio, sustituyendo las zonas de césped y pradera por una cautivadora capa de grava volcánica que contrasta con la exuberante variedad de tonos verdes y alturas.",
        "Para conseguir este efecto, hemos creado grupos de plantas tapizantes en puntos estratégicos — lavanda, romero, hierba stipa y agapantos — junto con lentisco, pittosporum tobira nana, Chamaerops humilis y agave attenuata.",
        "Hemos evitado el crecimiento de plantas altas para conseguir una vista completa desde cualquier punto. Desde la zona de la piscina, los huéspedes pueden disfrutar de una vista panorámica y espaciosa donde diferentes colores y alturas se entrelazan en perfecta armonía."
      ]
    },
    de: {
      title: "Hotel Cabot Las Velas",
      subtitle: "Eine flache mineralische Oase, optimiert für weite Panoramablicke",
      category: "Gewerbliche Landschaft",
      botanical: "Chamaerops humilis, Agave attenuata, Lavandula angustifolia, Rosmarinus prostratus, Stipa tenuissima, Agapanthus praecox, Pistacia lentiscus",
      description: [
        "Ein eleganter Garten, der die Schönheit der mediterranen Umgebung hervorhebt und den Hotelgästen zur Freude gereicht.",
        "Im Garten des Hotels Cabot Las Velas haben wir den Raum komplett umgestaltet und die Rasen- und Wiesenflächen durch eine bezaubernde Schicht aus Vulkankies ersetzt, der mit der üppigen Vielfalt an Grüntönen und -höhen kontrastiert.",
        "An strategischen Punkten haben wir bodendeckende Pflanzengruppen aus Lavendel, Rosmarin, Stipa-Gras und Agapanthus gepflanzt, ergänzt durch Mastix, Pittosporum tobira nana, Chamaerops humilis und Agave attenuata.",
        "Wir haben das Wachstum hoher Pflanzen vermieden, um von jedem Punkt aus einen vollständigen Überblick zu erhalten. Vom Poolbereich aus genießen die Gäste einen weiten Panoramablick, bei dem verschiedene Farben und Höhen in perfekter Harmonie ineinander übergehen."
      ]
    }
  },
  {
    slug: "garden-design-llubi-mallorca",
    location: "Llubí, Mallorca",
    year: "2023",
    architect: null,
    video: null,
    cover: "/portfolio/garden-design-llubi-mallorca/cover.webp",
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
        "Llubí garden, our landscape design focuses on creating an aesthetic, functional, and sustainable space. First, we prioritized water conservation by avoiding lawns. Instead, we opted for a large gravel area to reduce irrigation needs.",
        "Next to the house wall, we installed gravel stabilizers to create a solid foundation. As a result, this provides an ideal space for morning coffee or outdoor dining. Additionally, an umbrella sits at the highest point of the garden. This placement offers a panoramic view and allows for full enjoyment of the Mediterranean surroundings.",
        "To break the monotony of the gravel, we introduced islands of rosemary and lavender. Specifically, we alternated these species across five long, narrow (7m x 2m each) . As these plants mature, they will partially cover the gravel and provide a vibrant color contrast. Furthermore, five islands of wildflowers serve as seasonal focal points throughout the space.",
        "In the center of the garden, we incorporated a fireplace. This element creates a perfect gathering spot for family and friends. To provide natural shade, we planted three Jacarandas around this central area. Ultimately, the design emphasizes low maintenance and a wild, natural character through a high density of wildflowers.",
      ]
    },
    es: {
      title: "Jardín Silvestre Llubí",
      subtitle: "Un escape de campo de bajo mantenimiento estructurado con flores silvestres y fuego",
      category: "Jardín Residencial",
      botanical: "Jacaranda mimosifolia, Salvia rosmarinus, Lavandula dentata, Flores Silvestres",
      description: [
        "En el jardín de Llubí, nuestro diseño paisajístico se centra en crear un espacio estético, funcional y sostenible. Hemos dado prioridad a la conservación del agua evitando el césped en favor de una gran zona de grava.",
        "Junto al muro de la casa, hemos instalado estabilizadores de grava para crear un espacio ideal para el desayuno o la merienda, con una sombrilla en el punto más alto que ofrece una vista panorámica del entorno.",
        "Para romper la monotonía de la grava, hemos introducido islas de romero y lavanda en cinco parcelas largas y estrechas (7 m x 2 m cada una), junto con cinco islas de flores silvestres que servirán como puntos de floración.",
        "En el centro del jardín, hemos incorporado una chimenea rodeada de tres jacarandas que proporcionan sombra. El diseño pretende ser de bajo mantenimiento, con un carácter salvaje y natural que refleja la belleza del paisaje con una intervención mínima."
      ]
    },
    de: {
      title: "Wildgarten Llubí",
      subtitle: "Ein pflegeleichter Rückzugsort auf dem Land mit Wildblumen und Feuerstelle",
      category: "Wohnbereich Garten",
      botanical: "Jacaranda mimosifolia, Salvia rosmarinus, Lavandula dentata, Wildblumen",
      description: [
        "Im Garten von Llubí konzentriert sich unser Landschaftsentwurf auf einen ästhetischen, funktionalen und nachhaltigen Raum. Wir haben der Wassereinsparung Priorität eingeräumt und auf Rasenflächen zugunsten einer großen Kieszone verzichtet.",
        "Entlang der Hauswand haben wir Kiesstabilisatoren installiert, um einen idealen Bereich für Frühstück oder Mahlzeiten im Freien zu schaffen, mit einem Sonnenschirm am höchsten Punkt des Gartens und Panoramablick.",
        "Um die Monotonie des Kieses zu durchbrechen, haben wir Inseln aus Rosmarin und Lavendel in fünf langen, schmalen Parzellen (je 7 m x 2 m) angelegt, ergänzt durch fünf Wildblumeninseln als saisonale Blickpunkte.",
        "In der Mitte des Gartens haben wir einen Kamin eingebaut, umgeben von drei Jacarandas, die Schatten spenden. Der Entwurf ist pflegeleicht konzipiert und verleiht dem Raum einen wilden, natürlichen Charakter mit minimaler Intervention."
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
        "The Sant Llorenç region is defined by a warm, dry climate. We propose a sustainable garden utilizing drought-resistant plants with low water requirements. This design preserves native species while reinforcing Mallorcan identity.",
        "A key concept is to keep the house hidden from the entrance, so it appears as a surprise at the end of the path, emerging from the vegetation. Centenary olive trees (Olea europaea) are planted in strategic, irregular positions to anchor the landscape. As a complement, irregular cypresses (Cupressus sempervirens) rise above the rest of the vegetation, evoking both a Tuscan and a Mallorcan atmosphere.",
        "The garden fades gradually into the natural landscape surrounding the house. The outer edges transform into a traditional Mallorcan field, ensuring smooth integration. We begin by pruning existing vegetation and clearing the soil to prepare for new planting.",
        "For the larger open spaces, we propose informal but generous groupings of drought-tolerant species — Lavandula, Rosmarinus, Perovskia, Gaura, Teucrium fruticans, Pistacia lentiscus and Westringia fruticosa — creating natural corridors for relaxed walks through the garden."
      ]
    },
    es: {
      title: "Finca Sant Llorenç",
      subtitle: "Un paisaje sostenible diseñado como una revelación gradual",
      category: "Jardín de Finca",
      botanical: "Olea europaea (Centenario), Cupressus sempervirens, Rosmarinus officinalis, Stipa tenuissima, Perovskia atriplicifolia, Teucrium fruticans, Chamaerops humilis",
      description: [
        "La zona de Sant Llorenç se define por su clima cálido y seco. Por ello, proponemos un jardín más sostenible, basado en plantas resistentes a la sequía y al sol, con bajos requerimientos hídricos. El diseño busca preservar las especies autóctonas al tiempo que refuerza la identidad mediterránea y mallorquina.",
        "Alrededor de la casa, el jardín se desvanece gradualmente en el paisaje natural. Los bordes exteriores de la propiedad se transforman en un campo tradicional mallorquín, asegurando una suave integración con el entorno. El proceso comienza con la poda de la vegetación existente y la limpieza del suelo, preparándolo para la nueva plantación.",
        "Un concepto clave es mantener la casa oculta desde la entrada, de modo que aparezca como una sorpresa al final del camino, emergiendo de entre la vegetación. Los olivos centenarios (Olea europaea) se plantan en posiciones estratégicas e irregulares para anclar el paisaje. Como complemento, cipreses irregulares (Cupressus sempervirens) se elevan sobre el resto de la vegetación, evocando un ambiente tanto toscano como mallorquín.",
        "En los espacios abiertos más grandes, proponemos agrupaciones informales pero generosas de especies tolerantes a la sequía, como: Lavándula, Rosmarinus, Perovskia, Gaura, Leucophyllum, Teucrium fruticans, Pistacia lentiscus y Westringia fruticosa. Estos grupos crearán pasillos naturales dentro del jardín, fomentando los paseos relajados y ofreciendo una experiencia envolvente. Los senderos se integrarán discretamente en el diseño general, manteniendo una atmósfera natural, relajada y armoniosa. En ciertas zonas, la vegetación se abrirá ligeramente para formar pequeños rincones acogedores donde sentarse y disfrutar del entorno.",
      ]
    },
    de: {
      title: "Landgut Sant Llorenç",
      subtitle: "Eine nachhaltige Landschaft, konzipiert als allmähliche Enthüllung",
      category: "Landgut Garten",
      botanical: "Olea europaea (Centenary), Cupressus sempervirens, Rosmarinus officinalis, Stipa tenuissima, Perovskia atriplicifolia, Teucrium fruticans, Chamaerops humilis",
      description: [
        "Das Gebiet von Sant Llorenç ist durch sein warmes, trockenes Klima geprägt. Aus diesem Grund schlagen wir einen nachhaltigeren Garten vor, der auf trockenheits- und sonnenresistenten Pflanzen mit geringem Wasserbedarf basiert. Der Entwurf zielt darauf ab, einheimische Arten zu erhalten und gleichzeitig die mediterrane und mallorquinische Identität zu stärken.",
        "Um das Haus herum geht der Garten allmählich in die natürliche Landschaft über. Die äußeren Ränder des Grundstücks werden in ein traditionelles mallorquinisches Feld verwandelt, das sich nahtlos in die Umgebung einfügt. Der Prozess beginnt mit dem Beschneiden der vorhandenen Vegetation und dem Ausräumen des Bodens, um ihn für die Neupflanzung vorzubereiten.",
        "Ein Schlüsselkonzept besteht darin, das Haus vor dem Eingang zu verstecken, so dass es am Ende des Weges als Überraschung aus der Vegetation auftaucht. Hundertjährige Olivenbäume (Olea europaea) werden an strategischen, unregelmäßigen Stellen gepflanzt, um die Landschaft zu verankern. Ergänzend dazu erheben sich unregelmäßige Zypressen (Cupressus sempervirens) über den Rest der Vegetation, die sowohl eine toskanische als auch eine mallorquinische Atmosphäre hervorrufen.",
        "Für die größeren Freiflächen schlagen wir lockere, aber großzügige Gruppierungen trockenheitstoleranter Arten vor, wie z.B.: Lavandula, Rosmarinus, Perovskia, Gaura, Leucophyllum, Teucrium fruticans, Pistacia lentiscus, und Westringia fruticosa. Diese Gruppen werden natürliche Korridore im Garten bilden, die zu entspannten Spaziergängen einladen und ein intensives Erlebnis bieten. Die Wege werden sich diskret in das Gesamtdesign einfügen und eine natürliche, entspannte und harmonische Atmosphäre schaffen. In bestimmten Bereichen wird sich die Vegetation leicht öffnen und kleine, einladende Plätze bilden, an denen man sitzen und die Umgebung genießen kann.",
      ]
    }
  },
  {
    slug: "terrace-garden-santa-eugenia",
    location: "Santa Eugènia, Mallorca",
    year: "2023",
    architect: null,
    video: null,
    cover: "/portfolio/terrace-garden-santa-eugenia/cover.jpg",
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
        "In the project for this terrace in Santa Eugènia, we have designed several interventions to incorporate vegetation and soften the presence of the predominant concrete. We have installed large planters at different heights along the terrace. These planters contain plants of various shades and blooms, selected for their ground-covering characteristics and their ability to cover the soil completely. The goal is to create green spots that add life and color to the terrace.",
        "On the stairs, we have left the central staircase free and placed planters on each side at different levels.",
        "Next to the pool, we have added large flowerbeds that break the monotony of the concrete, creating an island of vegetation that acts as a green lung within the space.",
        "For the 30-35 meter walls, we have installed rectangular iron structures that are 3 meters high and 50 centimeters wide. These structures support climbing plants that, as they grow, will add vegetation to the wall without completely covering it. This avoids a feeling of saturation and dirtiness, maintaining a clean and orderly design.",
      ]
    },
    es: {
      title: "Terrazas de Santa Eugènia",
      subtitle: "Suavizando el hormigón contemporáneo con vegetación vertical",
      category: "Jardín de Terraza",
      botanical: "Climbing Hedera, Trachelospermum jasminoides, Bougainvillea, Tapizantes",
      description: [
        "En el proyecto de esta terraza en Santa Eugènia, hemos diseñado varias intervenciones para incorporar vegetación y suavizar la presencia del hormigón predominante. Hemos instalado grandes jardineras a diferentes alturas con plantas tapizantes seleccionadas para cubrir el suelo por completo.",
        "En las escaleras, hemos dejado libre la escalera central y colocado jardineras a cada lado en distintos niveles.",
        "Junto a la piscina, hemos añadido grandes parterres que rompen la monotonía del hormigón, creando una isla de vegetación que actúa como pulmón verde del espacio.",
        "Para los muros de 30-35 metros, hemos instalado estructuras de hierro rectangulares de 3 metros de altura que soportan plantas trepadoras, añadiendo vegetación sin saturar el diseño y manteniendo un aspecto limpio y ordenado."
      ]
    },
    de: {
      title: "Terrassen von Santa Eugènia",
      subtitle: "Zeitgenössischen Beton mit vertikalem Grün abmildern",
      category: "Terrassengarten",
      botanical: "Climbing Hedera, Trachelospermum jasminoides, Bougainvillea, Bodendecker",
      description: [
        "Bei dem Projekt für diese Terrasse in Santa Eugènia haben wir verschiedene Maßnahmen ergriffen, um die Vegetation zu integrieren und die Präsenz des vorherrschenden Betons zu mildern. Wir haben große Pflanzgefäße in verschiedenen Höhen entlang der Terrasse aufgestellt. Diese Pflanzgefäße enthalten Pflanzen in verschiedenen Farbtönen und mit unterschiedlichen Blüten, die aufgrund ihrer bodenbedeckenden Eigenschaften und ihrer Fähigkeit, den Boden vollständig zu bedecken, ausgewählt wurden. Das Ziel ist es, grüne Flecken zu schaffen, die der Terrasse Leben und Farbe verleihen.",
        "Bei der Treppe haben wir die zentrale Treppe frei gelassen und auf jeder Seite Pflanzgefäße auf verschiedenen Ebenen aufgestellt.",
        "Neben dem Pool haben wir große Blumenbeete angelegt, die die Monotonie des Betons durchbrechen und eine Insel der Vegetation schaffen, die wie eine grüne Lunge im Raum wirkt.",
        "Für die 30-35 Meter hohen Mauern haben wir rechteckige Eisenstrukturen installiert, die 3 Meter hoch und 50 Zentimeter breit sind. Diese Strukturen tragen Kletterpflanzen, die, wenn sie wachsen, die Mauer bewachsen, ohne sie vollständig zu bedecken. So wird ein Gefühl der Sättigung und Verschmutzung vermieden und ein sauberes und ordentliches Design beibehalten.",
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
        "This project honors the natural incline of the Mallorca landscape, utilizing its original ravines and slopes as the structural foundation. By rejecting land leveling in favor of rockeries and plant masses, the design achieves a seamless, organic integration.",
        "The topography of this garden inherently defined its character. The terrain descends in natural slopes, forming a small ravine that connects the residence with the surrounding Mediterranean landscape. Rather than altering the elevations, the design respects and utilizes them as the foundational structural element.",
        "The garden was developed along this natural incline using rockeries and plant masses to stabilize the soil and mirror the land's original contour. Stone elements structure the space, allowing vegetation to integrate organically as if it had always been part of the site.",
        "The slope is softened with resilient groundcovers including Agapanthus africanus, Chlorophytum comosum and Asparagus densiflorus. The result is a garden that follows, respects and enhances the natural terrain in harmonious balance with the Mallorcan landscape."
      ]
    },
    es: {
      title: "Barranco de Santa Ponsa",
      subtitle: "Honrando los contornos originales y las laderas rocosas de Calvià",
      category: "Jardín Residencial",
      botanical: "Pistacia lentiscus, Rosmarinus officinalis, Lavandula, Rocallas Mediterráneas",
      description: [
        "La topografía de este jardín definía por sí misma el carácter del espacio. El terreno desciende en taludes naturales, formando una pequeña barranca que conecta la vivienda con el paisaje mediterráneo que la rodea.",
        "En lugar de modificar los niveles, el diseño los respeta y los utiliza como elemento estructural fundamental. El jardín se desarrolló mediante rocallas y masas vegetales que estabilizan el suelo y acompañan el contorno original del terreno.",
        "Los elementos pétreos estructuran el espacio y permiten que la vegetación se integre de forma orgánica. La pendiente se suaviza con cubresuelos resistentes como Agapanthus africanus, Chlorophytum comosum y Asparagus densiflorus.",
        "El resultado es un jardín que sigue, respeta y realza el terreno natural, integrándose de forma armoniosa con el paisaje de Mallorca en un equilibrio entre impacto estético y gestión sostenible de bajo mantenimiento."
      ]
    },
    de: {
      title: "Schlucht von Santa Ponsa",
      subtitle: "Die ursprünglichen Konturen und felsigen Hänge von Calvià würdigen",
      category: "Wohnbereich Garten",
      botanical: "Pistacia lentiscus, Rosmarinus officinalis, Lavandula, Mediterrane Steingärten",
      description: [
        "Die Topographie dieses Gartens definierte von sich aus den Charakter des Raums. Das Gelände fällt in natürlichen Hängen ab und bildet eine kleine Schlucht, die das Wohnhaus mit der umgebenden mediterranen Landschaft verbindet.",
        "Anstatt die Höhen zu verändern, respektiert der Entwurf sie und nutzt sie als fundamentales Strukturelement. Der Garten wurde entlang dieser natürlichen Neigung mit Steingärten und Pflanzenmassen entwickelt, die den Boden stabilisieren.",
        "Steinelemente strukturieren den Raum und ermöglichen eine organische Integration der Vegetation. Die Hanglage wird mit widerstandsfähigen Bodendeckern wie Agapanthus africanus, Chlorophytum comosum und Asparagus densiflorus abgemildert.",
        "Das Ergebnis ist ein Garten, der das natürliche Gelände folgt, respektiert und hervorhebt — harmonisch in die mallorquinische Landschaft integriert mit einem Gleichgewicht aus ästhetischer Wirkung und nachhaltiger, pflegearmer Bewirtschaftung."
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
    slug: "terrace-garden-in-palma",
    location: "Palma de Mallorca",
    year: "2023",
    architect: "Contemporary Studio",
    video: "https://www.youtube.com/embed/1q1Qnh2s_mg?feature=oembed",
    cover: "/portfolio/terrace-garden-in-palma/cover.jpg",
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
        "The intervention stems from a sensitive reading of the site: solar orientation, wind exposure, sea and city views, and transitions between indoors and outdoors. The goal was to endow the space with a clear vegetative identity, using species adapted to the Mediterranean climate, low-maintenance, and with strong visual presence—capable of dialoguing with the urban landscape and contemporary architecture.",
        "The design is structured around large-format linear planters that outline the functional zones and house a botanical composition alternating green masses, contrasting textures, and controlled heights. This layout defines without compartmentalizing, creating differentiated areas for lounging, gathering, and contemplation.",
        "Chamaerops humilis and Phoenix roebelenii: compact, resilient palms suited for elevated, windy environments.",
        "Rhapis excelsa, Cycas revoluta, and Monstera deliciosa: provide density, texture, and foliage diversity across mid and lower strata.",
      ]
    },
    es: {
      title: "Ático Terraza Palma",
      subtitle: "Un santuario mediterráneo en las alturas resistente al viento y al sol",
      category: "Jardín de Terraza",
      botanical: "Strelitzia nicolai, Chamaerops humilis, Phoenix roebelenii, Rhapis excelsa, Cycas revoluta, Monstera deliciosa, Cactus Columnares",
      description: [
        "Situada en la última planta de un edificio contemporáneo de Palma, esta terraza se transformó en un jardín habitable, integrando vegetación permanente, confort climático y una estética alineada con el lenguaje arquitectónico de su entorno.",
        "La intervención parte de una lectura sensible del emplazamiento: orientación solar, exposición al viento y vistas al mar y a la ciudad. El diseño se estructura en torno a jardineras lineales de gran formato que delimitan las zonas funcionales.",
        "Strelitzia nicolai es el elemento vertical dominante. Chamaerops humilis y Phoenix roebelenii son palmeras compactas y resistentes. Rhapis excelsa, Cycas revoluta y Monstera deliciosa proporcionan densidad y textura, junto a cactus columnares y suculentas escultóricas en macetas de cerámica.",
        "El pavimento de porcelana en tonos claros y el mobiliario de líneas limpias complementan la vegetación. Las especies elegidas ofrecen gran resistencia al viento y al sol, baja demanda de agua y necesidades mínimas de poda."
      ]
    },
    de: {
      title: "Dachterrasse Palma Penthouse",
      subtitle: "Ein mediterranes Refugium in luftiger Höhe, wind- und sonnenresistent",
      category: "Terrassengarten",
      botanical: "Strelitzia nicolai, Chamaerops humilis, Phoenix roebelenii, Rhapis excelsa, Cycas revoluta, Monstera deliciosa, Säulenkakteen",
      description: [
        "Diese Terrasse im obersten Stockwerk eines modernen Gebäudes in Palma wurde in einen bewohnbaren Garten umgewandelt, indem dauerhaftes Grün, klimatischer Komfort und eine an die Architektur angepasste Ästhetik integriert wurden.",
        "Die Intervention beruht auf einer sensiblen Betrachtung des Standorts: Sonnenausrichtung, Windexposition und Ausblicke auf Meer und Stadt. Das Design ist um großformatige, lineare Pflanzgefäße herum strukturiert, die funktionale Zonen abgrenzen.",
        "Strelitzia nicolai bildet das dominierende vertikale Element. Chamaerops humilis und Phoenix roebelenii sind kompakte, windresistente Palmen. Rhapis excelsa, Cycas revoluta und Monstera deliciosa sorgen für Dichte und Textur.",
        "Großformatige Porzellanplatten in hellen Steintönen und Möbel mit klaren Linien ergänzen die Bepflanzung. Die ausgewählten Arten bieten hohe Widerstandsfähigkeit gegen Wind und Sonne, geringen Wasserbedarf und minimalen Schnittaufwand."
      ]
    }
  },
  {
    slug: "vertical-gardens-in-mallorca",
    location: "Mallorca",
    year: "2023",
    architect: "Vertical Garden Mallorca",
    video: "https://www.youtube.com/embed/x3W0KQmr-pQ?feature=oembed",
    cover: "/portfolio/vertical-gardens-in-mallorca/cover.jpg",
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
        "Climbing and hanging plants predominated by green, red, and yellow tones. High capacity to withstand extreme temperatures",
        "The meticulous selection of tropical plants, based on adaptation, structure, and colors, provided the space with a sensation of freshness, warm colors, and plants suspended in the air",
        "The project proposal consists of two vertical gardens with different geometric structures, both indoors and outdoors, in combination with the space. Through avant-garde elements, the design aesthetics are focused on a vegetal lattice along the entire exterior facade: beams of light enter the interior space and achieve a jungle light effect.",
        "The vertical garden reduces facade temperature by up to 40%, absorbs sound to improve acoustic quality, and contributes to air purification by trapping dust and converting CO2 into oxygen."
      ]
    },
    es: {
      title: "Muros Verdes Verticales",
      subtitle: "Celosías de selva suspendidas que filtran la luz y purifican el aire",
      category: "Jardín Vertical",
      botanical: "Especies tropicales y colgantes, trepadoras adaptadas",
      description: [
        "En las plantas trepadoras y colgantes predominan los tonos verdes, rojos y amarillos, con alta capacidad para soportar temperaturas extremas.",
        "La meticulosa selección de plantas tropicales, basada en la adaptación, la estructura y los colores, proporcionó al espacio una sensación de frescor, colores cálidos y plantas suspendidas en el aire.",
        "La propuesta consiste en dos jardines verticales con diferentes estructuras geométricas, tanto en el interior como en el exterior. Los haces de luz entran en el espacio interior y consiguen un efecto de luz selvática a lo largo de toda la fachada.",
        "El jardín reduce la temperatura del espacio hasta un 40% en las fachadas, absorbe el sonido y contribuye a la purificación del aire, atrapando polvo en suspensión y convirtiendo CO2 en oxígeno."
      ]
    },
    de: {
      title: "Vertikale Pflanzenwände",
      subtitle: "Hängende Dschungelgitter, die Licht filtern und Luft reinigen",
      category: "Vertikaler Garten",
      botanical: "Tropische und hängende Arten, klimaangepasste Kletterpflanzen",
      description: [
        "Bei Kletter- und Hängepflanzen überwiegen grüne, rote und gelbe Töne mit hoher Widerstandsfähigkeit gegen extreme Temperaturen.",
        "Die sorgfältige Auswahl tropischer Pflanzen, basierend auf Anpassung, Struktur und Farben, verleiht dem Raum ein Gefühl von Frische, warmen Farben und in der Luft schwebenden Pflanzen.",
        "Das Projektvorschlag besteht aus zwei vertikalen Gärten mit unterschiedlichen geometrischen Strukturen, innen und außen. Lichtstrahlen dringen in den Innenraum ein und erzeugen einen Dschungellichteffekt entlang der gesamten Außenfassade.",
        "Der Garten senkt die Raumtemperatur an Fassaden um bis zu 40 %, absorbiert Schall und trägt zur Luftreinigung bei, indem er Staubpartikel einfängt und CO2 in Sauerstoff umwandelt."
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
        "This design presents an interesting two-dimensional layout. The garden is elevated one metre above the level of the house and pool and is divided into two distinct zones: an existing lawn area and a pathway area to be designed with gravel.",
        "To naturally separate the two zones, Pittosporum tobira nana has been chosen, known for its rounded shape and minimal pruning requirements. These shrubs create a pleasant visual separation between the lawn and gravel pathway.",
        "The gravel pathway widens in the centre to provide a space for enjoyment. It connects to the lawn area from two different points and spans the entire garden, ending on the other side.",
        "Along the pathway, a series of planters are created to offer height perspectives, ensuring that the foreground plants do not obstruct the background ones. Smaller shrubs are placed naturally in the front, while larger ones are positioned towards the back. Additionally, small wildflower plants are strategically placed along sections of the pathway, without obstructing the shrubs in the flower beds.",
      ]
    },
    es: {
      title: "Finca Jardín Inca",
      subtitle: "Una disposición bidimensional con perspectivas de altura y color natural",
      category: "Jardín Residencial",
      botanical: "Pittosporum tobira nana, Agapanthus praecox, Rosmarinus officinalis, Euryops, Teucrium, Eremophila, Santolina, Gaura, Jacaranda mimosifolia, Prunus dulcis",
      description: [
        "Este diseño presenta una interesante disposición bidimensional. El jardín se eleva un metro sobre el nivel de la casa y la piscina y se divide en dos zonas diferenciadas: una zona de césped existente y una zona de camino que se diseñará con grava.",
        "Para separar naturalmente las dos zonas, se ha elegido el Pittosporum tobira nana, conocido por su forma redondeada y sus mínimas necesidades de poda. Estos arbustos crean una agradable separación visual entre el césped y el camino de grava.",
        "El camino de grava se ensancha en el centro para ofrecer un espacio de disfrute. Conecta con la zona de césped desde dos puntos distintos y se extiende por todo el jardín, terminando en el otro lado.",
        "A lo largo del camino, una serie de jardineras ofrecen perspectivas de altura, asegurando que las plantas del primer plano no obstruyan las del fondo. Los arbustos más pequeños se colocan de forma natural en la parte delantera, mientras que los más grandes se sitúan hacia la parte trasera. Además, se han colocado estratégicamente pequeñas plantas silvestres a lo largo de tramos del sendero, sin obstruir los arbustos de los parterres.",
      ]
    },
    de: {
      title: "Finca Garten Inca",
      subtitle: "Ein zweidimensionales Layout mit Höhenperspektiven und natürlicher Farbvielfalt",
      category: "Wohnbereich Garten",
      botanical: "Pittosporum tobira nana, Agapanthus praecox, Rosmarinus officinalis, Euryops, Teucrium, Eremophila, Santolina, Gaura, Jacaranda mimosifolia, Prunus dulcis",
      description: [
        "Dieser Entwurf bietet ein interessantes zweidimensionales Layout. Der Garten liegt einen Meter über dem Niveau des Hauses und des Pools und ist in zwei Zonen unterteilt: eine bestehende Rasenfläche und ein mit Kies zu gestaltender Wegbereich.",
        "Zur natürlichen Trennung der beiden Zonen wurde Pittosporum tobira nana gewählt, bekannt für seine runde Form und geringen Schnittbedarf. Diese Sträucher schaffen eine angenehme visuelle Trennung zwischen Rasen und Kiesweg.",
        "Der Kiesweg verbreitert sich in der Mitte zu einem Aufenthaltsbereich, verbindet die Rasenfläche an zwei Punkten und erstreckt sich über den gesamten Garten.",
        "Entlang des Weges bieten Pflanzgefäße Höhenperspektiven: kleinere Sträucher vorne, größere hinten, ergänzt durch strategisch platzierte Wildblumen, die die Beete nicht verdecken."
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
        "In that plot located by the sea and on a sloping area, we found enclosed and defined garden spaces.",
        "We made sure that in these spaces the colours stood out for their intensity and contrast: we emphasised intense greens, lilacs, blues, yellows, and whites. This way, the garden became a contrast of colourful lines, especially during the summer and spring seasons.",
        "Most of the plants were of tropical origin and adapted to the sloping area where the plot was located near the sea; all of them with characteristics that allowed them to withstand the few frosts in the winter seasons, which can be detrimental to the plants' development.",
        "This garden design successfully combined visual and functional elements, creating a charming and harmonious space to enjoy by the sea and appreciate the beauty of nature in all its past splendour.",
      ]
    },
    es: {
      title: "Casa de Mar Alcúdia",
      subtitle: "Contrastes tropicales de color en una parcela en pendiente junto al mar",
      category: "Jardín Residencial",
      botanical: "Especies tropicales y adaptadas al litoral, exóticas tolerantes a heladas",
      description: [
        "En esa parcela situada junto al mar y en una zona en pendiente, encontramos espacios ajardinados cerrados y definidos.",
        "Nos aseguramos de que en estos espacios los colores destacaran por su intensidad y contraste: acentuamos los verdes intensos, los lilas, los azules, los amarillos y los blancos. De este modo, el jardín se convertía en un contraste de líneas de colores, especialmente durante las estaciones de verano y primavera.",
        "La mayoría de las plantas eran de origen tropical y estaban adaptadas a la zona en pendiente cerca del mar, con características que les permitían soportar las escasas heladas de las estaciones invernales.",
        "Este diseño de jardín combinó con éxito elementos visuales y funcionales, creando un espacio encantador y armonioso para disfrutar junto al mar y apreciar la belleza de la naturaleza en todo su esplendor."
      ]
    },
    de: {
      title: "Haus am Meer Alcúdia",
      subtitle: "Tropische Farbkontraste auf einem Hanggrundstück am Meer",
      category: "Wohnbereich Garten",
      botanical: "Tropische und küstenangepasste Arten, frosttolerante Exoten",
      description: [
        "Auf diesem am Meer gelegenen Grundstück in Hanglage fanden wir geschlossene und abgegrenzte Gartenbereiche.",
        "Wir haben darauf geachtet, dass die Farben in diesen Räumen durch ihre Intensität und ihren Kontrast hervorstechen: intensive Grün-, Flieder-, Blau-, Gelb- und Weißtöne. Auf diese Weise wurde der Garten vor allem im Sommer und Frühjahr zu einem kontrastreichen Farbenspiel.",
        "Die meisten Pflanzen waren tropischen Ursprungs und an die Hanglage des Grundstücks in Meeresnähe angepasst, mit Eigenschaften, die es ihnen ermöglichen, die wenigen Winterfröste zu überstehen.",
        "Bei der Gestaltung dieses Gartens wurden visuelle und funktionale Elemente erfolgreich miteinander kombiniert, so dass ein reizvoller und harmonischer Raum entstand, in dem man sich am Meer erholen und die Schönheit der Natur genießen kann."
      ]
    }
  }
];
