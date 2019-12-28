'use strict'

/*
|--------------------------------------------------------------------------
| Table Seeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const LinenSeeder = require('./LinenSeeder');
const LinenOrderSeeder = require('./LinenOrderSeeder');

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class TableSeeder {
  async run () {
    await LinenSeeder(Factory);
    await LinenOrderSeeder(Factory);
  }
}

module.exports = TableSeeder
