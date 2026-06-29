const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'projects.ts');
let content = fs.readFileSync(filePath, 'utf8');

console.log("Original snippet:", content.substring(content.indexOf('Sant Lloren'), content.indexOf('Sant Lloren') + 20));

// Fix double encoding
let fixedContent = Buffer.from(content, 'latin1').toString('utf8');

console.log("Fixed snippet:", fixedContent.substring(fixedContent.indexOf('Sant Lloren'), fixedContent.indexOf('Sant Lloren') + 20));

// If it works, save it
if (fixedContent.includes('Sant Llorenç')) {
    fs.writeFileSync(filePath, fixedContent, 'utf8');
    console.log("Saved fixed file.");
} else {
    console.log("Fix did not result in expected string 'Sant Llorenç'");
}
