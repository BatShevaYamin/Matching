const mongoose = require('mongoose');

const collectorSchema = mongoose.Schema({
    name: String,
    groupId : String,
    target : Number,
    currentTarget: Number

}, {collection: "Collectors"});

//לבדוק האם זה באות קטנה כי ככה הוא ניגש לקולקשיין או צריך באות גדולה סתם
//ואם כן לשנות פה ובהתאמה באטלס
const Collector = new mongoose.model('Collectors', collectorSchema);
module.exports = { Collector };
