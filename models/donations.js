const mongooose = require('mongoose');
const donationsSchema = mongooose.Schema({
    donorName: String,
    sum : Number,
    donationMethod : String,
    collectorId: String

});
const Donation = new mongoose.model('donations', donationsSchema);
module.exports = { Donation };
