//const multer = require('multer');
const User = require('../../models/User');
const router = require('express').Router();
//const images = multer('../../public/images/')

//User create route, username is passed in from the event call on the front end.


router.post('/create',  (req, res) => {
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

module.exports = router;