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

        res.render('homepage', {games, loggedIn: req.session.loggedIn});
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/signup', (req, res) => {
    /*if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }*/

    res.render('sign-up');
});

router.get('/createStats', (req, res) => {
    res.render('add-stats');
})
router.get('/addGame', (req, res) => {
    res.render('add-game');
})

// get game logic above
// get game logic above
// get game logic above
// get game logic above

// get game logic above


module.exports = router;