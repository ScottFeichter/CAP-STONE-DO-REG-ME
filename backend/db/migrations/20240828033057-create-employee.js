"use strict";

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "Employees",
      {
        id: {
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        employeeDepartment_Id: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: "EmployeeDepartment",
            key: "id",
          },
          // onDelete: "CASCADE"
        },
        academicDepartment_Id: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: "AcademicDepartment",
            key: "id",
          },
          // onDelete: "CASCADE"
        },
        userType_Id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "UserType",
            key: "id",
          },
          // onDelete: "CASCADE"
        },
        firstName1: {
          allowNull: false,
          unique: false,
          type: Sequelize.STRING,
        },
        firstName2: {
          allowNull: true,
          unique: false,
          type: Sequelize.STRING,
        },
        middleName: {
          allowNull: true,
          unique: false,
          type: Sequelize.STRING,
        },
        lastName1: {
          allowNull: false,
          unique: false,
          type: Sequelize.STRING,
        },
        lastName2: {
          allowNull: true,
          unique: false,
          type: Sequelize.STRING,
        },
        personalEmail: {
          type: Sequelize.STRING,
          allowNull: true,
          // validate: {
          //   len: [3, 256],
          //   isEmail: true
          // }
        },
        personalPhone: {
          type: Sequelize.STRING,
          allowNull: false,
          // validate: {
          //   len: [3, 256],
          //   isEmail: true
          // }
        },
        street: {
          allowNull: true,
          unique: false,
          type: Sequelize.STRING,
        },
        city: {
          allowNull: true,
          unique: false,
          type: Sequelize.STRING,
        },
        state: {
          allowNull: true,
          unique: false,
          type: Sequelize.STRING,
        },
        zip: {
          allowNull: true,
          unique: false,
          type: Sequelize.INTEGER,
        },
        dob: {
          allowNull: true,
          unique: false,
          type: Sequelize.STRING,
        },
        age: {
          allowNull: true,
          unique: false,
          type: Sequelize.INTEGER,
        },
        ssn: {
          allowNull: true,
          unique: true,
          type: Sequelize.STRING,
        },
        firstLang: {
          allowNull: false,
          unique: false,
          type: Sequelize.STRING,
        },
        secondLange: {
          allowNull: true,
          unique: false,
          type: Sequelize.STRING,
        },
        thirdLange: {
          allowNull: true,
          unique: false,
          type: Sequelize.STRING,
        },
        firstInst: {
          allowNull: true,
          unique: false,
          type: Sequelize.STRING,
        },
        secondInst: {
          allowNull: true,
          unique: false,
          type: Sequelize.STRING,
        },
        thirdInst: {
          allowNull: true,
          unique: false,
          type: Sequelize.STRING,
        },
        primaryTitle: {
          allowNull: false,
          unique: false,
          type: Sequelize.STRING,
        },
        primaryStartDate: {
          allowNull: false,
          unique: false,
          type: Sequelize.STRING,
        },
        primaryEndDate: {
          allowNull: true,
          unique: false,
          type: Sequelize.STRING,
        },
        primaryPayRate: {
          allowNull: true,
          unique: false,
          type: Sequelize.FLOAT,
        },
        secondaryTitle: {
          allowNull: true,
          unique: false,
          type: Sequelize.STRING,
        },
        secondaryStartDate: {
          allowNull: true,
          unique: false,
          type: Sequelize.STRING,
        },
        secondaryEndDate: {
          allowNull: true,
          unique: false,
          type: Sequelize.STRING,
        },
        secondaryPayRate: {
          allowNull: true,
          unique: false,
          type: Sequelize.FLOAT,
        },
        tertiaryTitle: {
          allowNull: true,
          unique: false,
          type: Sequelize.STRING,
        },
        tertiaryStartDate: {
          allowNull: true,
          unique: false,
          type: Sequelize.STRING,
        },
        tertiaryEndDate: {
          allowNull: true,
          unique: false,
          type: Sequelize.STRING,
        },
        tertiaryPayRate: {
          allowNull: true,
          unique: false,
          type: Sequelize.FLOAT,
        },
        quarternaryTitle: {
          allowNull: true,
          unique: false,
          type: Sequelize.STRING,
        },
        quarternaryStartDate: {
          allowNull: true,
          unique: false,
          type: Sequelize.STRING,
        },
        quarternaryEndDate: {
          allowNull: true,
          unique: false,
          type: Sequelize.STRING,
        },
        quarternaryPayRate: {
          allowNull: true,
          unique: false,
          type: Sequelize.FLOAT,
        },
        biography: {
          allowNull: true,
          unique: false,
          type: Sequelize.TEXT,
        },
        notes: {
          allowNull: true,
          unique: false,
          type: Sequelize.TEXT,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
      },
      options
    );
  },
  async down(queryInterface, Sequelize) {
    options.tableName = "Employees";
    await queryInterface.dropTable(options);
  },
};
