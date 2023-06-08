const express = require('express');
const router = express.Router();

//get all collectors With They Donation
router.get('/', (req, res) => {
    //פונה לטבלת מתרימים, ועבור כל מתרים שולף גם את התרומות שלו ומציג הכל
    res.send("our collectors");
})

//add donation
router.post('/addDonation', (req, res) => {
    //מקבל אובייקט תרומה ומכניס לטבלה
    //מעדכן גם את היעד הנוכחי
    //מעדכן את היעד האישי של המתרים
    res.send('new donation added!!')
})

//UpdatePersonalTarget(By ID)
router.put('/UpdatePersonalTarget/:id', (req, res) => {
    //בודק עפי התז אם מדובר באדמין- מעדכן את היעד הכללי ואם לא- את היעד האישי
    res.send("personal target updeted succesfully!")
})

module.exports = router;