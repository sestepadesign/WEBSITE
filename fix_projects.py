import json
import re

ts_path = r'g:\Meu Drive\1. WEBSITES\sestepa-design\codigo\src\data\projects.ts'
with open(ts_path, 'r', encoding='utf-8') as f:
    content = f.read()

sant_llorenc_images = [
    '22 (3).png', '1 (3).png', '2 (4).png', '3 (3).png', '4 (3).png', 
    '5 (8).png', '6 (4).png', '7 (5).png', '8 (2).png', '9 (2).png', 
    '10 (3).png', '11 (2).png', '17 (2).png', '18 (3).png', '19 (3).png', 
    '20 (3).png', '21 (2).png', '14.png', '12.png', '13.png', '16.png', '15.png'
]

jm_images = [
    'garden-design-mallorca-jardin-mediterraneo-sestepa.webp',
    'landscape-garden-design-mallorca-sestepa-landscape-design-jardin-mediterraneo-10.jpg',
    'landscape-garden-design-mallorca-sestepa-landscape-design-jardin-mediterraneo-12.jpg',
    'landscape-garden-design-mallorca-sestepa-landscape-design-jardin-mediterraneo-03.jpg',
    'landscape-garden-design-mallorca-sestepa-landscape-design-jardin-mediterraneo-04.jpg',
    'landscape-garden-design-mallorca-sestepa-landscape-design-jardin-mediterraneo-05.jpg',
    'landscape-garden-design-mallorca-sestepa-landscape-design-jardin-mediterraneo-06.jpg',
    'landscape-garden-design-mallorca-sestepa-landscape-design-jardin-mediterraneo-07.jpg',
    'landscape-garden-design-mallorca-sestepa-landscape-design-jardin-mediterraneo-08.jpg',
    'landscape-garden-design-mallorca-sestepa-landscape-design-jardin-mediterraneo-09.jpg',
    'landscape-garden-design-mallorca-sestepa-landscape-design-jardin-mediterraneo-01.jpg',
    'landscape-garden-design-mallorca-sestepa-landscape-design-jardin-mediterraneo-11.jpg',
    'landscape-garden-design-mallorca-sestepa-landscape-design-jardin-mediterraneo-02.jpg'
]

jm_project = '''  {
    slug: "jardin-mediterraneo",
    location: "Mallorca",
    year: "2024",
    architect: null,
    video: "https://www.youtube.com/embed/Aynezzlact0?feature=oembed",
    cover: "/portfolio/jardin-mediterraneo/images/garden-design-mallorca-jardin-mediterraneo-sestepa.webp",
    ogImage: "/portfolio/jardin-mediterraneo/images/landscape-garden-design-mallorca-sestepa-landscape-design-jardin-mediterraneo-02.jpg",
    images: [\n'''
for img in jm_images:
    jm_project += f'      "{img}",\n'
jm_project += '''    ],
    en: {
      title: "Mediterranean Garden",
      subtitle: "The Mediterranean garden, reimagined for how we live now",
      category: "Estate Garden",
      botanical: "Olea europaea (Centenary), Cupressus sempervirens, Rosmarinus officinalis, Stipa tenuissima, Perovskia atriplicifolia, Teucrium fruticans, Chamaerops humilis",
      description: [
        "The Mediterranean garden is having something of a moment — not as a passing look, but as an answer to how the region actually lives now: drier summers, more time outdoors, and a growing appetite for landscapes that feel effortless rather than manicured. At its core, it's built on plants that already belong here — <i>Olea europaea</i>, <i>Cupressus sempervirens</i>, and a palette of silver-leafed, drought-resistant shrubs that ask for almost nothing once established.",
        "What sets it apart from a generic dry garden is structure. Centenary olive trees and irregular cypresses anchor the space the way architecture would, creating depth and shade without a single blade of lawn to maintain. Beneath them, informal drifts of <i>Lavandula</i>, <i>Rosmarinus</i>, <i>Perovskia</i> and <i>Stipa tenuissima</i> move with the wind, giving the garden a sense of life that a static, symmetrical layout never quite achieves.",
        "This is also, increasingly, a question of water. Mallorca's summers leave little room for thirsty planting schemes, and a well-designed Mediterranean garden can thrive on a fraction of the irrigation a traditional lawn demands — without ever looking sparse or apologetic. It reads as luxury and restraint at the same time, which is exactly why it keeps showing up in the gardens our international clients are asking for.",
        "For us, thirty years of designing across Mallorca has meant learning which combinations actually hold up on limestone soil, in full sun, through drought — not just which ones photograph well. This concept reflects that: a garden designed to look like it has always been there, asking little, and giving back a great deal."
      ]
    },
    es: {
      title: "Jardín Mediterráneo",
      subtitle: "El jardín mediterráneo, reimaginado para nuestra forma de vivir actual",
      category: "Jardín de Finca",
      botanical: "Olea europaea (Centenario), Cupressus sempervirens, Rosmarinus officinalis, Stipa tenuissima, Perovskia atriplicifolia, Teucrium fruticans, Chamaerops humilis",
      description: [
        "El jardín mediterráneo está viviendo su momento, no como una moda pasajera, sino como respuesta a cómo se vive realmente en la región hoy en día: veranos más secos, más tiempo al aire libre y un creciente deseo de paisajes que parezcan naturales en lugar de muy cuidados. En su esencia, se basa en plantas que ya pertenecen a este lugar — <i>Olea europaea</i>, <i>Cupressus sempervirens</i>, y una paleta de arbustos de hojas plateadas y resistentes a la sequía que no piden casi nada una vez establecidos.",
        "Lo que lo diferencia de un jardín seco genérico es la estructura. Olivos centenarios y cipreses irregulares anclan el espacio tal como lo haría la arquitectura, creando profundidad y sombra sin tener que mantener ni una brizna de césped. Debajo de ellos, agrupaciones informales de <i>Lavandula</i>, <i>Rosmarinus</i>, <i>Perovskia</i> y <i>Stipa tenuissima</i> se mueven con el viento, dando al jardín una sensación de vida que un diseño estático y simétrico nunca llega a alcanzar.",
        "Esto también es, cada vez más, una cuestión de agua. Los veranos de Mallorca dejan poco margen para esquemas de plantación sedientos, y un jardín mediterráneo bien diseñado puede prosperar con una fracción del riego que requiere un césped tradicional, sin parecer nunca escaso. Se percibe como un lujo y al mismo tiempo como contención, que es exactamente la razón por la que sigue siendo solicitado por nuestros clientes internacionales.",
        "Para nosotros, treinta años diseñando por toda Mallorca ha significado aprender qué combinaciones realmente aguantan en suelo calizo, a pleno sol y durante las sequías, no solo cuáles quedan bien en las fotos. Este concepto refleja eso: un jardín diseñado para que parezca que siempre ha estado ahí, pidiendo poco y devolviendo mucho."
      ]
    },
    de: {
      title: "Mediterraner Garten",
      subtitle: "Der mediterrane Garten, neu gedacht für unsere heutige Lebensweise",
      category: "Landgut Garten",
      botanical: "Olea europaea (Centenary), Cupressus sempervirens, Rosmarinus officinalis, Stipa tenuissima, Perovskia atriplicifolia, Teucrium fruticans, Chamaerops humilis",
      description: [
        "Der mediterrane Garten erlebt gerade einen Moment – nicht als vorübergehender Trend, sondern als Antwort darauf, wie in der Region heute tatsächlich gelebt wird: trockenere Sommer, mehr Zeit im Freien und ein wachsendes Bedürfnis nach Landschaften, die eher mühelos als gepflegt wirken. Im Kern baut er auf Pflanzen auf, die ohnehin hierher gehören – <i>Olea europaea</i>, <i>Cupressus sempervirens</i> und eine Palette silberblättriger, trockenheitsresistenter Sträucher, die fast nichts verlangen, sobald sie angewachsen sind.",
        "Was ihn von einem gewöhnlichen Trockengarten unterscheidet, ist die Struktur. Hundertjährige Olivenbäume und unregelmäßige Zypressen verankern den Raum wie eine Architektur und schaffen Tiefe und Schatten, ohne dass ein einziger Grashalm gepflegt werden muss. Darunter bewegen sich ungezwungene Ansammlungen von <i>Lavandula</i>, <i>Rosmarinus</i>, <i>Perovskia</i> und <i>Stipa tenuissima</i> im Wind und verleihen dem Garten ein Gefühl von Leben, das ein statisches, symmetrisches Layout nie ganz erreicht.",
        "Dies ist zunehmend auch eine Frage des Wassers. Die Sommer auf Mallorca lassen wenig Raum für durstige Bepflanzungskonzepte, und ein gut gestalteter mediterraner Garten kann mit einem Bruchteil der Bewässerung gedeihen, die ein traditioneller Rasen erfordert – ohne dabei spärlich zu wirken. Es wirkt gleichzeitig wie Luxus und Zurückhaltung, was genau der Grund ist, warum es in den Gärten, die unsere internationalen Kunden nachfragen, immer wieder auftaucht.",
        "Für uns bedeutet drei Jahrzehnte Gartengestaltung auf ganz Mallorca zu lernen, welche Kombinationen auf Kalkboden, in voller Sonne und bei Trockenheit tatsächlich Bestand haben – und nicht nur, welche sich gut fotografieren lassen. Dieses Konzept spiegelt genau das wider: ein Garten, der so gestaltet ist, als wäre er schon immer da gewesen, der wenig verlangt und sehr viel zurückgibt."
      ]
    }
  }'''

sl_cover = '"/portfolio/sant-llorenc/1 (3).png"'
sl_images_str = ',\n'.join([f'      "{img}"' for img in sant_llorenc_images])

new_content = re.sub(
    r'(slug:\s*"sant-llorenc",.*?cover:\s*)"[^"]+"',
    r'\g<1>' + sl_cover,
    content,
    flags=re.DOTALL
)

new_content = re.sub(
    r'(slug:\s*"sant-llorenc",.*?images:\s*\[).*?(\],\n\s*en:)',
    r'\g<1>\n' + sl_images_str + '\n    \g<2>',
    new_content,
    flags=re.DOTALL
)

if 'slug: "jardin-mediterraneo"' not in new_content:
    new_content = re.sub(
        r'(}\n\];)',
        r'},\n' + jm_project + r'\n\g<1>',
        new_content
    )

with open(ts_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print('Updated projects.ts successfully.')
