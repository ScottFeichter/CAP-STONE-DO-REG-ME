'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class academicdepartments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  academicdepartments.init({
    name: DataTypes.STRING,
    chair: DataTypes.STRING,
    imgurl: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'academicdepartments',
  });
  return academicdepartments;
};
