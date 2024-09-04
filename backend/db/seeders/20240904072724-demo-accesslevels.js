'use strict';



const { accesslevels } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await accesslevels.bulkCreate(
      [
        {
          type: 'Super',
        },
        {
          type: 'Admin',
        },
        {
          type: 'Teacher',
        },
        {
          type: 'Staff',
        },
        {
          type: 'Student',
        }
      ],
      { validate: true }
    );
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'accesslevels';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        type: { [Op.in]: ['Super', 'Admin', 'Teacher'] },
      },
      {}
    );
  },
};
