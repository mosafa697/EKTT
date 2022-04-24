import {Model , DataTypes} from 'sequelize';
import  {sequelize} from './index'
  class Seller extends Model {
    public id !: number;
    public  name !: string;
    public  income !:number;
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

export  {Seller};
