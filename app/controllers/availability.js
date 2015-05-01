var mongoose = require('mongoose')
var AvailabilityModel = require('../models/availability');

module.exports.controller = function(app) {

  app.get('/availability', function(req, res){
  	
  	// var product = {
  	// 	name: req.body.name,
  	// 	entry_date: req.body.entry_date,
  	// 	release_date: req.body.release_date
  	// };
  	// res.send(product);


  	var query = {};
  	AvailabilityModel
    .find(query, {})
    //.where('status').equals(1)
    //.limit(10)
    .exec(function (err, data) {
      if(err) {
        console.log('ERRO: ', err);
      }
		
      res.set('Content-Type', 'application/json');
      res.send(data);
    });

  });

};