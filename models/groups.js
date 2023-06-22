const { list } = require('cowsay');
const mongooose = require('mongoose');
const groupsSchema = mongooose.Schema({
    name : String,
    listOfCollectors: Array[String]

});
const Group = new mongoose.model('groups', groupsSchema);
module.exports = { Group };
