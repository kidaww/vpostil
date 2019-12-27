export default function OrderSeeder(Factory) {
  const orders = await Factory
    .model('App/Models/Order')
    .createMany(17);
}