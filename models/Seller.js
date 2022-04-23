'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seller extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Seller.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      validate: {
          notEmpty: true
      }
  },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
          notEmpty: true
      }
  },
    income: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
          notEmpty: true
      }
  }
  }, {
    sequelize,
    tableName: 'Seller',
    modelName: 'Seller',
  });
  return Seller;
};