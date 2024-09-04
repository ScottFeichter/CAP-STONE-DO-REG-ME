'use strict';

const { employeedepartments } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await employeedepartments.bulkCreate([
      {
        name: 'Principles',
        imgurl: null,
      },
      {
        name: 'Registrars',
        imgurl: null,
      },
      {
        name: 'Teachers',
        imgurl: null,
      },
    ], { validate: true });
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'employeedepartments';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      name: { [Op.in]: ['Principles', 'Registrars', 'Teachers'] }
    }, {});
  }
};
