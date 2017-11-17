const express = require('express');
const app = express();
var fs = require('fs');
var path = './pet.json';
// var path = './swagger-api.json';

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/topic', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send({name: Math.round(Math.random()* 100)});
});

app.get('/swagger-api', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(fs.readFileSync(path));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

