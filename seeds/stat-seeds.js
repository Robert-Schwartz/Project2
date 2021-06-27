const Stat = require('../models/Stat');

const statSeeds = [
    {name: 'Hours', value: 12, game_id: 1, user_id: 1},
    {name: 'K/D', value: 12, game_id: 2, user_id: 1},
    {name: 'Kills', value: 12, game_id: 3, user_id: 1},
    {name: 'Deaths', value: 12, game_id: 4, user_id: 1},
    {name: 'Hours', value: 12, game_id: 2, user_id: 1},
    {name: 'Hours', value: 12, game_id: 1, user_id: 1}
]

const seedStats = () => Stat.bulkCreate(statSeeds);

module.exports = seedStats;