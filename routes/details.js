const express = require('express');
const router = express.Router();
const detailsService = require('../services/detailsService');

//maybe put
router.post('/updateMainTarget', async(req, res) => {
    
    res.send(await detailsService.updateTheMainTarget(target))
    // res.send('new donation added!!')
})

module.exports = router;