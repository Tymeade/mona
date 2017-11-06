var path = require('path')
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.raw({ type: '*/*' }));

app.get('/', function (req, res) {
  res.send('Hello World! Node.JS is here!');
});

app.use('/sandbox', function(req, res) {
  res.sendFile(path.join(__dirname, '/sandbox.html'));
});

app.use('/fake-api/v0/transform/', function(req, res) {
  res.setHeader('Content-type', 'text/plain; charset=UTF-8; imeanit=yes');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.send(req.body);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
