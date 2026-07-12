const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../src/assets/icons/brands');
const colors = {
  android: '#3DDC84',
  flutter: '#02569B',
  googlemaps: '#4285F4',
  googleanalytics: '#E37400',
  googlesearchconsole: '#458CF5',
  openai: '#412991',
  googlegemini: '#8E75B2',
  anthropic: '#191919',
  postgresql: '#4169E1',
};

Object.entries(colors).forEach(([name, color]) => {
  const file = path.join(dir, `${name}.svg`);
  if (!fs.existsSync(file)) return;
  let svg = fs.readFileSync(file, 'utf8');
  svg = svg.replace(/<path /g, `<path fill="${color}" `);
  fs.writeFileSync(file, svg);
  console.log('colored', name);
});
