'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

/**
 * @param {Linen}
 */
Factory.blueprint('App/Models/Linen', async (faker, i) => {
  return {
    name: faker.username(),
    available: faker.bool(),
    have_discount: faker.bool(),
    discount: faker.integer({ min: 10, max: 25 }),
    image: `linen-${i}.jpg`,
  }
})

Factory.blueprint('App/Models/Order', async (faker) => {
  return {
    name: faker.username(),
    lastname: faker.username(),
    email: faker.email(),
    phone: faker.phone(),
    size_type: faker.integer({ min: 1, max: 4 }),
    count: faker.integer({ min: 1, max: 10 })
  }
})

Factory.blueprint('App/Models/LinenOrder', async (faker, i, data) => {
  return {
    linen_id: faker.integer({ min: 1, max: 17 }),
    order_id: data.order_id,
  }
})

Factory.blueprint('App/Models/Size', async (faker, i, data) => {
  return {
    linen_id: data.linen_id,
    price: faker.integer({ min: 100, max: 800 }),
    name: faker.username(),
    size_type: data.size_type
  }
})