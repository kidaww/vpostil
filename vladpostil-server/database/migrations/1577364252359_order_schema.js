'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderSchema extends Schema {
  up () {
    this.create('orders', (table) => {
      table.increments();

      table.string('name', 80);
      table.string('lastname', 80);
      table.string('email', 80);
      table.string('phone', 80);
      table.string('comment', 1000);

      table.integer('size_type').unsigned();
      table.integer('count').unsigned();

      table.timestamps()
    })
  }

  down () {
    this.drop('orders')
  }
}

module.exports = OrderSchema
