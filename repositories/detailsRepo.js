const { connect } = require('../models/db');
const { MatchingDetails } = require('../models/details');

class DetailsRepo{
    constructor(){
        connect();
    }
    
    async updateTheMainTarget(target){
        var myquery = {_id:"64999cb0cd157f43ff14d60f"};
        var newvalues = {$set:{target : target}}
        MatchingDetails.updateOne(myquery, newvalues
        //     , function(err, res) {
        //     if (err) throw err;
        //     console.log("1 document updated");
        //     MatchingDetails.close();
        //   }
          );
        //גם פה אולי לשנות לfindOneUpdate
    }
    async getAllDetails(){
        var items = MatchingDetails.find({});
        return items;
    }
}
module.exports = new DetailsRepo();