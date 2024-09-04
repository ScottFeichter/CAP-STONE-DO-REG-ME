'use strict';

const { students } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await students.bulkCreate(
      [
        // ============================ SEED 1: =====================================
        {
          householdId: 1,
          headOfHousehold: false,
          accesslevelId: 5,
          firstName: 'Ferris',
          nickName: null,
          middleName: 'Matthew',
          lastName: 'Bueller',
          familyName: null,
          phone: '555-555-5555',
          email: 'saveFerris@aa.io',
          street: '434 Ben Rose Way',
          city: 'Highland Park',
          state: 'IL',
          zip: '75205',
          dob: '03/21/1962',
          firstLang: 'English',
          secondLang: 'French',
          thirdLang: null,
          firstInst: 'Clarinet',
          secondInst: 'Keyboard',
          thirdInst: null,
          yearlyIncome: null,
          biography: 'Prone to illness he misses class often',
          notes: 'Sister more in to dancing',
        },
        // ============================ SEED 2: =====================================
        {
          householdId: 2,
          headOfHousehold: false,
          accesslevelId: 5,
          firstName: 'Wednesday',
          nickName: null,
          middleName: 'Christina',
          lastName: 'Addams',
          familyName: null,
          phone: '555-555-5555',
          email: 'blackDarkness@aa.io',
          street: '666 Cemetary Ridge',
          city: 'Bermuda Triangle',
          state: 'MA',
          zip: '11616',
          dob: '08/26/1944',
          firstLang: 'English',
          secondLang: 'French',
          thirdLang: null,
          firstInst: 'Tuba',
          secondInst: 'Basoon',
          thirdInst: null,
          yearlyIncome: null,
          biography: 'Fondness for spiders',
          notes: 'Macabre but harmless',
        },

        // ============================ SEED 3: =====================================
        {
          householdId: 3,
          headOfHousehold: false,
          accesslevelId: 5,
          firstName: 'Ronald',
          nickName: null,
          middleName: 'Bilius',
          lastName: 'Weasley',
          familyName: null,
          phone: '555-555-5555',
          email: 'ron.weasley@aa.io',
          street: '1414 Burrow Place',
          city: 'Devon',
          state: 'TX',
          zip: '60523',
          dob: '01/01/1999',
          firstLang: 'English',
          secondLang: 'Serpent',
          thirdLang: null,
          firstInst: 'Conductor',
          secondInst: 'Drums',
          thirdInst: null,
          yearlyIncome: null,
          biography: 'He works his magic with the conductor wand',
          notes: 'Married to Hermione',
        },
      ],
      { validate: true }
    );
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'studentss';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        firstName: { [Op.in]: ['Ferris', 'Wednesday', 'Ronald'] },
      },
      {}
    );
  },
};
