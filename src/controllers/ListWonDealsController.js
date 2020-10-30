const axios = require('axios');
const orderRepository = require('../repositories/orderRepository');
const CreateOrderService = require('../services/createOrder');

const pipedriveAPIToken = process.env.PIPEDRIVE_API_TOKEN;

class ListWonDealsController {
  async store(req, res) {
    try {
      const response = await axios.get(`https://api.pipedrive.com/v1/deals?status=won&start=0&api_token=${pipedriveAPIToken}`);

      const { data } = response.data;
      const orders = await CreateOrderService.create(data);

      await orderRepository.saveOrder(orders);

      return res.json(orders);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: 'Error' });
    };
  };
};

module.exports = new ListWonDealsController();