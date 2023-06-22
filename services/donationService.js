const donationRepo  = require('../repositories/donationsRepo');

class DonationService {
    async addDonation(donation) {
        return await donationRepo.addDonation(donation);
    }
    async UpdateCurrentTarget(donation) {
        return await donationRepo.UpdateCurrentTarget(donation);
    }
}
module.exports = new DonationService();