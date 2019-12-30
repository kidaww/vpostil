'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LinenOrderSchema extends Schema {
  up () {
    this.create('linen_order', (table) => {
      table.integer('linen_id').unsigned()
      table.integer('order_id').unsigned()
      table.integer('size_id').unsigned();
      table.integer('count').unsigned();

      table.foreign('linen_id').references('id').inTable('linens').onDelete("cascade");
      table.foreign('order_id').references('id').inTable('orders').onDelete("cascade");
      table.foreign('size_id').references('id').inTable('sizes').onDelete("set null");
    })
  }

  down () {
    this.drop('linen_order')
  }
}

module.exports = LinenOrderSchema
