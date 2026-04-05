import fs from 'fs';

const files = ['src/pages/HomePage.jsx', 'src/pages/ResourcesPage.jsx'];

const dashToCamel = (str) => {
  return str.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
};

const convertStyleStringToObject = (styleStr) => {
  const styles = styleStr.split(';').filter(s => s.trim() !== '');
  let objStr = '{';
  styles.forEach((s) => {
    const [key, ...valueParts] = s.split(':');
    if (!key || valueParts.length === 0) return;
    const value = valueParts.join(':').trim().replace(/"/g, "'");
    objStr += `${dashToCamel(key.trim())}: "${value}", `;
  });
  objStr += '}';
  return objStr;
};

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Quick fix for extra double quote in news_photo.jpg line
  content = content.replace(/center;\"\"/g, 'center;"');

  content = content.replace(/style="([^"]*)"/g, (match, p1) => {
    return `style={${convertStyleStringToObject(p1)}}`;
  });
  
  // Quick fix for self-closing input
  content = content.replace(/<input(.*?)>/g, (match, p1) => {
    if (p1.trim().endsWith('/')) return match;
    return `<input${p1} />`;
  });

  fs.writeFileSync(file, content);
});

console.log('Fixed inline styles');
