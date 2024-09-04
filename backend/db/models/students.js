'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class students extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  students.init({
    householdId: DataTypes.INTEGER,
    headOfHousehold: DataTypes.BOOLEAN,
    accesslevelId: DataTypes.INTEGER,
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
    firstLang: DataTypes.STRING,
    secondLang: DataTypes.STRING,
    thirdLang: DataTypes.STRING,
    firstInst: DataTypes.STRING,
    secondInst: DataTypes.STRING,
    thirdInst: DataTypes.STRING,
    yearlyIncome: DataTypes.INTEGER,
    biography: DataTypes.TEXT,
    notes: DataTypes.TEXT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'students',
  });
  return students;
};