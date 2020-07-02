const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const courses = require('./data');

server.set('view engine', 'njk');

server.use(express.static('public'));

nunjucks.configure('views', {
  express: server,

  // Permite html dentro de variáveis
  autoescape: false,
});

server.get('/', (req, res) => {
  return res.render('courses', { items: courses });
});

server.get('/about', (req, res) => {
  const about = {
    avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4',
    name: 'Rocketseat',
    role: 'Plataforma de educação em tecnologia',
    description:
      'As melhores tecnologias em programação, direto ao ponto e do jeito certo',
    links: [
      { name: 'Github', url: 'https://github.com/Rocketseat' },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/rocketseat_oficial/?hl=pt-br',
      },
      { name: 'Facebook', url: 'https://www.facebook.com/rocketseat/' },
    ],
    technologies: [ 
      "Javascript",
      "Node.js",
      "React Native"
    ]
  };
  return res.render('about', { about });
});

// server.get('/not-found', (req, res) => {
//   return res.render('not-found');
// });

server.use(function (req, res) {
  res.status(404).render('not-found');
});

server.listen(5000, () => {
  console.log('server is running');
});
