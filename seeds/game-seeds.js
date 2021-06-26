const { Games } = require('../models');

const gameData = [
    {title: 'Fortnite', description: 'Fortnite is a survival game where 100 players fight against each other in player versus player combat to be the last one standing. It is a fast-paced, action-packed game, not unlike The Hunger Games, where strategic thinking is a must in order to survive. There are an estimated 125 million players on Fortnite.'},
    {title: 'Minecraft', description: 'Minecraft is a video game in which players create and break apart various kinds of blocks in three-dimensional worlds. The games two main modes are Survival and Creative. In Survival, players must find their own building supplies and food. They also interact with blocklike mobs, or moving creatures.'},
    {title: 'Terraria', description: 'Terraria is an action-adventure sandbox game developed by Re-Logic. ... The game features exploration, crafting, building, painting, and combat with a variety of creatures in a procedurally generated 2D world. Terraria received generally positive reviews, with praise given to its sandbox elements.'},
    {title: 'Call of Duty: Modern Warfare', description: 'Call of Duty: Modern Warfare is a 2019 first-person shooter video game developed by Infinity Ward and published by Activision. ... The games Special Ops mode features cooperative play missions that follow up the campaigns story.'}
]

const seedGames = () => Games.bulkCreate(gameData);

module.exports = seedGames