var mongoose = require('mongoose')
var Availability = require('../models/availability');

module.exports.controller = function(app) {

  app.get('/availability', function(req, res){
  	res.send('Availability');
  });

};