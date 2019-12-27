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
    return await Linen.query().paginate(page, 10);
  }

  /**
   * Render a form to be used for creating a new linen.
   * GET linens/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    return [];
  }

  /**
   * Create/save a new linen.
   * POST linens
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const linen = Linen.create(request.only(['name', 'price']));
    linen.available = true;
    return await linen.save();
  }

  /**
   * Display a single linen.
   * GET linens/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Linen.find(params.id);
  }

  /**
   * Render a form to update an existing linen.
   * GET linens/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update linen details.
   * PUT or PATCH linens/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    return await Linen.find(params.id).update(request.only['name', 'price']);
  }

  /**
   * Delete a linen with id.
   * DELETE linens/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    return await Linen.find(params.id).delete();
  }
}

module.exports = LinenController
