'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LinenTagSchema extends Schema {
  up () {
    this.create('linen_tag', (table) => {
      table.integer('linen_id').unsigned();
      table.integer('tag_id').unsigned();

      table.foreign('linen_id').references('id').inTable('linens').onDelete("cascade");
      table.foreign('tag_id').references('id').inTable('tags').onDelete("cascade");
    })
  }

  down () {
    this.drop('linen_tag')
  }
}

module.exports = LinenTagSchema
