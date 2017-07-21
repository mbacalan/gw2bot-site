var request = require('request');
var express = require('express');
var app = express();
app.use( express.static('public'))

app.get('/checkApi', function (req, res) {
    request('https://api.guildwars2.com/v2', function (error, response, body) {
        res.send( body )
    });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});