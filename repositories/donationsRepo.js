
const { connect } = require('../models/db');
const { Donation } = require('../models/donations');
const {Collector} = require ('../models/collectors');

class DonationsRepo {
    constructor() {
        connect();
    }

    async addDonation(donation) {
        let data = {};
        try {
            data = await Donation.create(donation);
            //the big target is update here
        } catch (err) {
            logger.error('Error::' + err);
        }
        await this.UpdateCurrentTarget(donation);

        return;
        
    }

    async UpdateCurrentTarget(donation) {
        const update = { $inc: { currentTarget: donation.sum } };
        const condition = { id: donation.collectorId };
        await Collector.updateOne(condition, update, function (err, result) {
            if (err) {
                console.error(err);
                return;
            }
            console.log('Target updated successfully');
        })
    }
}
module.exports = new DonationsRepo();
