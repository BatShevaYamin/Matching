const express = require('express');
const groups = require('./routes/groups');
const collectors = require('./routes/collectors');

const app = express();
app.use(express.json());

app.listen(3000, () => console.log('app is listening at port 3000'));

//get campaign details
app.get('/getCampaignDetails', (req, res) => {
    //מקבל את דף המצינג ומציג את הפרטים שלו
    res.send('campaign details')
})

app.use('/groups', groups);
app.use('/collectors', collectors);

