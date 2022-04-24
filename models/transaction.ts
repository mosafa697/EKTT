
import {Model , DataTypes} from 'sequelize';
import  {sequelize} from './index'
  class Transaction extends Model {
    public id !: number;
    public seller_id !: number;
    public  title !: string;
    public  price !: string;
    public image !: string;
    public  lastupdated !: Date;
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

export  { Transaction };
