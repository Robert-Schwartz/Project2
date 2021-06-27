const router = require('express').Router();

const apiRoutes = require('./api');
const homepageRoutes = require('./homepage-routes.js');
const profileRoutes = require('./profile-routes');
const statRoutes = require('./api/stat-routes')
const popularRoutes = require('./popular-routes')


router.use('/api', apiRoutes);
router.use('/stat', statRoutes)
router.use('/profile', profileRoutes);
router.use('/', homepageRoutes);
router.use('/popular', popularRoutes);

// router.use((req, res) => {
//     res.status(404).end();
// });

module.exports = router;