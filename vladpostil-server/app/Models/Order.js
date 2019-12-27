'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Order extends Model {
  linens() {
    return this.belongsToMany('App/Models/Linen')
  }
}

module.exports = Order
