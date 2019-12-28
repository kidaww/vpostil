async function LinenOrderSeeder(Factory) {
  const orders = await Factory
    .model('App/Models/Order')
    .createMany(17);
    
  for (const order of orders) {
    await Factory
      .model('App/Models/LinenOrder')
      .create({ order_id: order.id })
  }
}

module.exports = LinenOrderSeeder;
