const mongoose = require('mongoose');

const groupSchema = mongoose.Schema({
    name : String,
    listOfCollectors: [String]

}, {collection: "Groups"});
const Group = new mongoose.model('Groups', groupSchema);
module.exports = { Group };

