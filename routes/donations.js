const express = require('express');
const router = express.Router();
const donationService = require('../services/donationService');


//add donation
router.post('/addDonation', async (req, res) => {
    //מקבל אובייקט תרומה ומכניס לטבלה
    //מעדכן גם את היעד הנוכחי
    //מעדכן את היעד האישי של המתרים

    res.send(await donationService.addDonation(donation))
    res.send('new donation added!!')
})
//maybe put
router.post('/updateCurrentTarget', async (req, res) => {
    res.send(await donationService.UpdateCurrentTarget(donation))
    res.send('target is updating!!')
})



module.exports = router;