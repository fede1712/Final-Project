const router = require("express").Router();

// router.use('/bike', require('./bikes.routes'))
router.use('/auth', require('./auth.routes'))
// router.use('/shop', require('./shops.routes'))

module.exports = router;