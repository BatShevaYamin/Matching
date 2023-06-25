const mongoose = require('mongoose');

const donationSchema = mongoose.Schema({
    donorName: String,
    sum : Number,
    donationMethod : String,
    collectorId: String

}, {collection: "Donations"});
const Donation = new mongoose.model('Donations', donationSchema);
module.exports = { Donation };
