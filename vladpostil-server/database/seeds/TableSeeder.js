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

import LinenSeeder from './LinenSeeder';
import OrderSeeder from './OrderSeeder';
import LinenOrderSeeder from './LinenOrderSeeder';

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class TableSeeder {
  async run () {
    LinenSeeder(Factory);
    OrderSeeder(Factory);
    LinenOrderSeeder(Factory);
  }
}

module.exports = TableSeeder
