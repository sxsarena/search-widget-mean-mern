var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var availabilitySchema = new Schema({
    date: String
});

module.exports = mongoose.model('availability', availabilitySchema);