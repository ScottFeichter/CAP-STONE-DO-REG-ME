'use strict';

const { branches } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA; // define your schema in options object
}


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await branches.bulkCreate(
      [
        {
          name: 'Online',
          street: 'www',
          city: 'all',
          state: 'all',
          zip: '99999',
        },
        {
          name: 'Mission',
          street: '455 Mission St',
          city: 'San Francisco',
          state: 'CA',
          zip: '94123',
        },
        {
          name: 'Richmond',
          street: '123 44th Ave',
          city: 'San Francisco',
          state: 'CA',
          zip: '94103',
        },
      ],
      { validate: true }
    );


  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'branches';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        name: { [Op.in]: ['Online', 'Mission', 'Richmond'] },
      },
      {}
    );

  }
};
