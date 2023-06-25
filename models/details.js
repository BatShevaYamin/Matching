const mongoose = require('mongoose');

const MatchingSchema = mongoose.Schema({
    name: "Yarid Bnei Hayeshivot",
    target: Number,
    date : "06-08-2023",
    hours : 200,
}, { collection: "MatchingDetails" });
const MatchingDetails = new mongoose.model('MatchingDetails', MatchingSchema);
module.exports = {MatchingDetails};

