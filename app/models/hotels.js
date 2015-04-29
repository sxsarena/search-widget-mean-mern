var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var hotelSchema = new Schema({
    cidade: String
});

module.exports = mongoose.model('hotels', hotelSchema);