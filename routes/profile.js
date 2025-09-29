
const express = require('express');
const router = express.Router();

const profiles = [
  { id: 1, nim: 'F1D02310042', nama: 'Baiq Alfia Zahira', Hobi: 'Melukis' },
  { id: 2, nim: 'F1D02310048', nama: 'Fadila Rahmania', Hobi: 'Badminton' },
  { id: 3, nim: 'F1D02310004', nama: 'Azizah Nurul Indah', Hobi: 'Ngoding' },
  { id: 4, nim: 'F1D02310111', nama: 'Dzakanov inshofi', Hobi: 'ngoding' },
  { id: 5, nim: 'F1D02310123', nama: 'Wahyu Hilal', Hobi: 'Muncak' }
];


router.get('/', (req, res) => {
  res.send(`
    <h2>Daftar Profile Mahasiswa</h2>
    <ul>
      ${profiles.map(p => `<li>${p.nama} - ${p.nim} (${p.Hobi})</li>`).join('')}
    </ul>
  `);
});

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const profile = profiles.find(p => p.id === id);

  if (profile) {
    res.send(`
      <h3>Detail Profile</h3>
      <p><b>Nama:</b> ${profile.nama}</p>
      <p><b>NIM:</b> ${profile.nim}</p>
      <p><b>Hobi:</b> ${profile.Hobi}</p>
    `);
  } else {
    res.status(404).send("<h3>Profile tidak dapat ditemukan</h3>");
  }
});

module.exports = router;
