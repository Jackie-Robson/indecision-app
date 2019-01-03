  var express = require('express');
  const compression = require('compression');
  var app = express();
  var path = require('path');
  var port = process.env.PORT || 3000;

  app.use(compression());

  app.get('/', function(req, res) {
      res.sendFile(path.join(__dirname + '/public/index.html'));
  });
  app.use(express.static('public'))

  app.listen(port, function() {
      console.log('running');
  });