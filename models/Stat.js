const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Stat extends Model {};

Stat.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    value: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    game_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'game',
            key: 'id'
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        }
    }

}, 
    {
        sequelize,
        createdAt: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'stat'
    })

module.exports = Stat;