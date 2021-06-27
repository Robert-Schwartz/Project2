const router = require('express').Router();
const { Games, Comment, Like, User } = require('../models');
const withAuth = require('../utils/auth');
const fs = require('fs');
const Stat = require('../models/Stat');

router.get('/', withAuth, (req, res) => {
    User.findOne({
        where: {
            id: req.session.user_id
        }
    }).then(userData => {
        Stat.findAll({
            where: {
                user_id: req.session.user_id
            },
            include: [
                {
                    model: User,
                    attributes: ['id', 'username']
                },
                {
                    model: Games,
                    attributes: ['id', 'title']
                }
            ]
        }).then(statData => {

            const stats = statData.map(post => post.get({ plain: true }))
            console.log(userData)
            console.log(statData)
            res.render('profile', { user: userData, Stat: stats, loggedIn: true });
        })
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})


router.get('/addstats', (req, res) => {
    Games.findAll().then(gameData => {
        const games = gameData.map(post => post.get({ plain: true }));

        res.render('add-stats', { Games: games });
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
        res.render('popular', { posts })
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