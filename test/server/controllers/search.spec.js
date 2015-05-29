var request = require('supertest');
var express = require('express');
var async = require('async');

var app = require('../../../app');

describe('GET /search', function(){
	it('respond with json', function(done){
		request(app).get('/search/:key').set('Accept', 'application/json').expect('Content-Type', /json/).expect(200, done);
	});
});

// var regex = new RegExp('^'+req.params.key, "i");

//   async.series([
//     function(callback){
//       var query = { hotel: regex };
//       HotelsModel
//       .find(query, { 'hotel':1, '_id':0})
//       .exec(function(err, hotelFind) {
//         callback(null, hotelFind);
//       });
//     },
//     function(callback){
//       var query = { city: regex };
//       HotelsModel
//       .find(query, { 'city':1, '_id':0})
//       .exec(function(err, cityFind) {
//         callback(null, cityFind);
//       });
//     }
//   ], function(err, results){
//     if(err) {
//       console.log('ERRO: ', err);
//     }

//     var data = results[0].concat(results[1]); 
//     var arrayData = [];

//     // Tratamento para retornar um array apenas com os valores
//     for (var i = 0, len = data.length; i < len; i++) {
//       if(data[i].hotel){
//         // validacao para duplicidade
//         if(arrayData.indexOf(data[i].hotel) === -1){
//           arrayData.push(data[i].hotel);
//         } 
//       } else if(data[i].city){
//         // validacao para duplicidade
//         if(arrayData.indexOf(data[i].city) === -1){
//           arrayData.push(data[i].city);
//         }          
//       }
//     };

    
//     res.send(arrayData);
//   });