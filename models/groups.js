const { list } = require('cowsay');
const mongooose = require('mongoose');
const groupsSchema = mongooose.Schema({
    id: Number,
    name : String,
    listOfCollectors: Array[{}]

});
const groups = new mongoose.model('groups', groupsSchema);
module.exports = { groups };
