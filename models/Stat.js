const { Model, DataTypes, INTEGER, STRING } = require('sequelize');

class Stat extends Model {};

Stat.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        DataTypes: STRING,
        allowNull: false
    }, 
    value: {
        DataTypes: {STRING, INTEGER},
        allowNull: false
    },
    game_id: {
        DataTypes: INTEGER,
        references: {
            model: 'game',
            key: "id"
        }
    }
})

module.exports = Stat;