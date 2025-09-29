const express = require('express');
const app = express();
const PORT = 3000;

const math = require('./utils/math');
const profileRouter = require('./routes/profile');

const style = `
  <style>
    body { font-family: Arial, sans-serif; background: #f4f4f9; margin: 20px; }
    h1, h2, h3 { color: #333; }
    p { font-size: 16px; }
    b { color: #0066cc; }
    nav a { margin-right: 15px; text-decoration: none; color: #0066cc; }
    nav a:hover { text-decoration: underline; }
    .card { background: #fff; padding: 20px; border-radius: 10px; 
            box-shadow: 0px 2px 6px rgba(0,0,0,0.1); margin-bottom: 20px; }
  </style>
`;

function layout(content) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Express Module</title>
        ${style}
      </head>
      <body>
        <nav>
          <a href="/">Home</a>
          <a href="/hitung">Hitung</a>
          <a href="/profile">Profile</a>
          <a href="/about">About</a>
        </nav>
        <div class="card">
          ${content}
        </div>
      </body>
    </html>
  `;
}


app.get('/', (req, res) => {
  res.send(layout(`
    <h1>Welcome</h1>
    <p>Nama: <b>Baiq Alfia Zahira</b></p>
    <p>NIM: <b>F1D02310042</b></p>
  `));
});


app.get('/hitung', (req, res) => {
  const a = 20;
  const b = 30;
  const hasil = math.tambah(a, b);

  res.send(layout(`
    <h2>Hasil Penjumlahan</h2>
    <p>${a} + ${b} = <b>${hasil}</b></p>
  `));
});


app.get('/about', (req, res) => {
  res.send(layout(`
    <h3>Ini adalah halaman latihan modul Node.js</h3>
    <p>Dibuat dengan penuh <b>semangat</b> 🚀</p>
  `));
});

app.use('/profile', profileRouter);


app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
