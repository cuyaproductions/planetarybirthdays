var cool = require('cool-ascii-faces');
var express = require('express');
var pg = require('pg');
var app = express();

app.get('/', function(req, res) {
  res.send('hello world');
});
