const fs = require("fs");

const theme = fs.readFileSync("css/theme.css", "utf8");
const style = fs.readFileSync("css/style.css", "utf8");

const declared = new Set([...theme.matchAll(/(--[\w-]+)\s*:/g)].map(match => match[1]));
const referenced = new Set([...style.matchAll(/var\((--[\w-]+)/g)].map(match => match[1]));
const missing = [...referenced].filter(token => !declared.has(token));

if (missing.length) {
  console.error("Undefined theme tokens:", missing.join(", "));
  process.exit(1);
}

if (/#(?:[0-9a-f]{3,8})\b|rgba?\(/i.test(style)) {
  console.error("Literal colour values found in css/style.css. Move them to css/theme.css.");
  process.exit(1);
}

console.log(`Theme token check passed (${declared.size} tokens declared).`);
