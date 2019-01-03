  var express = require('express');
  var app = express();
  var path = require('path');

  app.get('/', function(req, res) {
      res.sendFile(path.join(__dirname + '/public/index.html'));
  });
  app.use(express.static('public'))

  app.listen(5000, function() {
      console.log('Dev app listening on port 5000!');
  });