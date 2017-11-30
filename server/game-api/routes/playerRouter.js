'use strict';

var express = require('express');
var playerRouter = function (Player) {

  var router = express.Router(),
    playerController = require('../controllers/playerController')(Player);

  //Routes handling multiple players
  router.route('/')
    .get(playerController.get);
  
  return router;
}

module.exports = playerRouter;
