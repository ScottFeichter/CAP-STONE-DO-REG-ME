'use strict';



const { facilities } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await facilities.bulkCreate(
      [
        {
          name: 'Online',
          branchId: 1,
        },
        {
          name: 'Auditorium',
          branchId: 2,
        },
        {
          name: 'Room 1',
          branchId: 2,
        },
      ],
      { validate: true }
    );
  },
  async down(queryInterface, Sequelize) {
    options.tableName = 'facilities';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        name: { [Op.in]: ['Online', 'Auditorium', 'Room 1'] },
      },
      {}
    );

  },
};
