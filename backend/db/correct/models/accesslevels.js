'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class accesslevels extends Model {
    static associate(models) {
      // define association here
    }
  }
  accesslevels.init({
    type: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'accesslevels',
  });
  return accesslevels;
};
