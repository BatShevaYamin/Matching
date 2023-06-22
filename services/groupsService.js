const groupRepo  = require('../repositories/groupsRepo');

class GroupsService {
    async getAllGroups(){
        return await groupRepo.getAllGroups();
    }

}
module.exports = new GroupsService();