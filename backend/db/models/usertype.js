"use strict";
const { Model, Validator } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserType.hasMany(models.Employee, {
        foreignKey: 'userType_Id',
        // onDelete: "CASCADE",
        hooks: true
      });
      UserType.hasMany(models.Student, {
        foreignKey: 'userType_Id',
        // onDelete: "CASCADE",
        hooks: true
      });

    }
  }
  UserType.init(
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        type: DataTypes.INTEGER,
      },
      type: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'UserType',
    }
  );
  return UserType;
};
