const express = require("express");
const router = express.Router();

const User = require('./../models/User.model')

router.get("/", (req, res) => {

    User
        .find()
        .then(user => res.status(200).json(user))
        .catch(err => res.status(500).json({ code: 500, message: "Error retrieving user", err }))
})

router.get("/:id", (req, res) => {

    const { id } = req.params
    User
        .findById(id)
        .then(user => res.status(200).json({ user, message: "User getted" }))
        .catch(err => res.status(500).json({ code: 500, message: "Error retrieving a single user", err }))
})

router.put("/:id", (req, res) => {
    const { userName, email, password } = req.body

    console.log(req.body)
    
    const { id } = req.params;
    User
        .findByIdAndUpdate(id, { userName, email, password }, { new: true })
        .then(user => res.status(200).json({ user, message: "User edited" }))
        .catch(err => res.status(500).json({ code: 500, message: "Error editing", err }))
})

router.delete("/:id", (req, res) => {

    const { id } = req.params
    User
        .findByIdAndRemove(id)
        .then(() => res.status(200).json({ message: `User ${id} deleted` }))
        .catch(err => res.status(500).json({ code: 500, message: "Error deleting user", err }))
})

module.exports = router