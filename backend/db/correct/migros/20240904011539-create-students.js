'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      householdId: {
        type: Sequelize.INTEGER
      },
      headOfHousehold: {
        type: Sequelize.BOOLEAN
      },
      accesslevelId: {
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      nickName: {
        type: Sequelize.STRING
      },
      middleName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      familyName: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      street: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      zip: {
        type: Sequelize.STRING
      },
      dob: {
        type: Sequelize.STRING
      },
      firstLang: {
        type: Sequelize.STRING
      },
      secondLang: {
        type: Sequelize.STRING
      },
      thirdLang: {
        type: Sequelize.STRING
      },
      firstInst: {
        type: Sequelize.STRING
      },
      secondInst: {
        type: Sequelize.STRING
      },
      thirdInst: {
        type: Sequelize.STRING
      },
      yearlyIncome: {
        type: Sequelize.INTEGER
      },
      biography: {
        type: Sequelize.TEXT
      },
      notes: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('students');
  }
};
