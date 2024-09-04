'use strict';

const { test } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await test.bulkCreate([
      {
        firstName: 'Test',
      },
      {
        firstName: 'Fake',
      },
      {
        firstName: 'Model',
      },
    ],
    { validate: true }
  );
},

  async down(queryInterface, Sequelize) {
    options.tableName = 'tests';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        firstName: { [Op.in]: ['Test', 'Fake', 'Model'] },
      },
      {}
    );
  },
};
