const collectorRepo  = require('../repositories/collectorsRepo');

class CollectorService {

    async getAllCollectors() {
        return await collectorRepo.getAllCollectors();
    }
    async UpdatePersonalTarget(id, target) {
        return await collectorRepo.UpdatePersonalTarget(id, target);
    }
}
module.exports = new CollectorService();