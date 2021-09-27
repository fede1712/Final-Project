const express = require("express")
const Cart = require("../models/Cart.model")
const router = express.Router()


router.get("/:id", (req, res) => {
    const { id } = req.params
    Cart
        .findById(id)
        .then(cart => res.status(200).json({ cart, message: "Cart getted" }))
        .catch(err => res.status(500).json({ code: 500, message: "Error retrieving a cart", err }))
})

router.post("/", (req, res) => {

    const cart = req.body
    Cart
        .create(cart)
        .then(cart => res.status(200).json({ cart, message: "Cart created" }))
        .catch(err => res.status(500).json({ code: 500, message: "Error creating cart", err }))
})

router.put("/:id", (req, res) => {

    const { id } = req.params
    Cart
        .findByIdAndUpdate(id, req.body, { new: true })
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