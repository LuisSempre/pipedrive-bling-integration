const express = require('express');
const router = express.Router();
const ListAllDealsController = require('./controllers/ListAllDealsController');
const ListAllOrdersController = require('./controllers/ListAllOrdersController');
const ListWonDealsController = require('./controllers/ListWonDealsController');

router.get('/deals', ListAllDealsController.store);
router.get('/deals/won', ListWonDealsController.store);

router.get('/orders', ListAllOrdersController.store);

module.exports = router;