var mongoose = require('mongoose')
var hotelsModel = require('../models/hotels');

module.exports.controller = function(app) {

  app.get('/hotels', function(req, res){

  	var query = {};
  	hotelsModel.find(query, {'cidade':1, 'name':1, '_id':0}, function (err, data) {
  		if(err) {
      		console.log('ERRO: ', err);
		}
		
		res.set('Content-Type', 'application/json');
		res.send(data);
	});
  });
};