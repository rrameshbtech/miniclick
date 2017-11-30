'use strict';
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var playerSchema = new Schema({
  userName: {
    type: String,
    unique: true
  },
  game: {
    type: String
  },
  difficulty: {
    type: String
  },
  startTime: {
    type: Date,
    default: Date.now
  },
  endTime: {
    type: Date,
    default: Date.now
  },
  score: {
    type: Number
  }
});

playerSchema.virtual('id').get( function() {
  return this._id;
})
.set(function(idValue){
  this._id = idValue;
});

module.exports = mongoose.model('player', playerSchema);
