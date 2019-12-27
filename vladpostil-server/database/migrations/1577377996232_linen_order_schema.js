'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LinenOrderSchema extends Schema {
  up () {
    this.create('linen_order', (table) => {
      table.integer('linen_id').unsigned()
      table.integer('order_id').unsigned()

      // TODO: onDelete
      table.foreign('linen_id').references('id').inTable('linens');
      table.foreign('order_id').references('id').inTable('orders');
    })
  }

  down () {
    this.drop('linen_order')
  }
}

module.exports = LinenOrderSchema
