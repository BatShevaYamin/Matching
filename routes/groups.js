const express = require('express');
const router = express.Router();
const groupService = require('../services/groupsService');

//get all groups
router.get('/', async(req, res) => {
    res.send(await groupService.getAllGroups());
    //שולף את פרטי הקבוצות מהדאטה בייס ומציג אותן
})

module.exports = router;