'use strict';

const { academicdepartments } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await academicdepartments.bulkCreate([
      {
        name: 'Voice',
        chair: 'Mariah Carey',
        imgurl: null,
      },
      {
        name: 'Bowed Strings',
        chair: 'Yoyo Ma',
        imgurl: null,
      },
      {
        name: 'Plucked Strings',
        chair: 'Jimmy Hendrix',
        imgurl: null,
      },
    ], { validate: true });
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'academicdepartments';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      name: { [Op.in]: ['Voice', 'Bowed Strings', 'Plucked Strings'] }
    }, {});
  }
};
