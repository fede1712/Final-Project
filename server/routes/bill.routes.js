const express = require("express")
const { find } = require("../models/Bill.model")
const Bill = require("../models/Bill.model")
const router = express.Router()

router.get("/all-bills", (req, res) => {

    Bill
        .find()
        .then(bills => res.status(200).json({ bills, message: "All bills getted" }))
        .catch(error => res.status(500).json({ code: 500, message: "Error getting all bills", error }))

})


router.get("/:cartId", (req, res) => {

    const { cartId } = req.params

    Bill
        .find({ cartId: cartId })
        .populate("cartId shopId")
        .then(bill => res.status(200).json({ bill, message: "Bill getted" }))
        .catch(error => res.status(500).json({ code: 500, message: "Error getting Bill", error: error.message }))

})

module.exports = router