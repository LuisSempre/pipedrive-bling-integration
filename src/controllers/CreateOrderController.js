const axios = require('axios');
const orderRepository = require('../repositories/orderRepository');
const CreateOrderService = require('../services/createOrder');
const ListWonDealsController = require('./ListWonDealsController');

class CreateOrderController {
  async create(req, res) {
    try {
      const response = await ListWonDealsController.getWonDeals();
      
      const orders = await CreateOrderService.create(response);

      if(!orders[0]) {
        return res.status(400).json({ message: 'User already registered' }); 
      };
      
      await orderRepository.saveOrder(orders);

      return res.json(orders);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: 'Error' });
    };
  };
};

module.exports = new CreateOrderController();