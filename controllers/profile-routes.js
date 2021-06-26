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

router.get('/addstats', (req, res) => {
    Games.findAll().then(gameData => {
        const games = gameData.map(post => post.get({plain: true}));

        res.render('add-stats', {Games: games});
    });
});
router.get('/', (req, res) => {
    Post.findAll({
        order: [['created_at', 'DESC']],
        attributes: [
            'id',
            'content',
            'title',
            'created_at'
        ],
        include: [
            {
                model: User,
                attributes: ['firstName', 'lastName', 'username']
            },
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['firstName', 'lastName', 'username']
                }
            }
        ]
    }).then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }))
        res.render('popular', {posts})
    })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/post/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'content', 'title', 'created_at'],
        include: [
            {
                model: User,
                attributes: ['firstName', 'lastName', 'username']
            },
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include:
                {
                    model: User,
                    attributes: ['firstName', 'lastName', 'username']
                }

            }
        ]
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            const post = dbPostData.get({ plain: true });
            res.render('add-comment', {
                post,
                loggedIn: req.session.loggedIn
             });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
module.exports = router;