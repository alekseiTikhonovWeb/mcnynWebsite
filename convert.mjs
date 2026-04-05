import fs from 'fs';

const convertHtmlToJsx = (htmlString) => {
  return htmlString
    .replace(/class=/g, 'className=')
    .replace(/for=/g, 'htmlFor=')
    .replace(/<img(.*?)>/g, (match, p1) => {
      // make sure img has closing slash if not present
      if (p1.trim().endsWith('/')) return match;
      return `<img${p1} />`;
    })
    .replace(/<input(.*?)>/g, (match, p1) => {
      if (p1.trim().endsWith('/')) return match;
      return `<input${p1} />`;
    })
    // Br tag
    .replace(/<br>/g, '<br />')
    .replace(/<hr>/g, '<hr />')
    // Comments
    .replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');
};

const resHtml = fs.readFileSync('resources-old.html', 'utf8');
const indHtml = fs.readFileSync('index-old.html', 'utf8');

const getSection = (html, startStr, endStr) => {
  const start = html.indexOf(startStr);
  const end = html.indexOf(endStr, start);
  if (start !== -1 && end !== -1) {
    return html.substring(start + startStr.length, end);
  }
  return '';
};

const resMain = getSection(resHtml, '<main>', '</main>');
const indMain = getSection(indHtml, '<main>', '</main>');

const resPageJsx = `import React from 'react';\n\nfunction ResourcesPage() {\n  return (\n    <main>\n      ${convertHtmlToJsx(resMain)}\n    </main>\n  );\n}\n\nexport default ResourcesPage;`;

const indPageJsx = `import React from 'react';\n\nfunction HomePage() {\n  return (\n    <main>\n      ${convertHtmlToJsx(indMain)}\n    </main>\n  );\n}\n\nexport default HomePage;`;

fs.writeFileSync('src/pages/ResourcesPage.jsx', resPageJsx);
fs.writeFileSync('src/pages/HomePage.jsx', indPageJsx);
console.log('JSX Pages generated');
