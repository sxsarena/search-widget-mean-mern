var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var hotelSchema = new Schema({
    name: String
});

module.exports = mongoose.model('hotels', hotelSchema);