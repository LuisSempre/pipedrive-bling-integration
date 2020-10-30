const orderRepository = require('../repositories/orderRepository');

class ListAllOrdersController {
  async store(req, res) {
    try {
      const orders = await orderRepository.ordersPerDate();
      return res.json(orders);
    } catch(error) {
      console.log(error);
      return res.status(400).json({ message: 'Error' });
    };
  };
};

module.exports = new ListAllOrdersController();