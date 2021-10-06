const router = require("express").Router();
const bikesRouter = require('./bikes.routes')
const shopsRouter = require('./shops.routes')
const authRouter = require('./auth.routes')
const cartRouter = require('./cart.routes')
const billRouter = require('./bill.routes')
const userRouter = require('./user.routes')
const uploadsRouter = require('./uploads.routes')
const stripeRouter = require('./stripe.routes')


router.use("/bikes", bikesRouter)
router.use("/shop", shopsRouter)
router.use("/auth", authRouter)
router.use("/cart", cartRouter)
router.use("/bill", billRouter)
router.use("/user", userRouter)
router.use("/uploads", uploadsRouter)
router.use('/checkout', stripeRouter)

module.exports = router;
