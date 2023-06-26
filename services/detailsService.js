
const detailsRepo  = require('../repositories/detailsRepo');

class DetailsService {
    async updateTheMainTarget(target) {
        return await detailsRepo.updateTheMainTarget(target);
    }
    async getAllDetails() {
        return await detailsRepo.getAllDetails();
    }
}
module.exports = new DetailsService();

