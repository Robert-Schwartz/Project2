const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes');
const statRoutes = require('./api/stat-routes')

router.use('/api', apiRoutes);
router.use('/stat', statRoutes)
router.use('/dashboard', dashboardRoutes);
router.use('/', homeRoutes);

module.exports = router;