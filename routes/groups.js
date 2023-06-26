const express = require('express');
const router = express.Router();
const groupService = require('../services/groupsService');
const error = require('../middlewares/errors');


//get all groups
router.get('/', async(req, res,next) => {
    let result = await groupService.getAllGroups();
    if(result.error){
        next(result.error)
    }
    else{
        res.send(result);
    }
    //שולף את פרטי הקבוצות מהדאטה בייס ומציג אותן
})

router.use(error);

module.exports = router;