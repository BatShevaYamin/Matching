const express = require('express');
const router = express.Router();
const collectorService = require('../services/collectorService');

//get all collectors With They Donation
router.get('/', async(req, res) => {
    //פונה לטבלת מתרימים, ועבור כל מתרים שולף גם את התרומות שלו ומציג הכל
    res.send(await collectorService.getAllCollectors());
    // res.send("our collectors");
})


//UpdatePersonalTarget(By ID)
router.put('/UpdatePersonalTarget/:id/:target', async(req, res) => {
    res.send(await collectorService.UpdatePersonalTarget(id,target))

    //בודק עפי התז אם מדובר באדמין- מעדכן את היעד הכללי ואם לא- את היעד האישי
    res.send("personal target updeted succesfully!")
})

module.exports = router;