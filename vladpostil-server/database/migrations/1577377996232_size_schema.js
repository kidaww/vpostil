'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SizeSchema extends Schema {
  up () {
    this.create('sizes', (table) => {
      table.increments();

      table.integer('linen_id').unsigned();
      table.integer('price').unsigned();
      table.string('name');
      table.integer('size_type');

      table.foreign('linen_id').references('id').inTable('linens').onDelete("set null");

      table.timestamps();
    })
  }

  down () {
    this.drop('sizes')
  }
}

module.exports = SizeSchema
