'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Linen extends Model {
  orders() {
    return this.belongsToMany('App/Models/Order')
  }
  tags() {
    return this.belongsToMany('App/Models/Tag');
  }
  sizes() {
    return this.hasMany('App/Models/Size');
  }
}

module.exports = Linen
