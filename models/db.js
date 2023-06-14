const mongoose = require('mongoose');

//if error happen it’s catch here
//main().catch(err => console.log(err));
async function connect() {
    //the connect function of mongoose get the connection string to local or remote db
    const connString = "mongodb+srv://miriamYom:<0CXHG,Tsanht!!!>@retirementsimulator.235lldc.mongodb.net/";
    await mongoose.connect(
        connString);
    console.log('connect!!')
}

module.exports = { connect }