"use strict";
const { Model, Validator } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    static associate(models) {
      // define association here
      Employee.belongsTo(models.EmployeeDepartment, {
        foreignKey: "employeeDepartment_Id",
        // as: ''
      });
      Employee.belongsTo(models.AcademicDepartment, {
        foreignKey: "academicDepartment_Id",
        // as: ''
      });
      Employee.belongsTo(models.UserType, {
        foreignKey: "userType_Id",
        // as: ''
      });
    }
  }
  Employee.init(
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        type: DataTypes.INTEGER,
      },
      employeeDepartment_Id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      academicDepartment_Id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      userType_Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      firstName1: {
        allowNull: false,
        unique: false,
        type: DataTypes.STRING,
      },
      firstName2: {
        allowNull: true,
        unique: false,
        type: DataTypes.STRING,
      },
      middleName: {
        allowNull: true,
        unique: false,
        type: DataTypes.STRING,
      },
      lastName1: {
        allowNull: false,
        unique: false,
        type: DataTypes.STRING,
      },
      lastName2: {
        allowNull: true,
        unique: false,
        type: DataTypes.STRING,
      },
      personalEmail: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [3, 256],
          isEmail: true,
        },
      },
      personalPhone: {
        type: DataTypes.STRING,
        allowNull: false,
        // validate: {
        //   len: [3, 256],
        //   isEmail: true
        // }
      },
      street: {
        allowNull: true,
        unique: false,
        type: DataTypes.STRING,
      },
      city: {
        allowNull: true,
        unique: false,
        type: DataTypes.STRING,
      },
      state: {
        allowNull: true,
        unique: false,
        type: DataTypes.STRING,
      },
      zip: {
        allowNull: true,
        unique: false,
        type: DataTypes.INTEGER,
      },
      dob: {
        allowNull: true,
        unique: false,
        type: DataTypes.STRING,
      },
      age: {
        allowNull: true,
        unique: false,
        type: DataTypes.INTEGER,
      },
      ssn: {
        allowNull: true,
        unique: true,
        type: DataTypes.STRING,
      },
      firstLang: {
        allowNull: false,
        unique: false,
        type: DataTypes.STRING,
      },
      secondLang: {
        allowNull: true,
        unique: false,
        type: DataTypes.STRING,
      },
      thirdLang: {
        allowNull: true,
        unique: false,
        type: DataTypes.STRING,
      },
      firstInst: {
        allowNull: true,
        unique: false,
        type: DataTypes.STRING,
      },
      secondInst: {
        allowNull: true,
        unique: false,
        type: DataTypes.STRING,
      },
      thirdInst: {
        allowNull: true,
        unique: false,
        type: DataTypes.STRING,
      },
      primaryTitle: {
        allowNull: true,
        unique: false,
        type: DataTypes.STRING,
      },
      primaryStartDate: {
        allowNull: true,
        unique: false,
        type: DataTypes.STRING,
      },
      primaryEndDate: {
        allowNull: true,
        unique: false,
        type: DataTypes.STRING,
      },
      primaryPayRate: {
        allowNull: true,
        unique: false,
        type: DataTypes.FLOAT,
      },
      secondaryTitle: {
        allowNull: true,
        unique: false,
        type: DataTypes.STRING,
      },
      secondaryStartDate: {
        allowNull: true,
        unique: false,
        type: DataTypes.STRING,
      },
      secondaryEndDate: {
        allowNull: true,
        unique: false,
        type: DataTypes.STRING,
      },
      secondaryPayRate: {
        allowNull: true,
        unique: false,
        type: DataTypes.FLOAT,
      },
      tertiaryTitle: {
        allowNull: true,
        unique: false,
        type: DataTypes.STRING,
      },
      tertiaryStartDate: {
        allowNull: true,
        unique: false,
        type: DataTypes.STRING,
      },
      tertiaryEndDate: {
        allowNull: true,
        unique: false,
        type: DataTypes.STRING,
      },
      tertiaryPayRate: {
        allowNull: true,
        unique: false,
        type: DataTypes.FLOAT,
      },
      quarternaryTitle: {
        allowNull: true,
        unique: false,
        type: DataTypes.STRING,
      },
      quarternaryStartDate: {
        allowNull: true,
        unique: false,
        type: DataTypes.STRING,
      },
      quarternaryEndDate: {
        allowNull: true,
        unique: false,
        type: DataTypes.STRING,
      },
      quarternaryPayRate: {
        allowNull: true,
        unique: false,
        type: DataTypes.FLOAT,
      },
      biography: {
        allowNull: true,
        unique: false,
        type: DataTypes.TEXT,
      },
      notes: {
        allowNull: true,
        unique: false,
        type: DataTypes.TEXT,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Employee",
    }
  );
  return Employee;
};
