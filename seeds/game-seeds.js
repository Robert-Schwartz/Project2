const { Games } = require('../models');

const gameData = [
    {title: 'Fortnite'},
    {title: 'Minecraft'},
    {title: 'Terraria'},
    {title: 'Call of Duty'}
]

const seedGames = () => Games.bulkCreate(gameData);

module.exports = seedGames