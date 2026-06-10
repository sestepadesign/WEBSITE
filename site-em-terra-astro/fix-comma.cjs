const fs=require("fs");
const f="src/data/projects.ts";
const lines=fs.readFileSync(f,"utf8").split(/\r?\n/);
if(!lines[799].includes("vertical-gardens-in-mallorca")) process.exit(2);
lines[799]=lines[799].replace(/,\s*$/,"")+",";
fs.writeFileSync(f,lines.join("\r\n"));
console.log("OK",lines[799]);
