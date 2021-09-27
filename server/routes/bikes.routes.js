const express = require("express")
const Bike = require("../models/Bike.model")
const router = express.Router()


router.get("/:id", (req, res) => {

    const { id } = req.params
    Bike
        .findById(id)
        .then(bike => res.status(200).json({ bike, message: "Bike getted" }))
        .catch(err => res.status(500).json({ code: 500, message: "Error retrieving a single bike", err }))
})

router.post("/", (req, res) => {

    const bike = req.body
    Bike
        .create(bike)
        .then(bike => res.status(200).json({ bike, message: "Bike created" }))
        .catch(err => res.status(500).json({ code: 500, message: "Error creating bike", err }))
})

router.put("/:id", (req, res) => {

    const { id } = req.params
    Bike
        .findByIdAndUpdate(id, req.body, { new: true })
        .then(bike => res.status(200).json({ bike, message: "bike edited" }))
        .catch(err => res.status(500).json({ code: 500, message: "Error editing", err }))
})

router.delete("/:id", (req, res) => {

    const { id } = req.params
    Bike
        .findByIdAndRemove(id)
        .then(() => res.status(200).json({ message: `Bike ${id} deleted` }))
        .catch(err => res.status(500).json({ code: 500, message: "Error deleting bike", err }))
})

module.exports = router