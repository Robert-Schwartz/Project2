const seedGames = require('./game-seeds');
const seedStats = require('./stat-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: false });

    await seedGames();
    await seedStats();
};

seedAll();