'use strict';
import {Model} from 'sequelize';
module.exports = (sequelize: any, DataTypes: any) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
    }
  }
  Transaction.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      validate: {
          notEmpty: true
      }
  },
  seller_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    validate: {
        notEmpty: true
    }
  },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
          notEmpty: true
      }
  },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
          notEmpty: true
      }
  },
    image: {
      type: DataTypes.BLOB("long"),
      allowNull: true,
      validate: {
          notEmpty: true
      }
  },
    lastupdated: {
      type: DataTypes.DATE,
      allowNull: true,
      validate: {
          notEmpty: true
      }
  }
  }, {
    sequelize,
    tableName: 'Transaction',
    modelName: 'Transaction',
  });
  return Transaction;
};