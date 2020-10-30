const Order = require('../models/Order');

module.exports = {
  async saveOrder(orders) {
    const savedOrders = await orders.map(
      async ({ numero, idPedido, volumes, value, orgName }) => {
        const order = await Order.create({
          numero,
          idPedido,
          volumes,
          value,
          orgName
        });
        return order;
      }
    );
  },
};