const { connect } = require('../models/db');
const { Collector } = require('../models/collectors');


class CollectorsRepo {
    constructor() {
        connect();
    }
    async getAllCollectors() {
            const pipeline = [
              {
                $lookup: {
                  from: "Donation",
                  localField: "_id",
                  foreignField: "collectorId",
                  as: "donationsList"
                }
              }
            ];
            
            const result = await Collector.aggregate(pipeline);
            return result;
          

        // const collectors = await Collector.aggregate([
        //     {$lookup:{from:'Donation', localField:'collectorId', foreignField:'donationsList', as:'_id'}}
        // ]);
        // console.log('collectors:::', collectors);
        // return collectors;
    }

    async UpdatePersonalTarget(id, target) {
        console.log("in Repo.......");
        const update = { target: target };
        const filter = { _id: id };
        console.log("in Repo2.......");
        

        return await  Collector.findOneUpdate(filter, update);
        // await Collector.updateOne(filter, update, function (err, result) {
        //     console.log("in Repo3.......");
        //     if (err) {
        //         console.error(err);
        //         return;
        //     }
        //     console.log('Target updated successfully');
        //     return result;
        // })
    }
}
module.exports = new CollectorsRepo();