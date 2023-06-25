
const detailsRepo  = require('../repositories/detailsRepo');

class DetailsService {
    async updateTheMainTarget(target) {
        return await detailsRepo.updateTheMainTarget(target);
    }
}
module.exports = new DetailsService();

