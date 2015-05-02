var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var hotelSchema = new Schema({
	hotel: String,
    city: String
});

module.exports = mongoose.model('Hotels', hotelSchema, 'hotels');