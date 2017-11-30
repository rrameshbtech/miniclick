'use strict';

var express = require("express"),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  config = require('./utilities/config');

//Assigning 3rd party promise, as mongoose promise is depricated
mongoose.Promise = require('bluebird');

//configure database connections
var dbOptions = {
  useMongoClient: true
};
var db = mongoose.connect('mongodb://localhost/GameDatabase', dbOptions);

//import the models requried
var Player = require('./models/player');

//configure the player service
var gamesApiApp = express(),
  port = config.port;

//embed middlewares in the http pipe
gamesApiApp.use(bodyParser.urlencoded({
  extended: true
}));
gamesApiApp.use(bodyParser.json());

//Set CORS parameters to the response
gamesApiApp.use(function (req, res, next) {
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS,PATCH");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization ");
  next();
});

//import & assign the routes
var playerRouter = require('./routes/playerRouter')(Player);

gamesApiApp.use(`/api/v${config.version}/players`, playerRouter);

//Provide dashboard for the players api to let the players know about the list of api end points
gamesApiApp.get('/', function getPlayerAPIDetails(req, res) {
  res.send('Contains APIs for players.');
});

gamesApiApp.listen(port, function gamesApiAppListener() {
  console.log(`Games API services are running at port ${port}`);
});

/*Seeding collection initially*/
require('./seeders/players')(Player).seed();

module.exports = gamesApiApp;
