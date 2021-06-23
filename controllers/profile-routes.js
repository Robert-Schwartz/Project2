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
router.get('/edit/:id', (req, res) => {
    Post.findByPk(req.params.id, {
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
            if (dbPostData) {
                const post = dbPostData.get({ plain: true });
                res.render('edit-post', {
                    post,
                    loggedIn: true
                });
            } else {
                res.status(404).end();
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});



module.exports = router;