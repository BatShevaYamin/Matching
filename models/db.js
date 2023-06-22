const mongoose = require('mongoose');

//if error happen it’s catch here
//main().catch(err => console.log(err));
async function connect() {
    //the connect function of mongoose get the connection string to local or remote db
    console.log("Try connect");
    const connString = "mongodb+srv://miriamYom:m214256190@retirementsimulator.235lldc.mongodb.net/Matching";
    await mongoose.connect(connString);
    console.log('connect!!')
}

module.exports = { connect }