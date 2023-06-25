const { connect } = require('../models/db');
const { MatchingDetails } = require('../');

class DetailsRepo{
    constructor(){
        connect();
    }
    
    async updateTheMainTarget(target){
        var myquery = {_id:""};
        var newvalues = {$set:{target : target}}
        MatchingDetails.updateOne(myquery, newvalues
        //     , function(err, res) {
        //     if (err) throw err;
        //     console.log("1 document updated");
        //     MatchingDetails.close();
        //   }
          );
    }
}
module.exports = new DetailsRepo();