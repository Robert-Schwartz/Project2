const router = require('express').Router();

const Stat = require('../../models/Stat');

router.get('/', (req, res) => {
    Stat.findAll({}).then(dbStatData => res.json(dbStatData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})

router.get('/:id', (req, res) => {
    Stat.findOne({
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

router.post('/', (req, res) => {
    Stat.create({
        name: req.body.name,
        value: req.body.value,
        game_id: req.body.game_id,
        user_id: req.session.user_id
    }).then(newStatData => {
        res.json(newStatData)
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

router.delete('/:id', (req, res) => {
    Stat.delete({
        where: {
            id: req.params.id
        }
    }).then(product => {
        res.json(product)
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

module.exports = router;