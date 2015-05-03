var mongoose    = require('mongoose');
var moment      = require('moment');
var dateFormat  = 'DD/MM/YYYY';

var AvailabilityModel = require('../models/availability');

module.exports.controller = function(app) {

  app.post('/availability', function(req, res){

    var key         = req.body.key;
    var entryDate   = moment(req.body.entry_date, dateFormat).toISOString(); //|| moment().format(dateFormat);
    var releaseDate = moment(req.body.release_date, dateFormat).toISOString(); //|| '2099-12-30';
    
    var query = {};

    AvailabilityModel
    .find(query, { 'hotel_id':1,'date':1, '_id':0})
    .populate({
      path: 'hotel_id',
      model: 'Hotels',
      select: 'hotel city',
      match: {},
      options : {}
    })
    .where('date').gt(entryDate).lt(releaseDate)
    .where('status').equals(1)
    .exec(function(err, results){

        console.log(results);

        if (err) {
          console.log('ERRO: ', err);
        } else {
          //res.render('availability', { data: results });
        }
    });

  });
};