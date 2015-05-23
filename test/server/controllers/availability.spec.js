describe("Availability", function() {

    beforeEach(function(done) {

        done();
    });

    it("Availability 1", function() {

    });
});

// var mongoose    = require('mongoose');
// var moment      = require('moment');
// var async       = require('async');
// var dateFormat  = 'DD/MM/YYYY';

// var AvailabilityModel = require('../models/availability');
// var HotelsModel = require('../models/hotels');

// module.exports.controller = function(app) {

//   app.post('/availability', function(req, res){

//     var key         = req.body.key;
//     var entryDate   = moment(req.body.entry_date, dateFormat).toISOString() || moment().toISOString();
//     var releaseDate = moment(req.body.release_date, dateFormat).toISOString() || moment('2099-12-30').toISOString();

//     async.waterfall([
//       function(callback){
//         HotelsModel
//         .find({ $or:[ {'hotel':key}, {'city':key} ]}, {'_id':1})
//         .exec(function(err, hotelFind) {
//           callback(null, hotelFind);
//         });
//       },
//       function(hotels, callback){
//         var arrayHotels = [];
//         for (var i = 0, len = hotels.length; i < len; i++) {
//           arrayHotels.push(hotels[i]._id.toString());
//         };

//         AvailabilityModel
//         .find({}, { 'hotel_id':1,'date':1, '_id':0})
//         .populate({
//           path: 'hotel_id',
//           model: 'Hotels',
//           select: '_id hotel city'
//         })
//         //.where('hotel_id._id').in(arrayHotels)
//         .where('date').gte(entryDate).lte(releaseDate)
//         .where('status').equals(1)
//         .exec(function(err, availabilities){
//           availabilities.forEach(function (item, i) {
//             if(arrayHotels.indexOf(item.hotel_id._id.toString()) === -1){
//               delete availabilities[i];
//             }
//           });
//           callback(null, availabilities);
//         });
//       }
//     ], function (err, results) {
//       if (err) {
//         console.log('ERRO: ', err);
//       } else {
//         res.render('availability', { data: results, moment: moment });
//       }   
//     });
//   });
// };