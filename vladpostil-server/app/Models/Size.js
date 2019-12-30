'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Size extends Model {
  static boot () {
    super.boot()
    this.addTrait('NoTimestamp')
  }

  linen_order() {
    return this.hasMany('App/Models/LinenOrder');
  }
}

module.exports = Size
