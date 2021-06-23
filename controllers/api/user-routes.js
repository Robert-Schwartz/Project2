const router = require('express').Router();
//const multer = require('multer');

const User = require('../../models/User');
//const images = multer('../../public/images/')


//User create route, username is passed in from the event call on the front end.

router.get('/', (req, res) => {
    User.findAll({ attributes: { exclude: ['password'] }})
    .then(result => {
        res.json(result);
    }).catch(err => {
        console.log(err)
        res.status(500).json(err);
    })
})

router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude:  ['password'] },
        where: {
            user_id: req.params.id
        }
    }).then(result => {
        res.json(result)
        res.status(500).json(err);
    })
})

router.post('/', /*image.single(req.body.username),*/ (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        profilePicture: req.body.profilePicture
    }).then(result => {
        req.session.save(() => {
            req.session.user_id = result.id;
            req.session.username = result.username;
            req.session.profilePicture = result.profilePicture;
            req.session.loggedIn = true;

            res.json(result);
        })
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

router.delete('/delete/:id', (req, res) => {
    User.destroy({
        where: {
            user_id: req.params.id
        }
    }).then(result => {
        res.json(result)
    })
})


module.exports = router;