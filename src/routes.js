const express = require('express');
const router = express.Router();
const ListAllDeals = require('./services/ListAllDeals');
const ListWonDeals = require('./services/ListWonDeals');

const pipedriveAPIToken = process.env.PIPEDRIVE_API_TOKEN;

router.get('/deals', ListAllDeals.store);

router.get('/deals/won', ListWonDeals.store);



module.exports = router;