const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'projects.ts');
let content = fs.readFileSync(filePath, 'utf8');

console.log("Before: ", content.substring(content.indexOf('Sant Lloren'), content.indexOf('Sant Lloren') + 20));

const targetArray = `    images: [
      "landscape-garden-design-terrace-palma-mallorca-sestepa-design-1.jpg",
      "landscape-garden-design-terrace-palma-mallorca-sestepa-design-2.jpg",
      "landscape-garden-design-terrace-palma-mallorca-sestepa-design-3.jpg",
      "landscape-garden-design-terrace-palma-mallorca-sestepa-design-4.jpg",
      "landscape-garden-design-terrace-palma-mallorca-sestepa-design-5.jpg",
      "landscape-garden-design-terrace-palma-mallorca-sestepa-design-6.jpg"
    ],`;

const replacementArray = `    images: [
      "landscape-garden-design-terrace-palma-mallorca-sestepa-design-1.jpg",
      "landscape-garden-design-terrace-palma-mallorca-sestepa-design-6.jpg",
      "landscape-garden-design-terrace-palma-mallorca-sestepa-design-3.jpg",
      "landscape-garden-design-terrace-palma-mallorca-sestepa-design-4.jpg",
      "landscape-garden-design-terrace-palma-mallorca-sestepa-design-5.jpg"
    ],`;

content = content.replace(targetArray, replacementArray);

console.log("After: ", content.substring(content.indexOf('Sant Lloren'), content.indexOf('Sant Lloren') + 20));

fs.writeFileSync(filePath, content, 'utf8');
console.log('Replaced successfully.');
