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
        .find({ userId: req.session.currentUser._id })
        .populate('products')
        .then(cart => res.status(200).json({ cart, message: "Cart getted" }))
        .catch(err => res.status(500).json({ code: 500, message: "Error retrieving a cart", err }))
})

router.put("/push", (req, res) => {

    console.log(req.body)
    const { productId } = req.body
    console.log(req.session.currentUser._id, productId)


    Cart
        .updateOne({ userId: req.session.currentUser._id }, { $push: { products: productId } }, { new: true })
        .then(cart => res.status(200).json({ cart, message: "Add product to cart" }))
        .catch(err => res.status(500).json({ code: 500, message: "Error adding product to cart", err }))
})

router.put('/pull', (req, res) => {
    const { productId } = req.body

    Cart
        .updateOne({ userId: req.session.currentUser._id }, { $pull: { products: productId } }, { new: true })
        .then(cart => res.status(200).json({ cart, message: "Remove one product from cart" }))
        .catch(err => res.status(500).json({ code: 500, message: "Error remove one product from cart", err }))
})

router.put('/empty-cart', (req, res) => {

    Cart
        .updateOne({ userId: req.session.currentUser._id }, { $set: { products: [] } }, { new: true })
        .then(cart => res.status(200).json({ cart, message: "Empty cart" }))
        .catch(err => res.status(500).json({ code: 500, message: "Error empty cart", err }))
})


module.exports = router