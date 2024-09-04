'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class employees extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  employees.init({
    employeeDepartmentId: DataTypes.INTEGER,
    academicDepartmentId: DataTypes.INTEGER,
    accessLevelId: DataTypes.INTEGER,
    firstName: DataTypes.STRING,
    nickName: DataTypes.STRING,
    middleName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    familyName: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.STRING,
    dob: DataTypes.STRING,
    ssn: DataTypes.STRING,
    firstLang: DataTypes.STRING,
    secondLang: DataTypes.STRING,
    thirdLang: DataTypes.STRING,
    firstInst: DataTypes.STRING,
    secondInst: DataTypes.STRING,
    thirdInst: DataTypes.STRING,
    primaryTitle: DataTypes.STRING,
    primaryStartDate: DataTypes.STRING,
    primaryEndDate: DataTypes.STRING,
    primaryPayRate: DataTypes.STRING,
    secondaryTitle: DataTypes.STRING,
    secondaryStartDate: DataTypes.STRING,
    secondaryEndDate: DataTypes.STRING,
    secondaryPayRate: DataTypes.INTEGER,
    tertiaryTitle: DataTypes.STRING,
    tertiaryStartDate: DataTypes.STRING,
    tertiaryEndDate: DataTypes.STRING,
    tertiaryPayRate: DataTypes.INTEGER,
    quarternaryTitle: DataTypes.STRING,
    quarternaryStartDate: DataTypes.STRING,
    quarternaryEndDate: DataTypes.STRING,
    quarternaryPayRate: DataTypes.INTEGER,
    biography: DataTypes.TEXT,
    notes: DataTypes.TEXT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'employees',
  });
  return employees;
};