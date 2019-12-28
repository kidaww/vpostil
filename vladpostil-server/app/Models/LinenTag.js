'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class LinenTag extends Model {
  /**
   * Почему то фреймворк жаждет название без буквы s в конце
   * Хрен с ним пусть так и будет
   */
  static get table () {
    return 'linen_tag'
  }

  static boot () {
    super.boot()
    this.addTrait('NoTimestamp')
  }
}

module.exports = LinenTag
