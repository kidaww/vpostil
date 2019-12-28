async function LinenSeeder(Factory) {
  /**
   * Постельное
   */
  const linens = await Factory
    .model('App/Models/Linen')
    .createMany(17);

  // Константы для размеров, TODO: добавить в модель
  const sizeTypes = [1, 2, 3, 4];

  /**
   * Размеры с ценами к каждому постельному
   */
  for await (const linen of linens) {
    for await (const size of sizeTypes) {
      Factory
        .model('App/Models/Size')
        .create({ linen_id: linen.id, size_type: size })
    }
  }
}

module.exports = LinenSeeder;