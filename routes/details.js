const express = require('express');
const router = express.Router();
const detailsService = require('../services/detailsService');
const error = require('../middlewares/errors');


//maybe put
router.post('/updateMainTarget', async(req, res,next) => {
    let result = await detailsService.updateTheMainTarget(target);
    if(result.error){
        next(result.error)
    }
    else{
        res.send(result);
    }

    // res.send('new donation added!!')
})
//
router.get('/', async(req, res,next) => {
    
    let result = await detailsService.getAllDetails();
    if(result.error){
        next(result.error)
    }
    else{
        res.send(result);
    }
    // res.send('new donation added!!')
})
router.use(error);

module.exports = router;