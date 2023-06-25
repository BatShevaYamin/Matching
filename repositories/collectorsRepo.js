const { connect } = require('../models/db');
const { Collector } = require('../models/collectors');


class CollectorsRepo {
    constructor() {
        connect();
    }
    async getAllCollectors() {
        const collectors = await Collector.find({});
        console.log('collectors:::', collectors);
        return collectors;
    }


    async UpdatePersonalTarget(id, target) {
        console.log("in Repo.......");
        const update = { $set: { target: target } };
        const filter = { _id: id };
        console.log("in Repo2.......");
        

        return await  Collector.updateOne(filter, update);
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