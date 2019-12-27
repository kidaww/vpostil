'use strict'

const Order = use('App/Models/Order');

class OrderController {

  async makeOrder({ request, response }) {
    // Вытянуть ид итемов
    // Создать ордер
    // Связать ордер с итемами в таблице order_items
    // Добавить данные в ордер
    // Сохранить
  }

}

module.exports = OrderController
