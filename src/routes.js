const express = require('express');
const router = express.Router();
const ListAllDealsController = require('./controllers/ListAllDealsController');
const ListAllOrdersController = require('./controllers/ListAllOrdersController');
const ListWonDealsController = require('./controllers/ListWonDealsController');
const CreateOrderController = require('./controllers/CreateOrderController');

router.get('/deals', ListAllDealsController.index);
router.get('/deals/won', ListWonDealsController.index);

router.get('/orders', ListAllOrdersController.index);
router.post('/orders', CreateOrderController.create);

module.exports = router;