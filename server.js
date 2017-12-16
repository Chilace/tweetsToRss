require('./tweetstorss.js');
var config = require('./config.json');
var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send(config.items);
});

app.get('/:feed', function (req, res) {
  res.sendFile(__dirname + '/feeds/' + req.params.feed);
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
