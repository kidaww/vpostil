export default function LinenSeeder(Factory) {
  const images = []; // TODO: add images

  const linenArray = await Factory
    .model('App/Models/Linen')
    .createMany(17)
}