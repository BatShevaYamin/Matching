const express = require('express');
const groups = require('./routes/groups');
const collectors = require('./routes/collectors');
const details = require('./routes/details');
const donations = require('./routes/donations');
const logger = require('./middlewares/logger');

const app = express();

app.use(express.json());
app.listen(3000, () => console.log('app is listening at port 3000'));
//get campaign details
// app.get('/getCampaignDetails', (req, res) => {
//     //מקבל את דף המצינג ומציג את הפרטים שלו
//     res.send('campaign details')
// })
app.use(logger('begin'));
app.use('/groups', groups);
app.use('/collectors', collectors);
app.use('/details',details);
app.use('/donations',donations);
app.use(logger('end'));


