const express = require('express');
const router = express.Router();
const collectorService = require('../services/collectorService');
const error = require('../middlewares/errors');


//get all collectors With They Donation
router.get('/', async(req, res,next) => {
    //פונה לטבלת מתרימים, ועבור כל מתרים שולף גם את התרומות שלו ומציג הכל
    let result = await collectorService.getAllCollectors();
    if(result.error){
        next(result.error)
    }
    else{
        res.send(result);
    }
    // res.send("our collectors");
})


//UpdatePersonalTarget(By ID)
router.put('/UpdatePersonalTarget/:id/:target', async(req, res,next) => {
    // res.send(req.params.target)
    let result = await collectorService.UpdatePersonalTarget(req.params.id, req.params.target)
    if(result.error){
        next(result.error);
    }
    else{
        res.send(result);
    }
    //בודק עפי התז אם מדובר באדמין- מעדכן את היעד הכללי ואם לא- את היעד האישי
    // res.send("personal target updeted succesfully!")
});

router.use(error);
module.exports = router;