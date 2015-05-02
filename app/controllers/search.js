var mongoose = require('mongoose')
var hotelsModel = require('../models/hotels');

module.exports.controller = function(app) {

  app.get('/search/:key', function(req, res){

  	var query = {};
    var regex = new RegExp('^'+req.params.key, "i");

  	hotelsModel
    .find(query, { 'hotel':1,'city':1, '_id':0})
    .or({hotel: regex}, {city: regex})
    .limit(15)
    .exec(function (err, data) {
  		if(err) {
      		console.log('ERRO: ', err);
		  }

      res.set('Content-Type', 'application/json');
      res.send(data);

		// res.set('Content-Type', 'application/json');
		// res.send(data);
    });
  });
};