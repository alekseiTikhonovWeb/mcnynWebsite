import fs from 'fs';

const resourcesHtml = fs.readFileSync('resources-old.html', 'utf8');
const indexHtml = fs.readFileSync('index-old.html', 'utf8');

const getStyle = (html) => {
  const match = html.match(/<style>([\s\S]*?)<\/style>/);
  return match ? match[1] : '';
};

// Combine styles
let combinedCSS = getStyle(resourcesHtml) + '\n/* ==== INDEX STYLES ==== */\n' + getStyle(indexHtml);

// Deduplicate ROOT variables or just keep it simple
fs.writeFileSync('src/index.css', combinedCSS);
console.log('CSS extracted and combined into src/index.css');

