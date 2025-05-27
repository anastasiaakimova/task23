const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Привет из Docker + Jenkins! HELLO!!!');
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});