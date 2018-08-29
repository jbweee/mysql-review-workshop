//npm install all of these
//npm install nodemon for live server
var express = require('express');
var parser = require('body-parser');
var path = require('path');
//require router
var routes = require('./routes.js');
//set port
var PORT = 3000;

var app = express();

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
//use your router with base /api
app.use('/api', routes);

//set your static
app.use(express.static(path.resolve(__dirname, '../static')));

//listen on PORT, then callback?
app.listen(PORT, () => {
  console.log('App is listening on PORT', PORT)
})