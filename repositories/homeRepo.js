const { connect } = require('../models/db');
const { Home } = require('../');

class GroupsRepo{
    constructor(){
        connect();
    }
    
    async getAllGroups(){
        const groups = Group.find({});
        console.log('groups:::', groups);
        return groups;
    }
}
module.exports = new GroupsRepo();