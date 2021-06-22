const router = require('express').Router();
const sequelize = require('../config/connection');
const { Games, Comment, Like, User } = require('../models');

router.get('/', (req, res) => {
    Games.findAll({
        attributes: [
            'id',
            'title'
        ]
    }).then(dbAllGames => {
        const games = dbAllGames.map(game => game.get({plain: true}));

        res.render('homepage', games);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
    /*if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }*/

    res.render('sign-up');
})

module.exports = router;