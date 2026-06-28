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
  coverPosition?: string;
  /** Social preview image (JPG, â‰¤1MB). Falls back to cover when omitted. */
  ogImage?: string;
  /** Hidden from portfolio listing but page still accessible by URL. */
  hidden?: boolean;
  /** Garden surface in mÂ², shown on cards and detail (e.g. "10,000 mÂ²"). Omit when unknown. */
  size?: string;
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
    cover: "/portfolio/binissalem/garden-design-mallorca-binissalem-sestepa.jpg",
    images: [
        "BINISSALEM-MALLORCA-SESTEPA-DESIGN-6.jpg",
        "BINISSALEM-MALLORCA-SESTEPA-DESIGN-8.jpg",
        "BINISSALEM-MALLORCA-SESTEPA-DESIGN-9.jpg",
        "BINISSALEM-MALLORCA-SESTEPA-DESIGN-12.jpg",
        "BINISSALEM-MALLORCA-SESTEPA-DESIGN-16.jpg",
        "BINISSALEM-MALLORCA-SESTEPA-DESIGN-17.jpg",
        "BINISSALEM-MALLORCA-SESTEPA-DESIGN-19.jpg",
        "LANDSCAPE-GARDEN-MALLORCA-SESTEPA-DESIGN-10.jpg",
        "LANDSCAPE-GARDEN-MALLORCA-SESTEPA-DESIGN-12.jpg",
        "LANDSCAPE-GARDEN-MALLORCA-SESTEPA-DESIGN-5.jpg",
        "LANDSCAPE-GARDEN-MALLORCA-SESTEPA-DESIGN-6.jpg",
        "LANDSCAPE-GARDEN-MALLORCA-SESTEPA-DESIGN-9.jpg",
        "LANDSCAPE-GARDEN-MALLORCA-SESTEPA-DESIGN.jpg",
      ],
    en: {
      title: "Binissalem Garden",
      subtitle: "Framing the Tramuntana mountain range as the true protagonist",
      category: "Residential Garden",
      botanical: "Citrus sinensis, Cycas revoluta, Strelitzia augusta, Pittosporum tobira 'Nana', Gaura lindheimeri, Muhlenbergia capillaris, Stipa tenuissima, Yucca elephantipes",      description: [
        "This garden frames the Serra de Tramuntana as its true protagonist, blending color, movement, and open spaces to create a serene, contemplative Mediterranean landscape.",
        "The design is structured around two main planting lines that preserve the memory of the former orange grove while maintaining unobstructed views from the residence.",
        "The Green Line (lower tier), closer to the house and contained by a low wall, integrates existing <i>Citrus sinensis</i> and is enhanced with <i>Gaura lindheimeri</i>, <i>Lavandula dentata</i>, and <i>Rosa</i> 'KORbin'.",
        "The Pink Line (upper tier) is designed for high visual impact and movement, creating a natural prairie effect with <i>Muhlenbergia capillaris</i>, pink <i>Gaura lindheimeri</i>, <i>Stipa tenuissima</i>, and <i>Pennisetum alopecuroides</i>.",
        "At the heart of the pink line, a dedicated rest area is enveloped by grasses and three <i>Yucca elephantipes</i> â€” a point where wind, light, and vegetation converge to elegantly frame the distant mountain range."
      ]
    },
    es: {
      title: "JardÃ­n Binissalem",
      subtitle: "Enmarcando la Serra de Tramuntana como la verdadera protagonista",
      category: "JardÃ­n Residencial",
      botanical: "Citrus sinensis, Gaura lindheimeri, Lavandula dentata, Muhlenbergia capillaris, Stipa tenuissima, Yucca elephantipes",
      description: [
        "Este jardÃ­n enmarca la Serra de Tramuntana como su verdadera protagonista, combinando color, movimiento y espacios abiertos para crear un paisaje mediterrÃ¡neo sereno y contemplativo.",
        "El diseÃ±o se estructura en torno a dos lÃ­neas principales de plantaciÃ³n que preservan la memoria del antiguo huerto de naranjos, manteniendo despejadas las vistas desde la vivienda.",
        "La LÃ­nea Verde (nivel inferior), mÃ¡s cercana a la casa y contenida por un muro bajo, integra los <i>Citrus sinensis</i> existentes y se realza con <i>Gaura lindheimeri</i>, <i>Lavandula dentata</i> y <i>Rosa</i> 'KORbin'.",
        "La LÃ­nea Rosa (nivel superior) estÃ¡ diseÃ±ada para un alto impacto visual y movimiento, creando un efecto de pradera natural con <i>Muhlenbergia capillaris</i>, <i>Gaura lindheimeri</i> rosa, <i>Stipa tenuissima</i> y <i>Pennisetum alopecuroides</i>.",
        "En el corazÃ³n de la lÃ­nea rosa, una zona de descanso queda envuelta por gramÃ­neas y tres <i>Yucca elephantipes</i>, un punto donde convergen el viento, la luz y la vegetaciÃ³n para enmarcar con elegancia la cordillera lejana."
      ]
    },
    de: {
      title: "Garten Binissalem",
      subtitle: "Die Tramuntana-Bergkette als wahre Protagonistin einrahmen",
      category: "Wohnbereich Garten",
      botanical: "Citrus sinensis, Gaura lindheimeri, Lavandula dentata, Muhlenbergia capillaris, Stipa tenuissima, Yucca elephantipes",
      description: [
        "Dieser Garten rahmt die Serra de Tramuntana als seine wahre Protagonistin ein und verbindet Farbe, Bewegung und offene RÃ¤ume zu einer heiteren, kontemplativen mediterranen Landschaft.",
        "Der Entwurf ist um zwei Hauptpflanzlinien herum strukturiert, die die Erinnerung an den ehemaligen Orangenhain bewahren und gleichzeitig einen ungehinderten Blick vom Wohnhaus ermÃ¶glichen.",
        "Die GrÃ¼ne Linie (untere Ebene), nÃ¤her am Haus und von einer niedrigen Mauer begrenzt, integriert bestehende <i>Citrus sinensis</i> und wird mit <i>Gaura lindheimeri</i>, <i>Lavandula dentata</i> und <i>Rosa</i> 'KORbin' ergÃ¤nzt.",
        "Die Rosa Linie (obere Ebene) is fÃ¼r hohe visuelle Wirkung und Bewegung konzipiert und schafft mit <i>Muhlenbergia capillaris</i>, rosa <i>Gaura lindheimeri</i>, <i>Stipa tenuissima</i> und <i>Pennisetum alopecuroides</i> einen natÃ¼rlichen PrÃ¤rieeffekt.",
        "Im Herzen der rosa Linie liegt ein Ruhebereich, umgeben von GrÃ¤sern und drei <i>Yucca elephantipes</i> â€” ein Ort, an dem Wind, Licht und Vegetation zusammenkommen, um die ferne Bergkette elegant einzurahmen."
      ]
    }
  },
  {
    slug: "bunyola",
    location: "Bunyola, Mallorca",
    year: "2022",
    architect: null,
    video: null,
    cover: "/portfolio/bunyola/garden-design-mallorca-bunyola-sestepa.jpg",
    images: [
      "BUNYOLA-2D-SESTEPA-DESIGN-MALLORCA.png",
      "BUNYOLA-MALLORCA-SESTEPA-LANDSCAPE-GARDEN-DESIGN-1.jpg",
      "BUNYOLA-MALLORCA-SESTEPA-LANDSCAPE-GARDEN-DESIGN-2.jpg",
      "BUNYOLA-MALLORCA-SESTEPA-LANDSCAPE-GARDEN-DESIGN.jpg",
      "BUNYOLA-MALLORCA-SESTEPA-LANDSCAPE-GARDEN-DESIGN-4.jpg",
      "BUNYOLA-MALLORCA-SESTEPA-LANDSCAPE-GARDEN-DESIGN-9.jpg"
    ],
    en: {
      title: "Bunyola",
      subtitle: "Order and rhythm navigating a steep topography",
      category: "Residential Garden",
      botanical: "Pittosporum tobira nana, Stipa tenuissima, Festuca glauca, Aptenia cordifolia",
      description: [
        "The garden designed in Bunyola is structured around a strong articulation of the siteâ€™s level changes",
        "Structured around a strong articulation of the siteâ€™s level changes, achieved through natural stone staircases and retaining walls that define pathways and seating areas. The wide, simply traced steps create a main circulation axis that connects the entrance level with the upper terraces, while the lateral plinths and raised beds serve a dual purpose: containing the soil and accommodating plantings that soften the transition between planes. This constructive system brings order and hierarchy to the space while lending a Mediterranean character through noble materials and mineral textures.",
        "In the elevated planters and beds flanking the stairs, species adapted to Mallorcaâ€™s dry climate have been combined, prioritizing low water consumption and long-lasting visual impact. Among them stand out the spherical shrubs of Pittosporum tobira nana, which provide perennial structure; ornamental grasses such as Stipa tenuissima and Festuca glauca, which introduce movement and seasonal variation; and flowering groundcovers like Aptenia cordifolia, which gradually colonize the gravel surfaces with a fresh, natural look. The result is a balanced plant palette capable of enhancing the architecture of the house and adding chromatic dynamism to the garden throughout the year.",
        "The proposal is completed with a warm lighting system of low bollard fixtures that highlights the volume of the walls and the relief of the stairs at night, along with a drip irrigation network divided into sectors to optimize water use.",
        "This garden not only provides a functional solution to the site's topography but also creates an immersive landscape experience, where materials, textures and vegetation interact in a coherent and sustainable way."
      ]
    },
    es: {
      title: "Bunyola",
      subtitle: "Orden y ritmo navegando por una topografÃ­a escarpada",
      category: "JardÃ­n Residencial",
      botanical: "Pittosporum tobira nana, Stipa tenuissima, Festuca glauca, Aptenia cordifolia",
      description: [
        "El jardÃ­n diseÃ±ado en Bunyola se estructura en torno a una fuerte articulaciÃ³n de los cambios de nivel del lugar",
        "Se estructurÃ³ en torno a una fuerte articulaciÃ³n de los cambios de nivel del emplazamiento, lograda mediante escaleras de piedra natural y muros de contenciÃ³n que definen los caminos y las zonas de asiento. Los anchos escalones, de trazado sencillo, crean un eje principal de circulaciÃ³n que conecta el nivel de entrada con las terrazas superiores, mientras que los zÃ³calos laterales y los bancales elevados cumplen una doble funciÃ³n: contener el suelo y albergar plantaciones que suavizan la transiciÃ³n entre planos. Este sistema constructivo aporta orden y jerarquÃ­a al espacio, al tiempo que le confiere un carÃ¡cter mediterrÃ¡neo mediante materiales nobles y texturas minerales.",
        "En las jardineras y parterres elevados que flanquean la escalera, se han combinado especies adaptadas al clima seco de Mallorca, priorizando el bajo consumo de agua y el impacto visual duradero. Entre ellas destacan los arbustos esfÃ©ricos de Pittosporum tobira nana, que proporcionan estructura perenne; gramÃ­neas ornamentales como Stipa tenuissima y Festuca glauca, que introducen movimiento y variaciÃ³n estacional; y cubresuelos floridos como Aptenia cordifolia, que colonizan gradualmente las superficies de grava con un aspecto fresco y natural. El resultado es una paleta de plantas equilibrada, capaz de realzar la arquitectura de la casa y aÃ±adir dinamismo cromÃ¡tico al jardÃ­n durante todo el aÃ±o.",
        "La propuesta se completa con un sistema de iluminaciÃ³n cÃ¡lida de luminarias de bolardo bajo que resalta el volumen de los muros y el relieve de las escaleras por la noche, junto con una red de riego por goteo dividida en sectores para optimizar el uso del agua.",
        "Este jardÃ­n no sÃ³lo proporciona una soluciÃ³n funcional a la topografÃ­a del lugar, sino que tambiÃ©n crea una experiencia paisajÃ­stica envolvente, donde los materiales, las texturas y la vegetaciÃ³n interactÃºan de forma coherente y sostenible."
      ]
    },
    de: {
      title: "Bunyola",
      subtitle: "Ordnung und Rhythmus in steiler Topographie",
      category: "Wohnbereich Garten",
      botanical: "Pittosporum tobira nana, Stipa tenuissima, Festuca glauca, Aptenia cordifolia",
      description: [
        "Der in Bunyola gestaltete Garten ist um eine ausgeprÃ¤gte Gliederung der HÃ¶henunterschiede des GelÃ¤ndes herum strukturiert, erreicht durch Natursteintreppen und StÃ¼tzmauern, die Wege und Sitzbereiche definieren.",
        "Die breiten, einfach gestalteten Stufen bilden eine Hauptverkehrsachse, die den Eingangsbereich mit den oberen Terrassen verbindet, wÃ¤hrend seitliche Sockel und Hochbeete den Boden stÃ¼tzen und Bepflanzungen aufnehmen, die den Ãœbergang zwischen den Ebenen abmildern.",
        "In den Hochbeeten entlang der Treppe wurden an das trockene Klima Mallorcas angepasste Arten kombiniert â€” darunter Pittosporum tobira nana, Stipa tenuissima, Festuca glauca und Aptenia cordifolia â€” mit geringem Wasserverbrauch und ganzjÃ¤hriger visueller Wirkung.",
        "Die Gestaltung wird durch warme Bodenleuchten und ein sektorweises TropfbewÃ¤sserungssystem ergÃ¤nzt. Der Garten bietet nicht nur eine funktionale LÃ¶sung fÃ¼r die Topographie, sondern schafft ein intensives Landschaftserlebnis, in dem Materialien, Texturen und Vegetation kohÃ¤rent und nachhaltig zusammenwirken."
      ]
    }
  },
  {
    slug: "campanet-garden",
    location: "Campanet, Mallorca",
    year: "2023",
    architect: null,
    video: null,
    cover: "/portfolio/campanet-garden/garden-design-mallorca-campanet-garden-sestepa.jpg",
    images: [
      "garden-design-mallorca-landscape-design-sestepa-campanet-1.jpg",
      "garden-design-mallorca-landscape-design-sestepa-campanet-2.jpg",
      "garden-design-mallorca-landscape-design-sestepa-campanet-3.jpg",
      "garden-design-mallorca-landscape-design-sestepa-campanet-4.jpg",
      "garden-design-mallorca-landscape-design-sestepa-campanet-6.jpg",
      "garden-design-mallorca-landscape-design-sestepa-campanet-7.jpg"
    ],
    en: {
      title: "Campanet",
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
      title: "Campanet",
      subtitle: "Un refugio silencioso frente a las faldas de la Tramuntana",
      category: "JardÃ­n Residencial",
      botanical: "Olea europaea, Stipa tenuissima, Rosmarinus officinalis, Lavandula dentata",
      description: [
        "DiseÃ±ado en armonÃ­a natural con el paisaje mallorquÃ­n, este jardÃ­n sirve como un refugio privado moldeado por el ritmo de la naturaleza.",
        "Mediante el uso de especies endÃ©micas y elementos tradicionales de piedra en seco, establecemos una conexiÃ³n visual fluida con las montaÃ±as circundantes, preservando el alma rÃºstica de la finca original.",
        "La selecciÃ³n de plantas destaca las texturas silvestres y la tolerancia a la sequÃ­a, permitiendo que el jardÃ­n madure con gracia con la mÃ­nima intervenciÃ³n."
      ]
    },
    de: {
      title: "Campanet",
      subtitle: "Ein stiller RÃ¼ckzugsort an den AuslÃ¤ufern der Tramuntana",
      category: "Wohnbereich Garten",
      botanical: "Olea europaea, Stipa tenuissima, Rosmarinus officinalis, Lavandula dentata",
      description: [
        "In natÃ¼rlicher Harmonie mit der mallorquinischen Landschaft entworfen, dient dieser Garten als privater RÃ¼ckzugsort, der vom Rhythmus der Natur geprÃ¤gt ist.",
        "Durch die Verwendung einheimischer Arten und traditioneller Trockensteinelemente haben wir eine nahtlose visuelle Verbindung zu den umliegenden Bergen hergestellt und die rustikale Seele des ursprÃ¼nglichen Anwesens bewahrt.",
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
    cover: "/portfolio/finca-garden-campos-mallorca/garden-design-mallorca-finca-garden-campos-mallorca-sestepa.webp",
    ogImage: "/portfolio/finca-garden-campos-mallorca/garden-design-mallorca-finca-garden-campos-mallorca-sestepa.webp",
    images: [
      "GARDEN-LANDSCAPE-DESIGN-MALLORCA-SESTEPA-DESIGN-JARDINES-1.jpg",
      "GARDEN-LANDSCAPE-DESIGN-MALLORCA-SESTEPA-DESIGN-JARDINES-13.jpg",
      "GARDEN-LANDSCAPE-DESIGN-MALLORCA-SESTEPA-DESIGN-JARDINES-11.jpg",
      "GARDEN-LANDSCAPE-DESIGN-MALLORCA-SESTEPA-DESIGN-JARDINES-12.jpg",
      "GARDEN-LANDSCAPE-DESIGN-MALLORCA-SESTEPA-DESIGN-JARDINES-10.jpg",
      "GARDEN-LANDSCAPE-DESIGN-MALLORCA-SESTEPA-DESIGN-JARDINES-14.jpg",
      "GARDEN-LANDSCAPE-DESIGN-MALLORCA-SESTEPA-DESIGN-JARDINES-22.webp",
      "GARDEN-LANDSCAPE-DESIGN-MALLORCA-SESTEPA-DESIGN-JARDINES-4.jpg",
      "GARDEN-LANDSCAPE-DESIGN-MALLORCA-SESTEPA-DESIGN-JARDINES-5.jpg",
      "GARDEN-LANDSCAPE-DESIGN-MALLORCA-SESTEPA-DESIGN-JARDINES-6.jpg",
      "GARDEN-LANDSCAPE-DESIGN-MALLORCA-SESTEPA-DESIGN-JARDINES-7.jpg",
      "finca-garden-campos-sestepa-design-landscaper-mallorca-20.jpg",
      "finca-garden-campos-sestepa-design-landscaper-mallorca-22.jpg",
      "finca-garden-campos-sestepa-design-landscaper-mallorca-23.jpg",
      "finca-garden-campos-sestepa-design-landscaper-mallorca-29.jpg",
      "finca-garden-campos-sestepa-design-landscaper-mallorca-30.jpg",
      "finca-garden-campos-sestepa-design-landscaper-mallorca-31.jpg",
      "finca-garden-campos-sestepa-design-landscaper-mallorca-32.jpg",
      "finca-garden-campos-sestepa-design-landscaper-mallorca-33.jpg",
      "finca-garden-campos-sestepa-design-landscaper-mallorca-34.jpg",
      "finca-garden-campos-sestepa-design-landscaper-mallorca-35.jpg",
      "finca-garden-campos-sestepa-design-landscaper-mallorca-36.jpg",
      "finca-garden-campos-sestepa-design-landscaper-mallorca-37.jpg",
      "finca-garden-campos-sestepa-design-landscaper-mallorca-38.jpg",
      "finca-garden-campos-sestepa-design-landscaper-mallorca-39.jpg",
      "finca-garden-campos-sestepa-design-landscaper-mallorca-28.jpg"
    ],
    en: {
      title: "Finca Garden Campos",
      subtitle: "A majestic landscape blending geometry and wild nature",
      category: "Estate Garden",
      botanical: "Phyla nodiflora, Phytolacca dioica (Bellasombra), Gaura lindheimeri, Rosmarinus officinalis 'Prostratus', Lantana camara, Lantana montevidensis, Bougainvillea sanderiana, Agapanthus africanus, Stipa tenuissima, Phoenix roebelenii, Cupressus arizonica, Pittosporum tobira 'Nana'",
      description: [
        "The Campos Garden is an impressive landscape designed and built by Sâ€™Estepa. Every corner of this garden has been carefully planned to provide a unique and enjoyable visual experience.",
        "Upon entering the garden, visitors are welcomed by two central pathways covered with lippia (<i>Phyla nodiflora</i>), which serve as strong visual axes. At the end of these pathways stands a majestic ombÃº tree (<i>Phytolacca dioica</i>). Along the entrance road to the property, we used lippia and red-flowering gauras (<i>Gaura lindheimeri</i>), creating a vibrant and welcoming atmosphere.",
        "The pathway leading from the entrance to the house is bordered by creeping rosemary (<i>Rosmarinus officinalis</i> 'Prostratus') and <i>Ficus nitida</i>, providing a fragrant and elegant setting. Decorative lantanas (<i>Lantana camara</i>) arranged in an 'S' shape enhance the arrival experience and add charm to the entrance of the estate.",
        "Adjacent to the house, we created an elevated garden of approximately 300â€“400 mÂ², covered with gravel and planted with low-growing species. These rustic plants, featuring a variety of colours, form a living carpet that can be appreciated from the house while offering panoramic views of the entire garden.",
        "In the pool area, lippia is once again used to create an attractive visual avenue. At the end of this space stands another ombÃº tree. On either side of the lippia, we designed two geometrically structured garden spaces featuring white lantanas (<i>Lantana montevidensis</i>), purple bougainvilleas (<i>Bougainvillea sanderiana</i>) and blue agapanthus (<i>Agapanthus africanus</i>). This arrangement creates a striking and orderly visual effect within the landscape.",
        "In another section of the garden, we opted for a more natural and organic approach. Here, we created a grassland-inspired garden using stipas (<i>Stipa tenuissima</i>) and gauras, which intertwine to resemble a rice field. We also incorporated pygmy date palms (<i>Phoenix roebelenii</i>), which rise above the ornamental grasses and create an attractive visual contrast. This area is dominated by grasses, complemented only by white gauras, combining three types of grasses, gaura and dwarf palms to create a harmonious and appealing environment.",
        "Another garden space is separated by Arizona cypresses (<i>Cupressus arizonica</i>), where we planted dense green shrubs and ground-cover species such as <i>Pittosporum tobira</i> 'Nana' and rosemary. This area evokes an almost tropical atmosphere thanks to its lush vegetation, which functions both as a shrub layer and as ground cover. From here, visitors can enjoy panoramic views of the rest of the garden while relaxing in a peaceful setting.",
        "Finally, there is a special area near the pool that connects to the geometric garden of lantanas, bougainvilleas and agapanthus. Here, we created a tunnel formed by tall shrubs and flowering plants. As visitors leave the lawn and pass through this hidden corridor, they cannot see what lies ahead until they emerge into the garden beyond. This creates a magical and surprising experience, revealing the beauty of the landscape only at the very end of the journey.",
        "The Campos Garden, designed and built by Sâ€™Estepa, is an exceptional landscape. Its carefully planned spaces offer a unique combination of geometric design, naturalistic planting and visual surprises, creating a harmonious and captivating environment in which to enjoy the beauty of nature."
      ]
    },
    es: {
      title: "Finca JardÃ­n Campos",
      subtitle: "Un majestuoso paisaje que une la geometrÃ­a y la naturaleza salvaje",
      category: "JardÃ­n de Finca",
      botanical: "Phyla nodiflora, Phytolacca dioica (Bellasombra), Gaura lindheimeri, Rosmarinus officinalis 'Prostratus', Lantana camara, Lantana montevidensis, Bougainvillea sanderiana, Agapanthus africanus, Stipa tenuissima, Phoenix roebelenii, Cupressus arizonica, Pittosporum tobira 'Nana'",
      description: [
        "El JardÃ­n de Campos es un impresionante espacio diseÃ±ado y montado por Sâ€™Estepa. Cada rincÃ³n de este jardÃ­n ha sido cuidadosamente planificado para ofrecer una experiencia visual Ãºnica y agradable.",
        "Al ingresar al jardÃ­n, te encuentras con dos pasillos centrales recubiertos de lippia, que actÃºan como ejes visuales. Al final de estos pasillos, se destaca un majestuoso Ã¡rbol conocido como bellasombra (<i>Phytolacca dioica</i>). A lo largo del camino de entrada a la finca, hemos utilizado lippias (<i>Phyla nodiflora</i>) y gauras de color rojo (<i>Gaura lindheimeri</i>), creando una zona vibrante y acogedora.",
        "El camino que conduce desde la entrada hasta la casa estÃ¡ bordeado por romeros (<i>Rosmarinus officinalis</i> 'Prostratus') y <i>Ficus nitida</i>, brindando un ambiente fragante y elegante. AdemÃ¡s, hemos aÃ±adido lantanas (<i>Lantana camara</i>) en forma de 'S' como elementos decorativos, que aÃ±aden belleza y encanto a la llegada a la finca.",
        "Justo al lado de la casa, hemos creado un jardÃ­n elevado de aproximadamente 300 a 400 m2, cubierto con grava y adornado con plantas bajas. Estas plantas, de diversos colores y de estilo rÃºstico, forman una especie de alfombra de jardinerÃ­a que permite observar todo el jardÃ­n desde la casa.",
        "En la zona de la piscina, hemos utilizado nuevamente la lippia para crear una calle visualmente atractiva. Al fondo de esta Ã¡rea, se encuentra la bellasombra. A ambos lados de la lippia, hemos diseÃ±ado dos espacios con un estilo cuadriculado, utilizando plantas como lantanas blancas (<i>Lantana montevidensis</i>), bugambilias pÃºrpuras (<i>Bougainvillea sanderiana</i>) y agapantos de flor azul (<i>Agapanthus africanus</i>). Este diseÃ±o crea un efecto matemÃ¡tico y ordenado en el paisaje.",
        "Por otro lado, en otra zona del jardÃ­n, hemos optado por un enfoque mÃ¡s natural y orgÃ¡nico. AquÃ­ hemos creado un jardÃ­n de juncos utilizando plantas como stipas (<i>Stipa tenuissima</i>) y gauras, que se entrelazan para formar un paisaje similar a un campo de arroz. AdemÃ¡s, hemos aÃ±adido palmeras robelenis (<i>Phoenix roebelenii</i>) que sobresalen por encima de las gramÃ­neas, brindando un contraste visual interesante. En esta Ã¡rea, predominan las gramÃ­neas, con excepciÃ³n de la gaura blanca. En resumen, hemos combinado tres tipos de gramÃ­neas, la gaura y las palmeras enanas para crear un ambiente armonioso y atractivo.",
        "Otro espacio del jardÃ­n estÃ¡ separado por los cipreses arizonica (<i>Cupressus arizonica</i>), donde hemos colocado arbustos de tonalidades verdes intensas y plantas tapizantes, como los <i>Pittosporum tobira</i> 'Nana' y los romeros. Esta Ã¡rea evoca una sensaciÃ³n amazÃ³nica con su vegetaciÃ³n densa, que no solo actÃºa como arbustos grandes, sino que tambiÃ©n cubre el suelo. Desde aquÃ­, podrÃ¡s disfrutar de una vista panorÃ¡mica del resto del jardÃ­n mientras te encuentras sentado y relajado.",
        "Finalmente, tenemos un espacio especial en la zona de la piscina, que conecta con el jardÃ­n cuadriculado de lantanas, bugambilias y agapantos. En esta Ã¡rea, hemos creado un tÃºnel con arbustos altos y diferentes floraciones, para que al salir del cÃ©sped te sorprendas al atravesar este pasaje oculto antes de llegar a las lantanas y los agapantos. Este espacio te brinda una experiencia mÃ¡gica, ya que no puedes ver lo que hay al final del tÃºnel hasta que llegas a esa Ã¡rea, donde se revela la belleza del jardÃ­n.",
        "El JardÃ­n de Campos, diseÃ±ado y montado por S'Estepa, es un espacio excepcional. Sus distintas zonas, cuidadosamente planificadas, ofrecen una combinaciÃ³n Ãºnica de diseÃ±o matemÃ¡tico, naturalidad y sorpresas visuales, creando un entorno armonioso y fascinante para disfrutar de la belleza de la naturaleza."
      ]
    },
    de: {
      title: "Finca Garten Campos",
      subtitle: "Eine majestÃ¤tische Landschaft, die Geometrie und wilde Natur vereint",
      category: "Landgut Garten",
      botanical: "Phyla nodiflora, Phytolacca dioica (Bellasombra), Gaura lindheimeri, Rosmarinus officinalis 'Prostratus', Lantana camara, Lantana montevidensis, Bougainvillea sanderiana, Agapanthus africanus, Stipa tenuissima, Phoenix roebelenii, Cupressus arizonica, Pittosporum tobira 'Nana'",
      description: [
        "Der Garten von Campos ist eine beeindruckende Gartenanlage, die von Sâ€™Estepa entworfen und umgesetzt wurde. Jeder Bereich dieses Gartens wurde sorgfÃ¤ltig geplant, um ein einzigartiges und angenehmes visuelles Erlebnis zu schaffen.",
        "Beim Betreten des Gartens wird man von zwei zentralen Wegen empfangen, die mit Lippia (<i>Phyla nodiflora</i>) bepflanzt sind und als starke Sichtachsen dienen. Am Ende dieser Wege erhebt sich ein majestÃ¤tischer OmbÃº-Baum (<i>Phytolacca dioica</i>). Entlang der ZufahrtsstraÃŸe zum Anwesen wurden Lippia und rot blÃ¼hende Prachtkerzen (<i>Gaura lindheimeri</i>) verwendet, wodurch ein lebendiger und einladender Eingangsbereich entsteht.",
        "Der Weg vom Eingang zum Haus wird von kriechendem Rosmarin (<i>Rosmarinus officinalis</i> 'Prostratus') und <i>Ficus nitida</i> gesÃ¤umt und verleiht dem Bereich eine elegante und duftende AtmosphÃ¤re. ZusÃ¤tzlich wurden Lantanen (<i>Lantana camara</i>) in einer geschwungenen 'S'-Form als dekorative Elemente integriert, die dem Eingangsbereich besondere SchÃ¶nheit und Charakter verleihen.",
        "Direkt neben dem Haus entstand ein erhÃ¶ht angelegter Gartenbereich von etwa 300 bis 400 mÂ², der mit Kies bedeckt und mit niedrig wachsenden Pflanzen gestaltet wurde. Die rustikalen Pflanzen in verschiedenen FarbtÃ¶nen bilden einen lebendigen Pflanzenteppich, der vom Haus aus einen umfassenden Blick auf den gesamten Garten ermÃ¶glicht.",
        "Im Poolbereich wurde erneut Lippia eingesetzt, um eine attraktive Sichtachse zu schaffen. Am Ende dieser FlÃ¤che befindet sich wiederum ein OmbÃº-Baum. Zu beiden Seiten der Lippia wurden zwei geometrisch gestaltete Gartenbereiche angelegt, die mit weiÃŸen Lantanen (<i>Lantana montevidensis</i>), violetten Bougainvilleen (<i>Bougainvillea sanderiana</i>) und blau blÃ¼henden Schmucklilien (<i>Agapanthus africanus</i>) bepflanzt sind. Dieses Design erzeugt eine klare, geordnete und beinahe mathematische Struktur innerhalb der Landschaft.",
        "In einem anderen Teil des Gartens wurde ein natÃ¼rlicherer und organischerer Ansatz gewÃ¤hlt. Dort entstand ein von Graslandschaften inspirierter Bereich mit FedergrÃ¤sern (<i>Stipa tenuissima</i>) und Prachtkerzen, die sich miteinander verweben und an ein Reisfeld erinnern. ErgÃ¤nzt wird dieser Bereich durch Zwergdattelpalmen (<i>Phoenix roebelenii</i>), die Ã¼ber den GrÃ¤sern emporragen und einen interessanten Kontrast schaffen. Die Gestaltung basiert hauptsÃ¤chlich auf GrÃ¤sern, ergÃ¤nzt durch weiÃŸe Gaura-Pflanzen und die Zwergpalmen, wodurch eine harmonische und ansprechende AtmosphÃ¤re entsteht.",
        "Ein weiterer Gartenraum wird durch Arizona-Zypressen (<i>Cupressus arizonica</i>) abgegrenzt. Hier wurden immergrÃ¼ne StrÃ¤ucher und Bodendecker wie <i>Pittosporum tobira</i> 'Nana' und Rosmarin gepflanzt. Die dichte Vegetation erzeugt eine fast tropische AtmosphÃ¤re und dient sowohl als strukturgebende Strauchschicht als auch als Bodendecker. Von diesem Bereich aus genieÃŸt man einen herrlichen Blick Ã¼ber den restlichen Garten und kann die Umgebung in entspannter AtmosphÃ¤re erleben.",
        "SchlieÃŸlich gibt es einen besonderen Bereich in der NÃ¤he des Pools, der mit dem geometrischen Garten aus Lantanen, Bougainvilleen und Schmucklilien verbunden ist. Hier wurde ein Tunnel aus hohen StrÃ¤uchern und blÃ¼henden Pflanzen geschaffen. Beim Verlassen der RasenflÃ¤che und Durchqueren dieses verborgenen Durchgangs bleibt das Ziel zunÃ¤chst verborgen. Erst am Ende des Weges erÃ¶ffnet sich die SchÃ¶nheit des dahinterliegenden Gartens. Dies schafft ein Ã¼berraschendes und beinahe magisches Erlebnis.",
        "Der Garten von Campos, entworfen und realisiert von Sâ€™Estepa, ist eine auÃŸergewÃ¶hnliche Gartenanlage. Seine sorgfÃ¤ltig gestalteten Bereiche verbinden geometrische Strukturen, natÃ¼rliche Pflanzungen und Ã¼berraschende Blickachsen zu einem harmonischen und faszinierenden Gesamterlebnis, das die SchÃ¶nheit der Natur eindrucksvoll zur Geltung bringt."
      ]
    }
  },
  {
    slug: "costadelacalma",
    location: "Costa de la Calma, CalviÃ¡",
    year: "2022",
    architect: null,
    video: null,
    cover: "/portfolio/costadelacalma/LANDSCAPE-GARDEN-DESIGN-MALLORCA-COSTA-DE-LA-CALMA-SESTEPA-DESIGN.webp",
    images: [
      "LANDSCAPE-GARDEN-DESIGN-MALLORCA-COSTA-DE-LA-CALMA-SESTEPA-DESIGN-1-1.webp",
      "LANDSCAPE-GARDEN-DESIGN-MALLORCA-COSTA-DE-LA-CALMA-SESTEPA-DESIGN-1-2.webp",
      "LANDSCAPE-GARDEN-DESIGN-MALLORCA-COSTA-DE-LA-CALMA-SESTEPA-DESIGN-1-3.webp",
      "LANDSCAPE-GARDEN-DESIGN-MALLORCA-COSTA-DE-LA-CALMA-SESTEPA-DESIGN-1-4.webp",
      "LANDSCAPE-GARDEN-DESIGN-MALLORCA-COSTA-DE-LA-CALMA-SESTEPA-DESIGN-1-5.webp",
      "LANDSCAPE-GARDEN-DESIGN-MALLORCA-COSTA-DE-LA-CALMA-SESTEPA-DESIGN.webp"
    ],
    en: {
      title: "Costa de la Calma",
      subtitle: "A tropical and serene atmosphere celebrating texture and privacy",
      category: "Residential Garden",
      botanical: "Bambusa vulgaris, Strelitzia nicolai, Phormium tenax variegata, Phoenix dactylifera",
      description: [
        "Located in Costa de La Calma, CalviÃ , this garden harmoniously combines a variety of natural elements and lush plants.",
        "As you venture into this garden, you will find yourself surrounded by a carefully selected array of plants that create a tropical and Zen atmosphere.",
        "We have also incorporated a small grassy area and preserved the existing palm trees, adding an authentic touch to this space.",
        "To achieve a visually captivating design, we have created color lines in the garden, using vibrant tones such as the yellow of the Phormium and the striking green and yellow of the bamboo. These plants intertwine in a play of colors that complement the existing palm trees. The result is a truly beautiful garden that invites relaxation and contemplation.",
      ]
    },
    es: {
      title: "Costa de la Calma",
      subtitle: "Una atmÃ³sfera tropical y serena que celebra la textura y la privacidad",
      category: "JardÃ­n Residencial",
      botanical: "Bambusa vulgaris, Strelitzia nicolai, Phormium tenax variegata, Phoenix dactylifera",
      description: [
        "Situado en Costa de La Calma, CalviÃ , este jardÃ­n combina armoniosamente una variedad de elementos naturales y plantas exuberantes.",
        "Al adentrarse en este jardÃ­n, se encontrarÃ¡ rodeado de una cuidada selecciÃ³n de plantas que crean una atmÃ³sfera tropical y zen, entre ellas elegantes bambÃºes, llamativas Strelitzias y exquisitos Phormium variegata. TambiÃ©n hemos incorporado una pequeÃ±a zona de cÃ©sped y conservado las palmeras existentes.",
        "Para lograr un diseÃ±o visualmente cautivador, hemos creado lÃ­neas de color en el jardÃ­n, utilizando tonos vibrantes como el amarillo del Phormium y el llamativo verde y amarillo del bambÃº. El resultado es un jardÃ­n realmente hermoso que invita a la relajaciÃ³n y la contemplaciÃ³n.",
        "AdemÃ¡s de su funciÃ³n estÃ©tica, el bambÃº desempeÃ±a un papel importante a la hora de proporcionar intimidad: lo hemos colocado en las paredes para separar los espacios vecinos y reducir el ruido del entorno. En las jardineras centrales, Phormium variegata, Strelitzia augusta y Strelitzia reginae crean un interesante contraste de texturas y dinamismo."
      ]
    },
    de: {
      title: "Costa de la Calma",
      subtitle: "Eine tropische und heitere AtmosphÃ¤re, die Textur und PrivatsphÃ¤re zelebriert",
      category: "Wohnbereich Garten",
      botanical: "Bambusa vulgaris, Strelitzia nicolai, Phormium tenax variegata, Phoenix dactylifera",
      description: [
        "Dieser Garten in Costa de La Calma, CalviÃ , vereint harmonisch eine Vielzahl von natÃ¼rlichen Elementen und Ã¼ppigen Pflanzen.",
        "Wenn Sie sich in diesen Garten begeben, werden Sie von einer sorgfÃ¤ltig ausgewÃ¤hlten Auswahl an Pflanzen umgeben sein, die eine tropische und Zen-AtmosphÃ¤re schaffen â€” darunter eleganter Bambus, auffÃ¤llige Strelitzien und exquisites Phormium variegata. Wir haben auch eine kleine RasenflÃ¤che angelegt und die vorhandenen Palmen erhalten.",
        "Um ein visuell fesselndes Design zu erreichen, haben wir Farblinien im Garten geschaffen, die leuchtende TÃ¶ne wie das Gelb des Phormiums und das auffÃ¤llige GrÃ¼n und Gelb des Bambus verwenden. Das Ergebnis ist ein wirklich schÃ¶ner Garten, der zur Entspannung und Kontemplation einlÃ¤dt.",
        "Neben seiner Ã¤sthetischen Funktion spielt der Bambus auch eine wichtige Rolle bei der Wahrung der PrivatsphÃ¤re: Wir haben ihn an den WÃ¤nden angebracht, um benachbarte RÃ¤ume abzutrennen und den LÃ¤rm zu reduzieren. In den mittleren PflanzgefÃ¤ÃŸen schaffen Phormium variegata, Strelitzia augusta und Strelitzia reginae einen interessanten Kontrast."
      ]
    }
  },
  {
    slug: "crestatx-garden-design",
    location: "Crestatx, Sa Pobla",
    year: "2023",
    architect: null,
    video: "https://www.youtube.com/embed/-xs_kKaUnGA?feature=oembed",
    cover: "/portfolio/crestatx-garden-design/garden-design-mallorca-crestatx-garden-design-sestepa.webp",
    images: [
      "landscape design render mallorca crestatx sestepa design (1).png",
      "landscape design render mallorca crestatx sestepa design (2).png",
      "landscape design render mallorca crestatx sestepa design (3).png",
      "landscape design render mallorca crestatx sestepa design (4).png",
      "landscape design render mallorca crestatx sestepa design (5).png",
      "landscape design 2D mallorca crestatx sestepa design.png.png",
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
      title: "Crestatx",
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
      title: "Crestatx",
      subtitle: "Un jardÃ­n moderno y de bajo consumo hÃ­drico que sustituye el cÃ©sped por capas minerales",
      category: "JardÃ­n Sostenible",
      botanical: "Cycas revoluta, Strelitzia reginae, Salvia rosmarinus, Pittosporum tobira, Agapanthus praecox, Ophiopogon japonicus",
      description: [
        "En el jardÃ­n de Crestatx, hemos llevado a cabo una importante transformaciÃ³n sustituyendo el cÃ©sped por un diseÃ±o cuidadosamente planificado. Hemos optado por piedras de rÃ­o de tamaÃ±o mini para facilitar la circulaciÃ³n, combinadas con una selecciÃ³n de plantas estratÃ©gicamente colocadas para crear un armonioso equilibrio visual.",
        "En la entrada predominan las gramÃ­neas y las salvias, que ofrecen una bienvenida natural y fresca. Alrededor de la piscina, hemos optado por especies arbustivas inspiradas en los trÃ³picos, como cicadÃ¡ceas, aves del paraÃ­so, ficus y pittosporum.",
        "En la parte trasera del jardÃ­n, hemos creado islas de vegetaciÃ³n que conducen hacia la zona lateral. Destacamos una zona arbolada, bordeada por plantas en forma de cinta como el Ophiopogon y el Agapanthus, enmarcada elegantemente con acero corten.",
        "En resumen, nuestro principal objetivo al diseÃ±ar este jardÃ­n era reducir el consumo de agua eliminando el cÃ©sped y creando al mismo tiempo senderos peatonales entre las plantas para disfrutar plenamente de la belleza y la serenidad del espacio verde."
      ]
    },
    de: {
      title: "Crestatx",
      subtitle: "Ein moderner, wassersparender Garten, der den Rasen durch reichhaltige Mineralschichten ersetzt",
      category: "Nachhaltiger Garten",
      botanical: "Cycas revoluta, Strelitzia reginae, Salvia rosmarinus, Pittosporum tobira, Agapanthus praecox, Ophiopogon japonicus",
      description: [
        "Im Garten von Crestatx haben wir eine bedeutende Umgestaltung vorgenommen, indem wir den Rasen durch eine sorgfÃ¤ltig geplante Gestaltung ersetzt haben. Wir haben uns fÃ¼r Flusssteine im Miniformat entschieden, kombiniert mit strategisch platzierten Pflanzen fÃ¼r ein harmonisches visuelles Gleichgewicht.",
        "Im Eingangsbereich Ã¼berwiegen GrÃ¤ser und Salbei, die einen natÃ¼rlichen und frischen Eindruck machen. Rund um den Pool haben wir uns fÃ¼r tropisch inspirierte Straucharten wie Cycadeen, ParadiesvÃ¶gel, Ficus und Pittosporum entschieden.",
        "Im hinteren Teil des Gartens haben wir Vegetationsinseln angelegt. Wir heben ein Waldgebiet hervor, das von bandartigen Pflanzen wie Ophiopogon und Agapanthus sowie von StrÃ¤uchern wie Myrten gesÃ¤umt wird, elegant umrahmt mit Cortenstahl.",
        "Zusammenfassend lag unser Hauptaugenmerk darauf, den Wasserverbrauch zu reduzieren, indem wir den Rasen eliminierten und gleichzeitig FuÃŸgÃ¤ngerwege zwischen den Pflanzen anlegten, um die SchÃ¶nheit und Ruhe der GrÃ¼nflÃ¤che voll und ganz zu genieÃŸen."
      ]
    }
  },
  {
    slug: "hotelcabotlasvelas",
    location: "Puerto PollenÃ§a, Mallorca",
    year: "2022",
    architect: null,
    video: null,
    cover: "/portfolio/hotelcabotlasvelas/garden-design-mallorca-hotelcabotlasvelas-sestepa.webp",
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
      subtitle: "Un oasis mineral de baja altura optimizado para vistas panorÃ¡micas amplias",
      category: "Paisajismo Comercial",
      botanical: "Chamaerops humilis, Agave attenuata, Lavandula angustifolia, Rosmarinus prostratus, Stipa tenuissima, Agapanthus praecox, Pistacia lentiscus",
      description: [
        "Un elegante jardÃ­n que resalta la belleza del entorno mediterrÃ¡neo para disfrute de los huÃ©spedes del hotel.",
        "En el jardÃ­n del Hotel Cabot Las Velas, hemos transformado completamente el espacio, sustituyendo las zonas de cÃ©sped y pradera por una cautivadora capa de grava volcÃ¡nica que contrasta con la exuberante variedad de tonos verdes y alturas.",
        "Para conseguir este efecto, hemos creado grupos de plantas tapizantes en puntos estratÃ©gicos â€” lavanda, romero, hierba stipa y agapantos â€” junto con lentisco, pittosporum tobira nana, Chamaerops humilis y agave attenuata.",
        "Hemos evitado el crecimiento de plantas altas para conseguir una vista completa desde cualquier punto. Desde la zona de la piscina, los huÃ©spedes pueden disfrutar de una vista panorÃ¡mica y espaciosa donde diferentes colores y alturas se entrelazan en perfecta armonÃ­a."
      ]
    },
    de: {
      title: "Hotel Cabot Las Velas",
      subtitle: "Eine flache mineralische Oase, optimiert fÃ¼r weite Panoramablicke",
      category: "Gewerbliche Landschaft",
      botanical: "Chamaerops humilis, Agave attenuata, Lavandula angustifolia, Rosmarinus prostratus, Stipa tenuissima, Agapanthus praecox, Pistacia lentiscus",
      description: [
        "Ein eleganter Garten, der die SchÃ¶nheit der mediterranen Umgebung hervorhebt und den HotelgÃ¤sten zur Freude gereicht.",
        "Im Garten des Hotels Cabot Las Velas haben wir den Raum komplett umgestaltet und die Rasen- und WiesenflÃ¤chen durch eine bezaubernde Schicht aus Vulkankies ersetzt, der mit der Ã¼ppigen Vielfalt an GrÃ¼ntÃ¶nen und -hÃ¶hen kontrastiert.",
        "An strategischen Punkten haben wir bodendeckende Pflanzengruppen aus Lavendel, Rosmarin, Stipa-Gras und Agapanthus gepflanzt, ergÃ¤nzt durch Mastix, Pittosporum tobira nana, Chamaerops humilis und Agave attenuata.",
        "Wir haben das Wachstum hoher Pflanzen vermieden, um von jedem Punkt aus einen vollstÃ¤ndigen Ãœberblick zu erhalten. Vom Poolbereich aus genieÃŸen die GÃ¤ste einen weiten Panoramablick, bei dem verschiedene Farben und HÃ¶hen in perfekter Harmonie ineinander Ã¼bergehen."
      ]
    }
  },
  {
    slug: "garden-design-llubi-mallorca",
    location: "LlubÃ­, Mallorca",
    year: "2023",
    architect: null,
    video: null,
    cover: "/portfolio/garden-design-llubi-mallorca/garden-design-mallorca-garden-design-llubi-mallorca-sestepa.webp",
    images: [
      "LLUBI-GARDEN-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-13.webp",
      "GARDEN-DESIGN-MALLORCA-LLUBI-SESTEPA-LANDSCAPE-DESIGN-3.png",
      "GARDEN-DESIGN-MALLORCA-LLUBI-SESTEPA-LANDSCAPE-DESIGN-5.png",
      "GARDEN-DESIGN-MALLORCA-LLUBI-SESTEPA-LANDSCAPE-DESIGN-6.png",
      "GARDEN-DESIGN-MALLORCA-LLUBI-SESTEPA-LANDSCAPE-DESIGN-8.png",
      "LLUBI-GARDEN-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-10.webp",
      "LLUBI-GARDEN-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-16.webp",
      "LLUBI-GARDEN-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-17.webp",
      "LLUBI-GARDEN-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-2.webp",
      "LLUBI-GARDEN-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-3.webp",
      "LLUBI-GARDEN-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-4.webp",
      "LLUBI-GARDEN-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-5.webp",
      "LLUBI-GARDEN-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-8.webp",
      "LLUBI-GARDEN-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-9.webp",
      "LLUBI-GARDEN-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-_19_.webp",
      "LLUBI-GARDEN-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-_20_.webp",
      "LLUBI-GARDEN-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-_22_.webp",
      "LLUBI-GARDEN-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-_23_.webp",
      "LLUBI-GARDEN-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-_24_.webp"
    ],
    en: {
      title: "LlubÃ­",
      subtitle: "A low-maintenance country escape structured with wildflowers and fire",
      category: "Residential Garden",
      botanical: "Jacaranda mimosifolia, Salvia rosmarinus, Lavandula dentata, Wildflowers",
      description: [
        "LlubÃ­ garden, our landscape design focuses on creating an aesthetic, functional, and sustainable space. First, we prioritized water conservation by avoiding lawns. Instead, we opted for a large gravel area to reduce irrigation needs.",
        "Next to the house wall, we installed gravel stabilizers to create a solid foundation. As a result, this provides an ideal space for morning coffee or outdoor dining. Additionally, an umbrella sits at the highest point of the garden. This placement offers a panoramic view and allows for full enjoyment of the Mediterranean surroundings.",
        "To break the monotony of the gravel, we introduced islands of rosemary and lavender. Specifically, we alternated these species across five long, narrow (7m x 2m each) . As these plants mature, they will partially cover the gravel and provide a vibrant color contrast. Furthermore, five islands of wildflowers serve as seasonal focal points throughout the space.",
        "In the center of the garden, we incorporated a fireplace. This element creates a perfect gathering spot for family and friends. To provide natural shade, we planted three Jacarandas around this central area. Ultimately, the design emphasizes low maintenance and a wild, natural character through a high density of wildflowers.",
      ]
    },
    es: {
      title: "LlubÃ­",
      subtitle: "Un escape de campo de bajo mantenimiento estructurado con flores silvestres y fuego",
      category: "JardÃ­n Residencial",
      botanical: "Jacaranda mimosifolia, Salvia rosmarinus, Lavandula dentata, Flores Silvestres",
      description: [
        "En el jardÃ­n de LlubÃ­, nuestro diseÃ±o paisajÃ­stico se centra en crear un espacio estÃ©tico, funcional y sostenible. Hemos dado prioridad a la conservaciÃ³n del agua evitando el cÃ©sped en favor de una gran zona de grava.",
        "Junto al muro de la casa, hemos instalado estabilizadores de grava para crear un espacio ideal para el desayuno o la merienda, con una sombrilla en el punto mÃ¡s alto que ofrece una vista panorÃ¡mica del entorno.",
        "Para romper la monotonÃ­a de la grava, hemos introducido islas de romero y lavanda en cinco parcelas largas y estrechas (7 m x 2 m cada una), junto con cinco islas de flores silvestres que servirÃ¡n como puntos de floraciÃ³n.",
        "En el centro del jardÃ­n, hemos incorporado una chimenea rodeada de tres jacarandas que proporcionan sombra. El diseÃ±o pretende ser de bajo mantenimiento, con un carÃ¡cter salvaje y natural que refleja la belleza del paisaje con una intervenciÃ³n mÃ­nima."
      ]
    },
    de: {
      title: "LlubÃ­",
      subtitle: "Ein pflegeleichter RÃ¼ckzugsort auf dem Land mit Wildblumen und Feuerstelle",
      category: "Wohnbereich Garten",
      botanical: "Jacaranda mimosifolia, Salvia rosmarinus, Lavandula dentata, Wildblumen",
      description: [
        "Im Garten von LlubÃ­ konzentriert sich unser Landschaftsentwurf auf einen Ã¤sthetischen, funktionalen und nachhaltigen Raum. Wir haben der Wassereinsparung PrioritÃ¤t eingerÃ¤umt und auf RasenflÃ¤chen zugunsten einer groÃŸen Kieszone verzichtet.",
        "Entlang der Hauswand haben wir Kiesstabilisatoren installiert, um einen idealen Bereich fÃ¼r FrÃ¼hstÃ¼ck oder Mahlzeiten im Freien zu schaffen, mit einem Sonnenschirm am hÃ¶chsten Punkt des Gartens und Panoramablick.",
        "Um die Monotonie des Kieses zu durchbrechen, haben wir Inseln aus Rosmarin und Lavendel in fÃ¼nf langen, schmalen Parzellen (je 7 m x 2 m) angelegt, ergÃ¤nzt durch fÃ¼nf Wildblumeninseln als saisonale Blickpunkte.",
        "In der Mitte des Gartens haben wir einen Kamin eingebaut, umgeben von drei Jacarandas, die Schatten spenden. Der Entwurf ist pflegeleicht konzipiert und verleiht dem Raum einen wilden, natÃ¼rlichen Charakter mit minimaler Intervention."
      ]
    }
  },
  {
    slug: "sant-llorenc",
    location: "Sant LlorenÃ§, Mallorca",
    year: "2023",
    architect: null,
    video: "https://www.youtube.com/embed/IdGlxUKjhUQ?feature=oembed",
    cover: "/portfolio/sant-llorenc/images/garden-design-mallorca-sant-llorenc-sestepa.webp",
    ogImage: "/portfolio/sant-llorenc/images/landscape-garden-design-mallorca-sestepa-landscape-design-sant-llorenc-02.jpg",
    images: [
      "landscape-garden-design-mallorca-sestepa-landscape-design-sant-llorenc-10.jpg",
      "landscape-garden-design-mallorca-sestepa-landscape-design-sant-llorenc-12.jpg",
      "landscape-garden-design-mallorca-sestepa-landscape-design-sant-llorenc-03.jpg",
      "landscape-garden-design-mallorca-sestepa-landscape-design-sant-llorenc-04.jpg",
      "landscape-garden-design-mallorca-sestepa-landscape-design-sant-llorenc-05.jpg",
      "landscape-garden-design-mallorca-sestepa-landscape-design-sant-llorenc-06.jpg",
      "landscape-garden-design-mallorca-sestepa-landscape-design-sant-llorenc-07.jpg",
      "landscape-garden-design-mallorca-sestepa-landscape-design-sant-llorenc-08.jpg",
      "landscape-garden-design-mallorca-sestepa-landscape-design-sant-llorenc-09.jpg",
      "landscape-garden-design-mallorca-sestepa-landscape-design-sant-llorenc-01.jpg",
      "landscape-garden-design-mallorca-sestepa-landscape-design-sant-llorenc-11.jpg",
      "landscape-garden-design-mallorca-sestepa-landscape-design-sant-llorenc-02.jpg"
    ],
    en: {
      title: "Sant LlorenÃ§",
      subtitle: "A sustainable landscape designed as a gradual reveal",
      category: "Estate Garden",
      botanical: "Olea europaea (Centenary), Cupressus sempervirens, Rosmarinus officinalis, Stipa tenuissima, Perovskia atriplicifolia, Teucrium fruticans, Chamaerops humilis",
      description: [
        "The Sant LlorenÃ§ region is defined by a warm, dry climate. We propose a sustainable garden utilizing drought-resistant plants with low water requirements. This design preserves native species while reinforcing Mallorcan identity.",
        "A key concept is to keep the house hidden from the entrance, so it appears as a surprise at the end of the path, emerging from the vegetation. Centenary olive trees (<i>Olea europaea</i>) are planted in strategic, irregular positions to anchor the landscape. As a complement, irregular cypresses (<i>Cupressus sempervirens</i>) rise above the rest of the vegetation, evoking both a Tuscan and a Mallorcan atmosphere.",
        "The garden fades gradually into the natural landscape surrounding the house. The outer edges transform into a traditional Mallorcan field, ensuring smooth integration. We begin by pruning existing vegetation and clearing the soil to prepare for new planting.",
        "For the larger open spaces, we propose informal but generous groupings of drought-tolerant species â€” <i>Lavandula dentata</i>, <i>Rosmarinus officinalis</i> 'Prostratus', <i>Perovskia atriplicifolia</i>, <i>Gaura lindheimeri</i>, <i>Teucrium fruticans</i>, <i>Pistacia lentiscus</i> and <i>Westringia fruticosa</i> â€” creating natural corridors for relaxed walks through the garden."
      ]
    },
    es: {
      title: "Sant LlorenÃ§",
      subtitle: "Un paisaje sostenible diseÃ±ado como una revelaciÃ³n gradual",
      category: "JardÃ­n de Finca",
      botanical: "Olea europaea (Centenario), Cupressus sempervirens, Rosmarinus officinalis, Stipa tenuissima, Perovskia atriplicifolia, Teucrium fruticans, Chamaerops humilis",
      description: [
        "La zona de Sant LlorenÃ§ se define por su clima cÃ¡lido y seco. Por ello, proponemos un jardÃ­n mÃ¡s sostenible, basado en plantas resistentes a la sequÃ­a y al sol, con bajos requerimientos hÃ­dricos. El diseÃ±o busca preservar las especies autÃ³ctonas al tiempo que refuerza la identidad mediterrÃ¡nea y mallorquina.",
        "Alrededor de la casa, el jardÃ­n se desvanece gradualmente en el paisaje natural. Los bordes exteriores de la propiedad se transforman en un campo tradicional mallorquÃ­n, asegurando una suave integraciÃ³n con el entorno. El proceso comienza con la poda de la vegetaciÃ³n existente y la limpieza del suelo, preparÃ¡ndolo para la nueva plantaciÃ³n.",
        "Un concepto clave es mantener la casa oculta desde la entrada, de modo que aparezca como una sorpresa al final del camino, emergiendo de entre la vegetaciÃ³n. Los olivos centenarios (<i>Olea europaea</i>) se plantan en posiciones estratÃ©gicas e irregulares para anclar el paisaje. Como complemento, cipreses irregulares (<i>Cupressus sempervirens</i>) se elevan sobre el resto de la vegetaciÃ³n, evocando un ambiente tanto toscano como mallorquÃ­n.",
        "En los espacios abiertos mÃ¡s grandes, proponemos agrupaciones informales pero generosas de especies tolerantes a la sequÃ­a, como: <i>Lavandula dentata</i>, <i>Rosmarinus officinalis</i> 'Prostratus', <i>Perovskia atriplicifolia</i>, <i>Gaura lindheimeri</i>, <i>Leucophyllum</i>, <i>Teucrium fruticans</i>, <i>Pistacia lentiscus</i> y <i>Westringia fruticosa</i>. Estos grupos crearÃ¡n pasillos naturales dentro del jardÃ­n, fomentando los paseos relajados y ofreciendo una experiencia envolvente. Los senderos se integrarÃ¡n discretamente en el diseÃ±o general, manteniendo una atmÃ³sfera natural, relajada y armoniosa. En ciertas zonas, la vegetaciÃ³n se abrirÃ¡ ligeramente para formar pequeÃ±os rincones acogedores donde sentarse y disfrutar del entorno.",
      ]
    },
    de: {
      title: "Sant LlorenÃ§",
      subtitle: "Eine nachhaltige Landschaft, konzipiert als allmÃ¤hliche EnthÃ¼llung",
      category: "Landgut Garten",
      botanical: "Olea europaea (Centenary), Cupressus sempervirens, Rosmarinus officinalis, Stipa tenuissima, Perovskia atriplicifolia, Teucrium fruticans, Chamaerops humilis",
      description: [
        "Das Gebiet von Sant LlorenÃ§ ist durch sein warmes, trockenes Klima geprÃ¤gt. Aus diesem Grund schlagen wir einen nachhaltigeren Garten vor, der auf trockenheits- und sonnenresistenten Pflanzen mit geringem Wasserbedarf basiert. Der Entwurf zielt darauf ab, einheimische Arten zu erhalten und gleichzeitig die mediterrane und mallorquinische IdentitÃ¤t zu stÃ¤rken.",
        "Um das Haus herum geht der Garten allmÃ¤hlich in die natÃ¼rliche Landschaft Ã¼ber. Die Ã¤uÃŸeren RÃ¤nder des GrundstÃ¼cks werden in ein traditionelles mallorquinisches Feld verwandelt, das sich nahtlos in die Umgebung einfÃ¼gt. Der Prozess beginnt mit dem Beschneiden der vorhandenen Vegetation und dem AusrÃ¤umen des Bodens, um ihn fÃ¼r die Neupflanzung vorzubereiten.",
        "Ein SchlÃ¼sselkonzept besteht darin, das Haus vor dem Eingang zu verstecken, so dass es am Ende des Weges als Ãœberraschung aus der Vegetation auftaucht. HundertjÃ¤hrige OlivenbÃ¤ume (<i>Olea europaea</i>) werden an strategischen, unregelmÃ¤ÃŸigen Stellen gepflanzt, um die Landschaft zu verankern. ErgÃ¤nzend dazu erheben sich unregelmÃ¤ÃŸige Zypressen (<i>Cupressus sempervirens</i>) Ã¼ber den Rest der Vegetation, die sowohl eine toskanische als auch eine mallorquinische AtmosphÃ¤re hervorrufen.",
        "FÃ¼r die grÃ¶ÃŸeren FreiflÃ¤chen schlagen wir lockere, aber groÃŸzÃ¼gige Gruppierungen trockenheitstoleranter Arten vor, wie z.B.: <i>Lavandula dentata</i>, <i>Rosmarinus officinalis</i> 'Prostratus', <i>Perovskia atriplicifolia</i>, <i>Gaura lindheimeri</i>, <i>Leucophyllum</i>, <i>Teucrium fruticans</i>, <i>Pistacia lentiscus</i>, und <i>Westringia fruticosa</i>. Diese Gruppen werden natÃ¼rliche Korridore im Garten bilden, die zu entspannten SpaziergÃ¤ngen einladen und ein intensives Erlebnis bieten. Die Wege werden sich diskret in das Gesamtdesign einfÃ¼gen und eine natÃ¼rliche, entspannte und harmonische AtmosphÃ¤re schaffen. In bestimmten Bereichen wird sich die Vegetation leicht Ã¶ffnen und kleine, einladende PlÃ¤tze bilden, an denen man sitzen und die Umgebung genieÃŸen kann.",
      ]
    }
  },
  {
    slug: "terrace-garden-santa-eugenia",
    location: "Santa EugÃ¨nia, Mallorca",
    year: "2023",
    architect: null,
    video: null,
    cover: "/portfolio/terrace-garden-santa-eugenia/garden-design-mallorca-terrace-garden-santa-eugenia-sestepa.jpg",
    coverPosition: "center top",
    images: [
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
      title: "Santa EugÃ¨nia",
      subtitle: "Softening contemporary concrete with vertical greenery",
      category: "Terrace Garden",
      botanical: "Climbing Hedera, Trachelospermum jasminoides, Bougainvillea, Groundcovers",
      description: [
        "In the project for this terrace in Santa EugÃ¨nia, we have designed several interventions to incorporate vegetation and soften the presence of the predominant concrete. We have installed large planters at different heights along the terrace. These planters contain plants of various shades and blooms, selected for their ground-covering characteristics and their ability to cover the soil completely. The goal is to create green spots that add life and color to the terrace.",
        "On the stairs, we have left the central staircase free and placed planters on each side at different levels.",
        "Next to the pool, we have added large flowerbeds that break the monotony of the concrete, creating an island of vegetation that acts as a green lung within the space.",
        "For the 30-35 meter walls, we have installed rectangular iron structures that are 3 meters high and 50 centimeters wide. These structures support climbing plants that, as they grow, will add vegetation to the wall without completely covering it. This avoids a feeling of saturation and dirtiness, maintaining a clean and orderly design.",
      ]
    },
    es: {
      title: "Santa EugÃ¨nia",
      subtitle: "Suavizando el hormigÃ³n contemporÃ¡neo con vegetaciÃ³n vertical",
      category: "JardÃ­n de Terraza",
      botanical: "Climbing Hedera, Trachelospermum jasminoides, Bougainvillea, Tapizantes",
      description: [
        "En el proyecto de esta terraza en Santa EugÃ¨nia, hemos diseÃ±ado varias intervenciones para incorporar vegetaciÃ³n y suavizar la presencia del hormigÃ³n predominante. Hemos instalado grandes jardineras a diferentes alturas con plantas tapizantes seleccionadas para cubrir el suelo por completo.",
        "En las escaleras, hemos dejado libre la escalera central y colocado jardineras a cada lado en distintos niveles.",
        "Junto a la piscina, hemos aÃ±adido grandes parterres que rompen la monotonÃ­a del hormigÃ³n, creando una isla de vegetaciÃ³n que actÃºa como pulmÃ³n verde del espacio.",
        "Para los muros de 30-35 metros, hemos instalado estructuras de hierro rectangulares de 3 metros de altura que soportan plantas trepadoras, aÃ±adiendo vegetaciÃ³n sin saturar el diseÃ±o y manteniendo un aspecto limpio y ordenado."
      ]
    },
    de: {
      title: "Santa EugÃ¨nia",
      subtitle: "ZeitgenÃ¶ssischen Beton mit vertikalem GrÃ¼n abmildern",
      category: "Terrassengarten",
      botanical: "Climbing Hedera, Trachelospermum jasminoides, Bougainvillea, Bodendecker",
      description: [
        "Bei dem Projekt fÃ¼r diese Terrasse in Santa EugÃ¨nia haben wir verschiedene MaÃŸnahmen ergriffen, um die Vegetation zu integrieren und die PrÃ¤senz des vorherrschenden Betons zu mildern. Wir haben groÃŸe PflanzgefÃ¤ÃŸe in verschiedenen HÃ¶hen entlang der Terrasse aufgestellt. Diese PflanzgefÃ¤ÃŸe enthalten Pflanzen in verschiedenen FarbtÃ¶nen und mit unterschiedlichen BlÃ¼ten, die aufgrund ihrer bodenbedeckenden Eigenschaften und ihrer FÃ¤higkeit, den Boden vollstÃ¤ndig zu bedecken, ausgewÃ¤hlt wurden. Das Ziel ist es, grÃ¼ne Flecken zu schaffen, die der Terrasse Leben und Farbe verleihen.",
        "Bei der Treppe haben wir die zentrale Treppe frei gelassen und auf jeder Seite PflanzgefÃ¤ÃŸe auf verschiedenen Ebenen aufgestellt.",
        "Neben dem Pool haben wir groÃŸe Blumenbeete angelegt, die die Monotonie des Betons durchbrechen und eine Insel der Vegetation schaffen, die wie eine grÃ¼ne Lunge im Raum wirkt.",
        "FÃ¼r die 30-35 Meter hohen Mauern haben wir rechteckige Eisenstrukturen installiert, die 3 Meter hoch und 50 Zentimeter breit sind. Diese Strukturen tragen Kletterpflanzen, die, wenn sie wachsen, die Mauer bewachsen, ohne sie vollstÃ¤ndig zu bedecken. So wird ein GefÃ¼hl der SÃ¤ttigung und Verschmutzung vermieden und ein sauberes und ordentliches Design beibehalten.",
      ]
    }
  },
  {
    slug: "santa-ponsa",
    location: "Santa Ponsa, CalviÃ ",
    year: "2023",
    architect: null,
    video: null,
    cover: "/portfolio/santa-ponsa/images/GARDEN-DESIGN-MALLORCA-SANTA-PONSA-SESTEPA-1.jpg",
    images: [
        "GARDEN-DESIGN-MALLORCA-SANTA-PONSA-SESTEPA-1.jpg",
        "GARDEN-DESIGN-MALLORCA-SANTA-PONSA-SESTEPA-2.jpg",
        "GARDEN-DESIGN-MALLORCA-SANTA-PONSA-SESTEPA-3.jpg",
        "GARDEN-DESIGN-MALLORCA-SANTA-PONSA-SESTEPA-4.jpg",
        "GARDEN-DESIGN-MALLORCA-SANTA-PONSA-SESTEPA-5.jpg",
      ],
    en: {
      title: "Santa Ponsa",
      subtitle: "Honoring the original contours and rocky slopes of CalviÃ ",
      category: "Residential Garden",
      botanical: "Pistacia lentiscus, Rosmarinus officinalis, Lavandula, Mediterranean Rockeries",
      description: [
        "This project honors the natural incline of the Mallorca landscape, utilizing its original ravines and slopes as the structural foundation. By rejecting land leveling in favor of rockeries and plant masses, the design achieves a seamless, organic integration.",
        "The topography of this garden inherently defined its character. The terrain descends in natural slopes, forming a small ravine that connects the residence with the surrounding Mediterranean landscape. Rather than altering the elevations, the design respects and utilizes them as the foundational structural element.",
        "The garden was developed along this natural incline using rockeries and plant masses to stabilize the soil and mirror the land's original contour. Stone elements structure the space, allowing vegetation to integrate organically as if it had always been part of the site.",
        "The slope is softened with resilient groundcovers including <i>Agapanthus africanus</i>, <i>Chlorophytum comosum</i> and <i>Asparagus densiflorus</i>. The result is a garden that follows, respects and enhances the natural terrain in harmonious balance with the Mallorcan landscape."
      ]
    },
    es: {
      title: "Santa Ponsa",
      subtitle: "Honrando los contornos originales y las laderas rocosas de CalviÃ ",
      category: "JardÃ­n Residencial",
      botanical: "Pistacia lentiscus, Rosmarinus officinalis, Lavandula, Rocallas MediterrÃ¡neas",
      description: [
        "La topografÃ­a de este jardÃ­n definÃ­a por sÃ­ misma el carÃ¡cter del espacio. El terreno desciende en taludes naturales, formando una pequeÃ±a barranca que conecta la vivienda con el paisaje mediterrÃ¡neo que la rodea.",
        "En lugar de modificar los niveles, el diseÃ±o los respeta y los utiliza como elemento estructural fundamental. El jardÃ­n se desarrollÃ³ mediante rocallas y masas vegetales que estabilizan el suelo y acompaÃ±an el contorno original del terreno.",
        "Los elementos pÃ©treos estructuran el espacio y permiten que la vegetaciÃ³n se integre de forma orgÃ¡nica. La pendiente se suaviza con cubresuelos resistentes como <i>Agapanthus africanus</i>, <i>Chlorophytum comosum</i> y <i>Asparagus densiflorus</i>.",
        "El resultado es un jardÃ­n que sigue, respeta y realza el terreno natural, integrÃ¡ndose de forma armoniosa con el paisaje de Mallorca en un equilibrio entre impacto estÃ©tico y gestiÃ³n sostenible de bajo mantenimiento."
      ]
    },
    de: {
      title: "Santa Ponsa",
      subtitle: "Die ursprÃ¼nglichen Konturen und felsigen HÃ¤nge von CalviÃ  wÃ¼rdigen",
      category: "Wohnbereich Garten",
      botanical: "Pistacia lentiscus, Rosmarinus officinalis, Lavandula, Mediterrane SteingÃ¤rten",
      description: [
        "Die Topographie dieses Gartens definierte von sich aus den Charakter des Raums. Das GelÃ¤nde fÃ¤llt in natÃ¼rlichen HÃ¤ngen ab und bildet eine kleine Schlucht, die das Wohnhaus mit der umgebenden mediterranen Landschaft verbindet.",
        "Anstatt die HÃ¶hen zu verÃ¤ndern, respektiert der Entwurf sie und nutzt sie als fundamentales Strukturelement. Der Garten wurde entlang dieser natÃ¼rlichen Neigung mit SteingÃ¤rten und Pflanzenmassen entwickelt, die den Boden stabilisieren.",
        "Steinelemente strukturieren den Raum und ermÃ¶glichen eine organische Integration der Vegetation. Die Hanglage wird mit widerstandsfÃ¤higen Bodendeckern wie <i>Agapanthus africanus</i>, <i>Chlorophytum comosum</i> und <i>Asparagus densiflorus</i> abgemildert.",
        "Das Ergebnis ist ein Garten, der das natÃ¼rliche GelÃ¤nde folgt, respektiert und hervorhebt â€” harmonisch in die mallorquinische Landschaft integriert mit einem Gleichgewicht aus Ã¤sthetischer Wirkung und nachhaltiger, pflegearmer Bewirtschaftung."
      ]
    }
  },
  {
    slug: "son-vida",
    location: "Son Vida, Palma",
    year: "2022",
    architect: null,
    video: null,
    cover: "/portfolio/son-vida/garden-design-mallorca-son-vida-sestepa.jpg",
    images: [
      "garden-design-son-vida-mallorca-sestepa-design-landscape-architecture-1.jpg",
      "garden-design-son-vida-mallorca-sestepa-design-landscape-architecture-2.jpg",
      "garden-design-son-vida-mallorca-sestepa-design-landscape-architecture-3.jpg",
      "garden-design-son-vida-mallorca-sestepa-design-landscape-architecture-4.jpg",
      "garden-design-son-vida-mallorca-sestepa-design-landscape-architecture-5.jpg",
      "garden-design-son-vida-mallorca-sestepa-design-landscape-architecture-6.jpg",
      "garden-design-son-vida-mallorca-sestepa-design-landscape-architecture-8.jpg"
    ],
    en: {
      title: "Son Vida",
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
      title: "Son Vida",
      subtitle: "PrecisiÃ³n geomÃ©trica dialogando con la arquitectura moderna",
      category: "JardÃ­n Residencial",
      botanical: "Olea europaea, Pittosporum tobira nana, Buxus sempervirens, Phoenix canariensis",
      description: [
        "En la zona mÃ¡s exclusiva de Mallorca, este jardÃ­n se alinea con la geometrÃ­a minimalista de una villa contemporÃ¡nea privada.",
        "El diseÃ±o presenta lÃ­neas limpias de esferas verdes estructurales y palmeras arquitectÃ³nicas, estableciendo un diÃ¡logo de luces y sombras contra las fachadas de piedra blanca.",
        "Al centrarse en la forma y en texturas de verde profundo, el paisaje realza las lÃ­neas arquitectÃ³nicas ofreciendo al mismo tiempo rincones privados de contemplaciÃ³n."
      ]
    },
    de: {
      title: "Son Vida",
      subtitle: "Geometrische PrÃ¤zision im Dialog mit moderner Architektur",
      category: "Wohnbereich Garten",
      botanical: "Olea europaea, Pittosporum tobira nana, Buxus sempervirens, Phoenix canariensis",
      description: [
        "In Mallorcas exklusivster Enklave passt sich dieser Garten der minimalistischen Geometrie einer zeitgenÃ¶ssischen privaten Villa an.",
        "Der Entwurf zeichnet sich durch klare Linien aus strukturellen grÃ¼nen Kugeln und architektonischen Palmen aus, die einen Dialog von Licht und Schatten vor weiÃŸen Steinfassaden herstellen.",
        "Durch die Konzentration auf Form und tiefgrÃ¼ne Texturen wertet die Landschaft die architektonischen Linien auf und bietet gleichzeitig private Ecken der Kontemplation."
      ]
    }
  },
  {
    slug: "terrace-garden-in-palma",
    location: "Palma de Mallorca",
    year: "2023",
    architect: "Contemporary Studio",
    video: "https://www.youtube.com/embed/1q1Qnh2s_mg?feature=oembed",
    cover: "/portfolio/terrace-garden-in-palma/garden-design-mallorca-terrace-garden-in-palma-sestepa.webp",
    images: [
      "landscape-garden-design-terrace-palma-mallorca-sestepa-design-1.jpg",
      "landscape-garden-design-terrace-palma-mallorca-sestepa-design-6.jpg",
      "landscape-garden-design-terrace-palma-mallorca-sestepa-design-3.jpg",
      "landscape-garden-design-terrace-palma-mallorca-sestepa-design-4.jpg",
      "landscape-garden-design-terrace-palma-mallorca-sestepa-design-5.jpg"
    ],
    en: {
      title: "Palma Terrace",
      subtitle: "A high-altitude Mediterranean sanctuary resistant to wind and sun",
      category: "Terrace Garden",
      botanical: "Strelitzia nicolai, Chamaerops humilis, Phoenix roebelenii, Rhapis excelsa, Cycas revoluta, Monstera deliciosa, Columnar Cacti",
      description: [
        "The intervention stems from a sensitive reading of the site: solar orientation, wind exposure, sea and city views, and transitions between indoors and outdoors. The goal was to endow the space with a clear vegetative identity, using species adapted to the Mediterranean climate, low-maintenance, and with strong visual presenceâ€”capable of dialoguing with the urban landscape and contemporary architecture.",
        "The design is structured around large-format linear planters that outline the functional zones and house a botanical composition alternating green masses, contrasting textures, and controlled heights. This layout defines without compartmentalizing, creating differentiated areas for lounging, gathering, and contemplation.",
        "<i>Chamaerops humilis</i> and <i>Phoenix roebelenii</i>: compact, resilient palms suited for elevated, windy environments.",
        "<i>Rhapis excelsa</i>, <i>Cycas revoluta</i>, and <i>Monstera deliciosa</i>: provide density, texture, and foliage diversity across mid and lower strata.",
      ]
    },
    es: {
      title: "Palma Terrace",
      subtitle: "Un santuario mediterrÃ¡neo en las alturas resistente al viento y al sol",
      category: "JardÃ­n de Terraza",
      botanical: "Strelitzia nicolai, Chamaerops humilis, Phoenix roebelenii, Rhapis excelsa, Cycas revoluta, Monstera deliciosa, Cactus Columnares",
      description: [
        "Situada en la Ãºltima planta de un edificio contemporÃ¡neo de Palma, esta terraza se transformÃ³ en un jardÃ­n habitable, integrando vegetaciÃ³n permanente, confort climÃ¡tico y una estÃ©tica alineada con el lenguaje arquitectÃ³nico de su entorno.",
        "La intervenciÃ³n parte de una lectura sensible del emplazamiento: orientaciÃ³n solar, exposiciÃ³n al viento y vistas al mar y a la ciudad. El diseÃ±o se estructura en torno a jardineras lineales de gran formato que delimitan las zonas funcionales.",
        "<i>Strelitzia nicolai</i> es el elemento vertical dominante. <i>Chamaerops humilis</i> y <i>Phoenix roebelenii</i> son palmeras compactas y resistentes. <i>Rhapis excelsa</i>, <i>Cycas revoluta</i> y <i>Monstera deliciosa</i> proporcionan densidad y textura, junto a cactus columnares y suculentas escultÃ³ricas en macetas de cerÃ¡mica.",
        "El pavimento de porcelana en tonos claros y el mobiliario de lÃ­neas limpias complementan la vegetaciÃ³n. Las especies elegidas ofrecen gran resistencia al viento y al sol, baja demanda de agua y necesidades mÃ­nimas de poda."
      ]
    },
    de: {
      title: "Palma Terrace",
      subtitle: "Ein mediterranes Refugium in luftiger HÃ¶he, wind- und sonnenresistent",
      category: "Terrassengarten",
      botanical: "Strelitzia nicolai, Chamaerops humilis, Phoenix roebelenii, Rhapis excelsa, Cycas revoluta, Monstera deliciosa, SÃ¤ulenkakteen",
      description: [
        "Diese Terrasse im obersten Stockwerk eines modernen GebÃ¤udes in Palma wurde in einen bewohnbaren Garten umgewandelt, indem dauerhaftes GrÃ¼n, klimatischer Komfort und eine an die Architektur angepasste Ã„sthetik integriert wurden.",
        "Die Intervention beruht auf einer sensiblen Betrachtung des Standorts: Sonnenausrichtung, Windexposition und Ausblicke auf Meer und Stadt. Das Design ist um groÃŸformatige, lineare PflanzgefÃ¤ÃŸe herum strukturiert, die funktionale Zonen abgrenzen.",
        "<i>Strelitzia nicolai</i> bildet das dominierende vertikale Element. <i>Chamaerops humilis</i> und <i>Phoenix roebelenii</i> sind kompakte, windresistente Palmen. <i>Rhapis excelsa</i>, <i>Cycas revoluta</i> und <i>Monstera deliciosa</i> sorgen fÃ¼r Dichte und Textur.",
        "GroÃŸformatige Porzellanplatten in hellen SteintÃ¶nen und MÃ¶bel mit klaren Linien ergÃ¤nzen die Bepflanzung. Die ausgewÃ¤hlten Arten bieten hohe WiderstandsfÃ¤higkeit gegen Wind und Sonne, geringen Wasserbedarf und minimalen Schnittaufwand."
      ]
    }
  },
  {
    slug: "vertical-gardens-in-mallorca",
    location: "Mallorca",
    year: "2023",
    architect: "Vertical Garden Mallorca",
    video: "https://www.youtube.com/embed/x3W0KQmr-pQ?feature=oembed",
    cover: "/portfolio/vertical-gardens-in-mallorca/garden-design-mallorca-vertical-gardens-in-mallorca-sestepa.jpg",
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
      title: "Vertical Gardens in Mallorca",
      subtitle: "Suspended jungle lattices filtering light and purifying air",
      category: "Vertical Garden",
      botanical: "Tropical and hanging species, climatic-adapted climbers",
      description: [
        "Vertical gardens in Mallorca â€” design and installation of living wall structures for villas and private estates. S'Estepa Design, Mediterranean landscape studio.",
        "The meticulous selection of tropical plants, based on adaptation, structure, and colors, provided the space with a sensation of freshness, warm colors, and plants suspended in the air",
        "The project proposal consists of two vertical gardens with different geometric structures, both indoors and outdoors, in combination with the space. Through avant-garde elements, the design aesthetics are focused on a vegetal lattice along the entire exterior facade: beams of light enter the interior space and achieve a jungle light effect.",
        "The vertical garden reduces facade temperature by up to 40%, absorbs sound to improve acoustic quality, and contributes to air purification by trapping dust and converting CO2 into oxygen."
      ]
    },
    es: {
      title: "Jardines Verticales en Mallorca",
      subtitle: "CelosÃ­as de selva suspendidas que filtran la luz y purifican el aire",
      category: "JardÃ­n Vertical",
      botanical: "Especies tropicales y colgantes, trepadoras adaptadas",
      description: [
        "Jardines verticales en Mallorca: diseÃ±o e instalaciÃ³n de estructuras vegetales para fachadas. S'Estepa Design, estudio de paisajismo mediterrÃ¡neo con 30 aÃ±os de experiencia.",
        "La meticulosa selecciÃ³n de plantas tropicales, basada en la adaptaciÃ³n, la estructura y los colores, proporcionÃ³ al espacio una sensaciÃ³n de frescor, colores cÃ¡lidos y plantas suspendidas en el aire.",
        "La propuesta consiste en dos jardines verticales con diferentes estructuras geomÃ©tricas, tanto en el interior como en el exterior. Los haces de luz entran en el espacio interior y consiguen un efecto de luz selvÃ¡tica a lo largo de toda la fachada.",
        "El jardÃ­n reduce la temperatura del espacio hasta un 40% en las fachadas, absorbe el sonido y contribuye a la purificaciÃ³n del aire, atrapando polvo en suspensiÃ³n y convirtiendo CO2 en oxÃ­geno."
      ]
    },
    de: {
      title: "Vertikale GÃ¤rten auf Mallorca",
      subtitle: "HÃ¤ngende Dschungelgitter, die Licht filtern und Luft reinigen",
      category: "Vertikaler Garten",
      botanical: "Tropische und hÃ¤ngende Arten, klimaangepasste Kletterpflanzen",
      description: [
        "Vertikale GÃ¤rten auf Mallorca: Planung und Installation begrÃ¼nter Wandstrukturen fÃ¼r Villen und Privatanwesen. S'Estepa Design, mediterranes Landschaftsstudio.",
        "Die sorgfÃ¤ltige Auswahl tropischer Pflanzen, basierend auf Anpassung, Struktur und Farben, verleiht dem Raum ein GefÃ¼hl von Frische, warmen Farben und in der Luft schwebenden Pflanzen.",
        "Das Projektvorschlag besteht aus zwei vertikalen GÃ¤rten mit unterschiedlichen geometrischen Strukturen, innen und auÃŸen. Lichtstrahlen dringen in den Innenraum ein und erzeugen einen Dschungellichteffekt entlang der gesamten AuÃŸenfassade.",
        "Der Garten senkt die Raumtemperatur an Fassaden um bis zu 40 %, absorbiert Schall und trÃ¤gt zur Luftreinigung bei, indem er Staubpartikel einfÃ¤ngt und CO2 in Sauerstoff umwandelt."
      ]
    }
  },
  {
    slug: "finca-garden-inca",
    location: "Inca, Mallorca",
    year: "2023",
    architect: null,
    video: null,
    hidden: true,
    cover: "/portfolio/finca-garden-inca/garden-design-mallorca-finca-garden-inca-sestepa.jpg",
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
        "To naturally separate the two zones, <i>Pittosporum tobira nana</i> has been chosen, known for its rounded shape and minimal pruning requirements. These shrubs create a pleasant visual separation between the lawn and gravel pathway.",
        "The gravel pathway widens in the centre to provide a space for enjoyment. It connects to the lawn area from two different points and spans the entire garden, ending on the other side.",
        "Along the pathway, a series of planters are created to offer height perspectives, ensuring that the foreground plants do not obstruct the background ones. Smaller shrubs are placed naturally in the front, while larger ones are positioned towards the back. Additionally, small wildflower plants are strategically placed along sections of the pathway, without obstructing the shrubs in the flower beds.",
      ]
    },
    es: {
      title: "Finca JardÃ­n Inca",
      subtitle: "Una disposiciÃ³n bidimensional con perspectivas de altura y color natural",
      category: "JardÃ­n Residencial",
      botanical: "Pittosporum tobira nana, Agapanthus praecox, Rosmarinus officinalis, Euryops, Teucrium, Eremophila, Santolina, Gaura, Jacaranda mimosifolia, Prunus dulcis",
      description: [
        "Este diseÃ±o presenta una interesante disposiciÃ³n bidimensional. El jardÃ­n se eleva un metro sobre el nivel de la casa y la piscina y se divide en dos zonas de diferenciadas: una zona de cÃ©sped existente y una zona de camino que se diseÃ±arÃ¡ con grava.",
        "Para separar naturalmente las dos zonas, se ha elegido el <i>Pittosporum tobira nana</i>, conocido por su forma redondeada y sus mÃ­nimas necesidades de poda. Estos arbustos crean una agradable separaciÃ³n visual entre el cÃ©sped y el camino de grava.",
        "El camino de grava se ensancha en el centro para ofrecer un espacio de disfrute. Conecta con la zona de cÃ©sped desde dos puntos distintos y se extiende por todo el jardÃ­n, terminando en el otro lado.",
        "A lo largo del camino, una serie de jardineras ofrecen perspectivas de altura, asegurando que las plantas del primer plano no obstruyan las del fondo. Los arbustos mÃ¡s pequeÃ±os se colocan de forma natural en la parte delantera, mientras que los mÃ¡s grandes se sitÃºan hacia la parte trasera. AdemÃ¡s, se han colocado estratÃ©gicamente pequeÃ±as plantas silvestres a lo largo de tramos del sendero, sin obstruir los arbustos de los parterres.",
      ]
    },
    de: {
      title: "Finca Garten Inca",
      subtitle: "Ein zweidimensionales Layout mit HÃ¶henperspektiven und natÃ¼rlicher Farbvielfalt",
      category: "Wohnbereich Garten",
      botanical: "Pittosporum tobira nana, Agapanthus praecox, Rosmarinus officinalis, Euryops, Teucrium, Eremophila, Santolina, Gaura, Jacaranda mimosifolia, Prunus dulcis",
      description: [
        "Dieser Entwurf bietet ein interessantes zweidimensionales Layout. Der Garten liegt einen meter Ã¼ber dem Niveau des Hauses und des Pools und ist in zwei Zonen unterteilt: eine bestehende RasenflÃ¤che und ein mit Kies zu gestaltender Wegbereich.",
        "Zur natÃ¼rlichen Trennung der beiden Zonen wurde <i>Pittosporum tobira nana</i> gewÃ¤hlt, bekannt fÃ¼r seine runde Form und geringen Schnittbedarf. Diese StrÃ¤ucher schaffen eine angenehme visuelle Trennung zwischen Rasen und Kiesweg.",
        "Der Kiesweg verbreitert sich in der Mitte zu einem Aufenthaltsbereich, verbindet die RasenflÃ¤che an zwei Punkten und erstreckt sich Ã¼ber den gesamten Garten.",
        "Entlang des Weges bieten PflanzgefÃ¤ÃŸe HÃ¶henperspektiven: kleinere StrÃ¤ucher vorne, grÃ¶ÃŸere hinten, ergÃ¤nzt durch strategisch platzierte Wildblumen, die die Beete nicht verdecken."
      ]
    }
  },
  {
    slug: "sacabaneta",
    location: "Sa Cabaneta, MarratxÃ­",
    year: "2025",
    architect: null,
    video: null,
    cover: "/portfolio/sacabaneta/images/landscape design render mallorca sa cabaneta sestepa design (1).png",
    images: [
      "landscape design render mallorca sa cabaneta sestepa design (1).png",
      "landscape design render mallorca sa cabaneta sestepa design (3).png",
      "landscape design render mallorca sa cabaneta sestepa design (5).png",
    ],
    en: {
      title: "Sa Cabaneta Garden",
      subtitle: "A journey through connected Mediterranean scenes on a longitudinal plot",
      category: "Residential Garden",
      botanical: "Grevillea robusta, Lippia nodiflora, Lavandula dentata, Perovskia atriplicifolia, Limonium perezii, Stachys byzantina, Rosa Iceberg, Pennisetum alopecuroides, Teucrium fruticans, Stipa tenuissima, Muhlenbergia capillaris, Gaura lindheimeri",
      description: [
        "This project transforms a longitudinal plot into a contemporary Mediterranean garden conceived as a sequence of connected settings linked by an organic natural stone path. The journey invites visitors to discover different landscape scenes, alternating open spaces for family enjoyment with more intimate corners for rest and contemplation.",
        "The proposal provides year-round interest through a combination of textures, seasonal flowering and chromatic contrasts. Selected trees bring verticality and visual presence from inside the residence, while planting masses create depth, movement and a sense of immersion in nature. Each garden margin fulfils a specific function, evolving from an open, versatile area near the house to a more natural and enveloping setting at the back of the plot.",
        "The first zone is conceived as a wide, functional space for family gatherings and outdoor activities. A <i>Grevillea robusta</i> â€” a fast-growing tree with spectacular orange flowering â€” creates a focal point visible from the residence and provides pleasant shade over time. The ground is covered with <i>Lippia nodiflora</i>, a sustainable low-water alternative to traditional lawn, connected to the rest of the garden by a natural stone path.",
        "The second zone forms the ornamental heart of the project â€” a space for contemplation where vegetation envelops the path and generates a relaxing atmosphere rich in colour, movement and biodiversity. The flowering masses combine <i>Lavandula dentata</i>, <i>Perovskia atriplicifolia</i>, <i>Limonium perezii</i>, <i>Stachys byzantina</i>, white <i>Rosa</i> 'Iceberg', <i>Pennisetum alopecuroides</i> and <i>Teucrium fruticans</i>, complemented by <i>Arbutus unedo</i> and <i>Prunus cerasifera</i> var. pissardii for seasonal colour and chromatic contrasts. A strategically placed bench invites visitors to pause and enjoy this immersive landscape.",
        "The final zone adopts a more naturalistic character, where ornamental grasses and flowering plants create a light, dynamic image. <i>Stipa tenuissima</i>, <i>Muhlenbergia capillaris</i> and <i>Gaura lindheimeri</i> move with the breeze and produce ethereal flowering clouds â€” an elegant natural closure where plant textures, light and movement become the true protagonists."
      ]
    },
    es: {
      title: "JardÃ­n Sa Cabaneta",
      subtitle: "Un jardÃ­n para recorrer, descubrir y disfrutar en una parcela longitudinal",
      category: "JardÃ­n Residencial",
      botanical: "Grevillea robusta, Lippia nodiflora, Lavandula dentata, Perovskia atriplicifolia, Limonium perezii, Stachys byzantina, Rosa Iceberg, Pennisetum alopecuroides, Teucrium fruticans, Stipa tenuissima, Muhlenbergia capillaris, Gaura lindheimeri",
      description: [
        "Este proyecto transforma un espacio longitudinal en un jardÃ­n de carÃ¡cter mediterrÃ¡neo contemporÃ¡neo, concebido como una secuencia de ambientes conectados por un sendero orgÃ¡nico de piedra natural. El recorrido invita a descubrir diferentes escenas paisajÃ­sticas, alternando espacios abiertos para el disfrute familiar con rincones mÃ¡s Ã­ntimos destinados al descanso y la contemplaciÃ³n.",
        "La propuesta busca aportar interÃ©s durante todo el aÃ±o mediante la combinaciÃ³n de texturas, floraciones estacionales y contrastes cromÃ¡ticos. Los Ã¡rboles seleccionados generan verticalidad y presencia visual desde el interior de la vivienda, mientras que las masas de plantaciÃ³n crean profundidad, movimiento y una sensaciÃ³n de inmersiÃ³n en la naturaleza.",
        "La primera zona se concibe como un espacio amplio y funcional destinado a reuniones familiares y actividades al aire libre. Como elemento protagonista se incorpora una <i>Grevillea robusta</i>, Ã¡rbol de rÃ¡pido desarrollo con espectacular floraciÃ³n en tonos anaranjados. El suelo se cubre mediante <i>Lippia nodiflora</i>, alternativa sostenible al cÃ©sped tradicional de bajo consumo hÃ­drico, conectada al resto del jardÃ­n por un sendero de piedra natural.",
        "La segunda zona constituye el corazÃ³n ornamental del proyecto. Las masas florales combinan <i>Lavandula dentata</i>, <i>Perovskia atriplicifolia</i>, <i>Limonium perezii</i>, <i>Stachys byzantina</i>, <i>Rosa</i> 'Iceberg', <i>Pennisetum alopecuroides</i> y <i>Teucrium fruticans</i>, complementadas con <i>Arbutus unedo</i> y <i>Prunus cerasifera</i> var. pissardii para aportar volumen y contrastes cromÃ¡ticos estacionales. Un banco estratÃ©gicamente situado permite detenerse y disfrutar de este paisaje inmersivo.",
        "La Ãºltima zona adopta un carÃ¡cter mÃ¡s naturalista, donde <i>Stipa tenuissima</i>, <i>Muhlenbergia capillaris</i> y <i>Gaura lindheimeri</i> crean una imagen ligera y dinÃ¡mica que se mueve con la brisa. El resultado es un cierre paisajÃ­stico elegante y natural, donde las texturas vegetales, la luz y el movimiento se convierten en los verdaderos protagonistas del espacio."
      ]
    },
    de: {
      title: "Sa Cabaneta Garten",
      subtitle: "Ein Garten zum Durchwandern, Entdecken und GenieÃŸen auf einem LÃ¤ngsgrundstÃ¼ck",
      category: "Wohnbereich Garten",
      botanical: "Grevillea robusta, Lippia nodiflora, Lavandula dentata, Perovskia atriplicifolia, Limonium perezii, Stachys byzantina, Rosa Iceberg, Pennisetum alopecuroides, Teucrium fruticans, Stipa tenuissima, Muhlenbergia capillaris, Gaura lindheimeri",
      description: [
        "Dieses Projekt verwandelt ein lÃ¤ngliches GrundstÃ¼ck in einen zeitgenÃ¶ssischen mediterranen Garten, der als Abfolge verbundener RÃ¤ume konzipiert ist, die durch einen organischen Natursteinweg miteinander verbunden werden. Der Weg lÃ¤dt dazu ein, verschiedene Landschaftsszenen zu entdecken und offene Bereiche fÃ¼r das Familienleben mit intimeren Ruhezonen abzuwechseln.",
        "Die Planung zielt darauf ab, durch eine Kombination aus Texturen, saisonalen BlÃ¼ten und Farbkontrasten das ganze Jahr Ã¼ber Interesse zu wecken. AusgewÃ¤hlte BÃ¤ume verleihen dem Raum VertikalitÃ¤t und visuelle PrÃ¤senz aus dem Inneren des Hauses, wÃ¤hrend Pflanzenmassen Tiefe, Bewegung und ein GefÃ¼hl des Eintauchens in die Natur erzeugen.",
        "Die erste Zone ist als weitrÃ¤umiger, funktionaler Bereich fÃ¼r Familientreffen und Outdoor-AktivitÃ¤ten konzipiert. Als Hauptelement wird eine <i>Grevillea robusta</i> eingesetzt â€” ein schnellwachsender Baum mit spektakulÃ¤ren orangefarbenen BlÃ¼ten. Der Boden wird mit <i>Lippia nodiflora</i> als wasserarme Alternative zu herkÃ¶mmlichem Rasen bedeckt, verbunden durch einen Natursteinweg.",
        "Die zweite Zone bildet das ornamentale HerzstÃ¼ck des Projekts. Die BlÃ¼tenmassen kombinieren <i>Lavandula dentata</i>, <i>Perovskia atriplicifolia</i>, <i>Limonium perezii</i>, <i>Stachys byzantina</i>, <i>Rosa</i> 'Iceberg', <i>Pennisetum alopecuroides</i> und <i>Teucrium fruticans</i>, ergÃ¤nzt durch <i>Arbutus unedo</i> und <i>Prunus cerasifera</i> var. pissardii fÃ¼r saisonale Farbkontraste. Eine strategisch platzierte Sitzbank lÃ¤dt zum Verweilen ein.",
        "Die letzte Zone nimmt einen naturalistischeren Charakter an, in dem <i>Stipa tenuissima</i>, <i>Muhlenbergia capillaris</i> und <i>Gaura lindheimeri</i> ein leichtes, dynamisches Bild erzeugen, das sich im Wind bewegt. Das Ergebnis ist ein eleganter, natÃ¼rlicher Abschluss, bei dem Pflanzentexturen, Licht und Bewegung zu den wahren Protagonisten des Raums werden."
      ]
    }
  },
  {
    slug: "seaside-house-alcudia",
    location: "AlcÃºdia, Mallorca",
    year: "2023",
    architect: null,
    video: null,
    cover: "/portfolio/seaside-house-alcudia/images/landscape garden design alcanada - alcudia - mallorca sestepa design (1).jpg",
    images: [
      "landscape garden design alcanada - alcudia - mallorca sestepa design (1).jpg",
      "landscape garden design alcanada - alcudia - mallorca sestepa design (2).jpg",
      "landscape garden design alcanada - alcudia - mallorca sestepa design (3).jpg",
      "landscape garden design alcanada - alcudia - mallorca sestepa design (4).jpg",
      "landscape garden design alcanada - alcudia - mallorca sestepa design (5).jpg",
      "landscape garden design alcanada - alcudia - mallorca sestepa design (6).jpg",
      "landscape garden design alcanada - alcudia - mallorca sestepa design (7).jpg",
      "landscape garden design alcanada - alcudia - mallorca sestepa design (8).jpg",
      "landscape garden design alcanada - alcudia - mallorca sestepa design (9).jpg",
      "landscape garden design alcanada - alcudia - mallorca sestepa design (10).jpg",
      "landscape garden design alcanada - alcudia - mallorca sestepa design (11).jpg",
      "landscape garden design alcanada - alcudia - mallorca sestepa design (12).jpg",
      "landscape garden design alcanada - alcudia - mallorca sestepa design (13).jpg",
      "landscape garden design alcanada - alcudia - mallorca sestepa design (14).jpg",
      "landscape garden design alcanada - alcudia - mallorca sestepa design (15).jpg",
    ],
    en: {
      title: "Alcanada",
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
      title: "Alcanada",
      subtitle: "Contrastes tropicales de color en una parcela en pendiente junto al mar",
      category: "JardÃ­n Residencial",
      botanical: "Especies tropicales y adaptadas al litoral, exÃ³ticas tolerantes a heladas",
      description: [
        "En esa parcela situada junto al mar y en una zona en pendiente, encontramos espacios ajardinados cerrados y definidos.",
        "Nos aseguramos de que en estos espacios los colores destacaran por su intensidad y contraste: acentuamos los verdes intensos, los lilas, los azules, los amarillos y los blancos. De este modo, el jardÃ­n se convertÃ­a en un contraste de lÃ­neas de colores, especialmente durante las estaciones de verano y primavera.",
        "La mayorÃ­a de las plantas eran de origen tropical y estaban adaptadas a la zona en pendiente cerca del mar, con caracterÃ­sticas que les permitÃ­an soportar las escasas heladas de las estaciones invernales.",
        "Este diseÃ±o de jardÃ­n combinÃ³ con Ã©xito elementos visuales y funcionales, creando un espacio encantador y armonioso para disfrutar junto al mar y apreciar la belleza de la naturaleza en todo su esplendor."
      ]
    },
    de: {
      title: "Alcanada",
      subtitle: "Tropische Farbkontraste auf einem HanggrundstÃ¼ck am Meer",
      category: "Wohnbereich Garten",
      botanical: "Tropische und kÃ¼stenangepasste Arten, frosttolerante Exoten",
      description: [
        "Auf diesem am Meer gelegenen GrundstÃ¼ck in Hanglage fanden wir geschlossene und abgegrenzte Gartenbereiche.",
        "Wir haben darauf geachtet, dass die Farben in diesen RÃ¤umen durch ihre IntensitÃ¤t und ihren Kontrast hervorstechen: intensive GrÃ¼n-, Flieder-, Blau-, Gelb- und WeiÃŸtÃ¶ne. Auf diese Weise wurde der Garten vor allem im Sommer und FrÃ¼hjahr zu einem kontrastreichen Farbenspiel.",
        "Die meisten Pflanzen waren tropischen Ursprungs und an die Hanglage des GrundstÃ¼cks in MeeresnÃ¤he angepasst, mit Eigenschaften, die es ihnen ermÃ¶glichen, die wenigen WinterfrÃ¶ste zu Ã¼berstehen.",
        "Bei der Gestaltung dieses Gartens wurden visuelle und funktionale Elemente erfolgreich miteinander kombiniert, so dass ein reizvoller und harmonischer Raum entstand, in dem man sich am Meer erholen und die SchÃ¶nheit der Natur genieÃŸen kann."
      ]
    }
  }
];



