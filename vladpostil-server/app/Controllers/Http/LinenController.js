'use strict'

const Linen = use('App/Models/Linen');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with linens
 */
class LinenController {
  /**
   * Show a list of all linens.
   * GET linens
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const page = request.get().page || 1;
    
    return await Linen
      .query()
      .with('tags')
      .with('sizes')
      .orderBy('available')
      .paginate(page, 10);
  }
}

module.exports = LinenController
