const router = require('express').Router();
const sequelize = require('../config/connection');
const { Games, Comment, Like, User } = require('../models');

router.get('/', (req, res) => {
    console.log('hello');
    Games.findAll().then(data => {
        res.render('login');
    })  
})

module.exports = router;