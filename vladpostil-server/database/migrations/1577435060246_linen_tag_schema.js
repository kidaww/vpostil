'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LinenTagSchema extends Schema {
  up () {
    this.create('linen_tag', (table) => {
      table.integer('linen_id').unsigned();
      table.integer('tag_id').unsigned();

      // TODO: onDelete
      table.foreign('linen_id').references('id').inTable('linens');
      table.foreign('tag_id').references('id').inTable('tags');
    })
  }

  down () {
    this.drop('linen_tag')
  }
}

module.exports = LinenTagSchema
