'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('employees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      employeeDepartmentId: {
        type: Sequelize.INTEGER
      },
      academicDepartmentId: {
        type: Sequelize.INTEGER
      },
      accessLevelId: {
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
      ssn: {
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
      primaryTitle: {
        type: Sequelize.STRING
      },
      primaryStartDate: {
        type: Sequelize.STRING
      },
      primaryEndDate: {
        type: Sequelize.STRING
      },
      primaryPayRate: {
        type: Sequelize.STRING
      },
      secondaryTitle: {
        type: Sequelize.STRING
      },
      secondaryStartDate: {
        type: Sequelize.STRING
      },
      secondaryEndDate: {
        type: Sequelize.STRING
      },
      secondaryPayRate: {
        type: Sequelize.INTEGER
      },
      tertiaryTitle: {
        type: Sequelize.STRING
      },
      tertiaryStartDate: {
        type: Sequelize.STRING
      },
      tertiaryEndDate: {
        type: Sequelize.STRING
      },
      tertiaryPayRate: {
        type: Sequelize.INTEGER
      },
      quarternaryTitle: {
        type: Sequelize.STRING
      },
      quarternaryStartDate: {
        type: Sequelize.STRING
      },
      quarternaryEndDate: {
        type: Sequelize.STRING
      },
      quarternaryPayRate: {
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
    await queryInterface.dropTable('employees');
  }
};
