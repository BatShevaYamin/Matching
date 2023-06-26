const express = require('express');
const router = express.Router();
const donationService = require('../services/donationService');
const error = require('../middlewares/errors');


//add donation
router.post('/addDonation', async (req, res,next) => {
    //מקבל אובייקט תרומה ומכניס לטבלה
    //מעדכן גם את היעד הנוכחי
    //מעדכן את היעד האישי של המתרים
    let result = await donationService.addDonation(donation);
    if(result.error){
        next(result.error)
    }
    else{
        res.send(result);
    }
    res.send('new donation added!!')
})
//maybe put
router.post('/updateCurrentTarget', async (req, res,next) => {
    let result = await donationService.UpdateCurrentTarget(donation);
    if(result.error){
        next(result.error)
    }
    else{
        res.send(result);
    }
//    res.send('target is updating!!')
})

router.use(error);


module.exports = router;