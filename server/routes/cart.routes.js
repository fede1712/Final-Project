const express = require("express")
const Cart = require("../models/Cart.model")
const router = express.Router()
const Bike = require('../models/Bike.model')




router.get("/", (req, res) => {
    // let bikeId

    // Bike
    //     .find()
    //     .then(res => bikeId = res.map(elm => elm._id))

    Cart
        .find({ userId: req.session.currentUser })
        .populate('products')
        .then(cart => res.status(200).json({ cart, message: "Cart getted" }))
        .catch(err => res.status(500).json({ code: 500, message: "Error retrieving a cart", err }))
})

router.put("/push", (req, res) => {


    Cart
        .updateOne({ userId: req.session.currentUser }, { $push: { products: req.body.productId } }, { new: true })
        .then(cart => res.status(200).json({ cart, message: "Cart edited" }))
        .catch(err => res.status(500).json({ code: 500, message: "Error editing", err }))
})

router.put('/pull', (req, res) => {

    Cart
        .updateOne({ userId: req.session.currentUser }, { $pull: { products: req.body.productId } }, { new: true })
        .then(cart => res.status(200).json({ cart, message: "Cart edited" }))
        .catch(err => res.status(500).json({ code: 500, message: "Error editing", err }))
})

router.put('/destroy-cart', (req, res) => {

    Cart
        .updateMany({ new: true })
        .then(cart => res.status(200).json({ cart, message: "Cart edited" }))
        .catch(err => res.status(500).json({ code: 500, message: "Error editing", err }))
})



router.delete("/:id", (req, res) => {

    const { id } = req.params
    Cart
        .findByIdAndRemove(id)
        .then(() => res.status(200).json({ message: `Cart ${id} deleted` }))
        .catch(err => res.status(500).json({ code: 500, message: "Error deleting cart", err }))
})

module.exports = router