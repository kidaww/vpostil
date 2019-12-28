'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LinenSchema extends Schema {
  up () {
    this.create('linens', (table) => {
      table.increments();

      table.string('name', 80).notNullable();
      table.boolean('available');
      table.boolean('have_discount');
      table.string('image', 120);
      table.integer('discount', 3);

      table.timestamps();
    })
  }

  down () {
    this.drop('linens')
  }
}

module.exports = LinenSchema
