const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');



class Games extends Model {}

Games.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'game'       
    }
)

module.exports = Games;