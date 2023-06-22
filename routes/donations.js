const express = require('express');
const router = express.Router();

//add donation
router.post('/addDonation', (req, res) => {
    //מקבל אובייקט תרומה ומכניס לטבלה
    //מעדכן גם את היעד הנוכחי
    //מעדכן את היעד האישי של המתרים
    res.send('new donation added!!')
})

module.exports = router;