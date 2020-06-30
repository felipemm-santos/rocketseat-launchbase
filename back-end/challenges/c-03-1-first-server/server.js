const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const courses = require('./data');

server.set('view engine', 'njk');

server.use(express.static('public'));

nunjucks.configure('views', {
  express: server,
});

server.get('/', (req, res) => {
  return res.render('courses', { items: courses });
});

server.get('/about', (req, res) => {
  return res.render('about');
});

server.listen(5000, () => {
  console.log('server is running');
});
