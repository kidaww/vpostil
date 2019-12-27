'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class LinenOrder extends Model {
  /**
   * Почему то фреймворк жаждет название без буквы s в конце
   * Хрен с ним пусть так и будет
   */
  static get table () {
    return 'linen_order'
  }
}

module.exports = LinenOrder
