'use strict'

const Order = use('App/Models/Order');
const LinenOrder = use('App/Models/LinenOrder');
const Size = use('App/Models/Size');

class OrderController {

  async makeOrder({ request, response }) {
    try {
      const userData = request.except('linens');
      const linenOrders = JSON.parse(request.post().linens);
      
      const order = await Order.create(userData);

      for await (const linen of linenOrders) {
        LinenOrder.create({
          order_id: order.id,
          linen_id: linen.linen_id,
          size_id: linen.size_id,
          count: linen.count,
        })
      }
      return response.status(200).send('OK');

    } catch (err) {
      return response.status(500).send('Server Error');
    }

    // Вытянуть ид итемов
    // Создать ордер
    // Связать ордер с итемами в таблице order_items
    // Добавить данные в ордер
    // Сохранить
  }

}

module.exports = OrderController
