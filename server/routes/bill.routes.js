const express = require("express")
const Bill = require("../models/Bill.model")
const router = express.Router()


router.get("/", (req, res) => {

    Bill
        .find()
        .then(() => res.status(200).json({ message: "Bill getted" }))
        .catch(err => res.status(500).json({ code: 500, message: "Error retrieving a bill", err }))
})

router.get("/:id", (req, res) => {
    const { id } = req.params
    Bill
        .findById(id)
        .then(bill => res.status(200).json({ bill, message: "Bill getted" }))
        .catch(err => res.status(500).json({ code: 500, message: "Error retrieving a bill", err }))
})

router.post("/", (req, res) => {

    const bill = req.body
    Bill
        .create(bill)
        .then(bill => res.status(200).json({ bill, message: "Bill created" }))
        .catch(err => res.status(500).json({ code: 500, message: "Error creating bill", err }))
})

module.exports = router