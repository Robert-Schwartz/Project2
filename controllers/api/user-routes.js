const multer = require('multer');
const User = require('../../models/User');
const router = require('express').Router();
const images = multer('../../public/images/')

//User create route, username is passed in from the event call on the front end.
router.post('/profileimg', images.single('avatar'), (req, res) => {
    res.send();
})

router.post('/profiles', (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        
    }).then(result => {
        res.json(result)
    })
})