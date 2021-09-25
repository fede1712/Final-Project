const router = require("express").Router();
//const bikesRouter = require('./bikes.routes')
const shopsRouter = require('./shops.routes')
//const authRouter = require('./auth.routes')
//router.use("/bikes", bikesRouter)
router.use("/shop", shopsRouter)
// router.use("/auth", authRouter)
module.exports = router;