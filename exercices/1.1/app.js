const express = require('express');
const app = express();

const films = [
  {
    id: 1,
    title: 'Film 1',
    duration: 120,
    budget: 50,
    link: 'https://www.example.com/film1',
  },
  {
    id: 2,
    title: 'Film 2',
    duration: 110,
    budget: 60,
    link: 'https://www.example.com/film2',
  },
  {
    id: 3,
    title: 'Film 3',
    duration: 130,
    budget: 70,
    link: 'https://www.example.com/film3',
  },
];

// Vos routes Express seront définies ici

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
