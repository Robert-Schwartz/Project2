const router = require('express').Router();
const { Games, Comment, User, Post } = require('../models');

router.get('/', (req, res) => {
    Games.findAll({
        attributes: [
            'id',
            'title',
            'description'
        ]
    }).then(dbAllGames => {
        console.log(dbAllGames);
        const games = dbAllGames.map(game => game.get({ plain: true }));
        console.log(games);
        res.render('homepage', { game: games, loggedIn: req.session.loggedIn });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});


router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('sign-up');
});

router.get('/createStats', (req, res) => {
    res.render('add-stats');
});
router.get('/addGame', (req, res) => {
    res.render('add-game');
});

router.get('/', (req, res) => {
    console.log('homepage routes', req.session);
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
                attributes: ['username']
            },
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    }).then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }))
        res.render('profile', { posts, loggedIn: req.session.loggedIn })
    })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/login', (req, res) => {

    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
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
                attributes: ['username']
            },
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include:
                {
                    model: User,
                    attributes: ['username']
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

// router.get('/:username', (req, res) => {
//     User.findOne({
//         where: {
//             username: req.params.username
//         },
//         attributes: { exclude: ['password'] }
//     }).then(friendData => {
//         res.render('otherUser', { friendData })
//     }).catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

module.exports = router;