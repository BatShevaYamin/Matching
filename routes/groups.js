const express = require('express');
const router = express.Router();

//get all groups
router.get('/', (req, res) => {
    res.send("get all groups");
    //שולף את פרטי הקבוצות מהדאטה בייס ומציג אותן
})

module.exports = router;