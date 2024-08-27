'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EmployeeDepartment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EmployeeDepartment.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageURL: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'EmployeeDepartment',
  });
  return EmployeeDepartment;
};
