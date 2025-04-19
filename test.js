const fs = require('fs');
const path = require('path');

test('index.html contiene Hola Mundo', () => {
  const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
  expect(html).toMatch(/<h1>Hola Mundo<\/h1>/);
});
