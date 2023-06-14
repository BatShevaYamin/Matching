const mongooose = require('mongoose');
const collectorsSchema = mongooose.Schema({
    id: String,
    name: String,
    group : Object,
    target : Number,
    currentTarget: Number

});
const collectors = new mongoose.model('collectors', collectorsSchema);
module.exports = { collectors };
