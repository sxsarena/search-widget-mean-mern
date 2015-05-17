var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var availabilitySchema = new Schema({
    hotel_id: { type: Number, ref: 'Hotels' },
    date: Date,
    status: Number
});

module.exports = mongoose.model('Availability', availabilitySchema, 'availability');