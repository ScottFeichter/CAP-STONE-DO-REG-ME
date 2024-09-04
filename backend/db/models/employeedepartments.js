'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class employeedepartments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  employeedepartments.init({
    name: DataTypes.STRING,
    imgurl: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'employeedepartments',
  });
  return employeedepartments;
};
