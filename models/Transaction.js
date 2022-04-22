module.exports = (sequelize, DataTypes) => {
    const Transaction2 = sequelize.define("Transaction2", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            primaryKey: true,
            validate: {
                notEmpty: true
            }
        },
        Title: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        Price: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        Image: {
            type: DataTypes.BLOB("long"),
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        LastUpdated: {
            type: DataTypes.DATE,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        }
        
    });
    return Transaction2;
}