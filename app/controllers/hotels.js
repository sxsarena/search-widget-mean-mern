var mongoose = require('mongoose')
var Hotels = require('../models/hotels');

module.exports.controller = function(app) {

  app.get('/hotels', function(req, res){
  	res.send('Hotels');
  });

};