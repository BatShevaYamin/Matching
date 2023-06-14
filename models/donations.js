const mongooose = require('mongoose');
const donationsSchema = mongooose.Schema({
    donorName: String,
    sum : Number,
    donationMethod : String,
    collector: Object

});
const donations = new mongoose.model('donations', donationsSchema);
module.exports = { donations };
