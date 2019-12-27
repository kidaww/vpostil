'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

// Public
Route.get('linens', 'LinenController.index');
Route.post('order', 'OrderController.makeOrder');

// Admin
Route.group(() => {
  Route.resource('admin/linens', 'LinenController')
  Route.resource('admin/orders', 'OrderController')
}).namespace('Admin')
