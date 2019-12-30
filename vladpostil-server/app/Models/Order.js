'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Order extends Model {
  
  linens() {
    return this.belongsToMany('App/Models/Linen')
  }
  linen_order() {
    return this.hasMany('App/Models/LinenOrder');
  }
}

module.exports = Order
