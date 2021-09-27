const router = require("express").Router();
const bikesRouter = require('./bikes.routes')
const shopsRouter = require('./shops.routes')
const authRouter = require('./auth.routes')
const cartRouter = require('./cart.routes')
const billRouter = require('./bill.routes')


router.use("/bikes", bikesRouter)
router.use("/shop", shopsRouter)
router.use("/auth", authRouter)
router.use("/cart", cartRouter)
router.use("/bill", billRouter)

module.exports = router;
