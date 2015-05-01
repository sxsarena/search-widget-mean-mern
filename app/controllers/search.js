var mongoose = require('mongoose')
var hotelsModel = require('../models/hotels');

module.exports.controller = function(app) {

  app.get('/search', function(req, res){

  	var query = {
        name : new RegExp('^'+req.query.key, "i"),
        cidade : new RegExp('^'+req.query.key, "i")
    };
    var data = [];

  	hotelsModel
    .find(query, { 'name':1,'cidade':1, '_id':0})
    .exec(function (err, rows) {
  		if(err) {
      		console.log('ERRO: ', err);
		  }

      console.log( rows[0] );

      for(i = 0; i < rows.length; i++) {
        data.push( rows[i].cidade +', '+rows[i].name );
        data.push( rows[i].name );
      }

      res.send(data);

		// res.set('Content-Type', 'application/json');
		// res.send(data);
    });
  });
};