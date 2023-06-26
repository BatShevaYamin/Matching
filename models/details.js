const mongoose = require('mongoose');

const matchingSchema = mongoose.Schema({
    name: String,
    target: Number,
    date : Date,
    hours : Number,
}, { collection: "MatchingDetails" });
const MatchingDetails = new mongoose.model('MatchingDetails', matchingSchema);
module.exports = {MatchingDetails};

