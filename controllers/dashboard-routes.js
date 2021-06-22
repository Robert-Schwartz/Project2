const router = require('express').Router();
const { Games, Comment, Like, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    Games.findAll({
        where: {
            user_id: req.session.user_id
        }
    }).then(dbGameData => {

        const games = dbGameData.map(post => post.get({plain: true}));

        res.render('profile', {games, loggedIn: true});
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})



module.exports = router;