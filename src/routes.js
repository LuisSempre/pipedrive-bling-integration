const express = require('express');
const router = express.Router();
const ListAllDealsController = require('./controllers/ListAllDealsController');
const ListWonDealsController = require('./controllers/ListWonDealsController');

router.get('/deals', ListAllDealsController.store);
router.get('/deals/won', ListWonDealsController.store);

module.exports = router;