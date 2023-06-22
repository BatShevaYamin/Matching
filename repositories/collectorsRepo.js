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
        const update = { $set: { target: target } };
        const condition = { id: id };
        await Collector.updateOne(condition, update, function (err, result) {
            if (err) {
                console.error(err);
                return;
            }
            console.log('Target updated successfully');
        })
    }
}
module.exports = new CollectorsRepo();