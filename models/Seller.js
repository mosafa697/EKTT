module.exports = (sequelize, DataTypes) => {
    const Seller2 = sequelize.define("Seller2", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            primaryKey: true,
            validate: {
                notEmpty: true
            }
        },
        Name: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        Income: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        }
        
    });
    return Seller2;
}