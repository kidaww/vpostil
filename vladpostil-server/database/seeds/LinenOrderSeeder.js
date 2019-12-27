export default function LinenOrderSeeder(Factory) {
  for (const order of orders) {
    await Factory
      .model('App/Models/LinenOrder')
      .create({ order_id: order.id })
  }
}
