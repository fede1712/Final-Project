const express = require("express")
const Bill = require("../models/Bill.model")
const router = express.Router()
const User = require('./../models/User.model')

router.get("/all-bills", (req, res) => {

    Bill
        .find()
        .populate({
            path: "userId products shopId"
        })
        .then(bills => res.status(200).json({ bills, message: "All bills getted" }))
        .catch(error => res.status(500).json({ code: 500, message: "Error getting all bills", error }))
})


router.get("/:billId", (req, res) => {

    const { billId } = req.params

    Bill
        .findById(billId)
        .populate({
            path: "userId products shopId"
        })
        .then(bill => res.status(200).json({ bill, message: "Bill getted" }))
        .catch(error => res.status(500).json({ code: 500, message: "Error getting Bill", error: error.message }))
})

module.exports = router