const express = require("express")
const Shop = require("../models/Shop.model");
const router = express.Router()


router.get("/", (req, res) => {

    Shop.find()
        //.select()
        .then(shops => res.status(200).json(shops))
        .catch(err => res.status(500).json({ code: 500, message: "Error retrieving shop", err }))
})


router.get("/:id", (req, res) => {

    Shop.findById(req.params.id)
        .then(shop => res.status(200).json(shop))
        .catch(err => res.status(500).json({ code: 500, message: "Error retrieving shop", err }))
})


router.post("/", (req, res) => {

    const shop = req.body;
    Shop
        .create(shop)
        .then(shop => res.status(200).json({ shop, message: "Shop created" }))
        .catch(err => res.status(500).json({ code: 500, message: "Error creating shop", err }))
})


router.put("/:id", (req, res) => {

    const { id } = req.params;
    Shop.findByIdAndUpdate(id, req.body, { new: true })
        .then(shop => res.status(200).json({ shop, message: "Shop edited" }))
        .catch(err => res.status(500).json({ code: 500, message: "Error editing", err }))
})


router.delete("/:id", (req, res) => {

    const { id } = req.params;
    Shop.findByIdAndDelete(id)
        .then(() => res.status(200).json({ message: `Shop ${id} deleted` }))
        .catch(err => res.status(500).json({ code: 500, message: "Error deleting Shop", err }))
})

module.exports = router