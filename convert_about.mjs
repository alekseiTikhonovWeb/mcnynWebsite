import fs from 'fs';

let html = fs.readFileSync('about.html', 'utf8');
let teamDataCode = (html.match(/(const teamData = \{[\s\S]*?\};\n)/) || [])[1] || 'const teamData = {};\n';
let main = html.split('<main>')[1].split('</main>')[0];
main = main.replace(/<script>[\s\S]*?<\/script>/g, '').replace(/<div class="modal" id="modal"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g, '');

const dashToCamel = (str) => str.replace(/-([a-z])/g, g => g[1].toUpperCase());
const convStyle = (str) => {
  return '{' + str.split(';').filter(s => s.trim()).map(s => {
    let [k, ...v] = s.split(':');
    return `${dashToCamel(k.trim())}: "${v.join(':').trim().replace(/"/g, "'")}"`;
  }).join(', ') + '}';
};

let jsx = main.replace(/class=/g, 'className=').replace(/for=/g, 'htmlFor=').replace(/datetime=/g, 'dateTime=')
  .replace(/<br>/g, '<br />').replace(/<hr>/g, '<hr />').replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}')
  .replace(/onclick="openModal\('([^']+)'\)"/g, "onClick={() => openModal('$1')}")
  .replace(/onclick="closeModal\(\)"/g, "onClick={closeModal}").replace(/onerror="[^"]+"/g, '')
  .replace(/style="([^"]*)"/g, (m, p1) => `style={${convStyle(p1)}}`)
  .replace(/stroke-width/g, 'strokeWidth').replace(/stroke-linecap/g, 'strokeLinecap').replace(/stroke-linejoin/g, 'strokeLinejoin');

jsx = jsx.replace(/<img(.*?)>/g, (m, p1) => `<img${p1}${p1.endsWith('/') ? '' : ' /'}>`);
jsx = jsx.replace(/<input(.*?)>/g, (m, p1) => `<input${p1}${p1.endsWith('/') ? '' : ' /'}>`);

const fin = `import React, { useState, useEffect } from 'react';
${teamDataCode}
function AboutPage() {
  const [modalContent, setModalContent] = useState(null);
  const openModal = (key) => { if(teamData[key]) { setModalContent(teamData[key]); document.body.style.overflow='hidden'; } };
  const closeModal = () => { setModalContent(null); document.body.style.overflow=''; };
  useEffect(() => {
    const handleKD = (e) => { if (e.key === 'Escape') closeModal(); };
    document.addEventListener('keydown', handleKD); return () => document.removeEventListener('keydown', handleKD);
  }, []);
  return (
    <main>
      ${jsx}
      {modalContent && (
        <div className="modal" style={{ display: 'flex', overflowY: 'auto' }}>
          <div className="modal-content"><button className="close-button" onClick={closeModal}>&times;</button><div dangerouslySetInnerHTML={{ __html: modalContent }} /></div>
        </div>
      )}
    </main>
  );
}
export default AboutPage;`;

fs.writeFileSync('src/pages/AboutPage.jsx', fin);
