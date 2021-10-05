const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt")
const bcryptSalt = 10

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
    const { id } = req.params;
    const query = {}

    userName && userName.length > 0 && (query.userName = userName)
    email && email.length > 0 && (query.email = email)
    password && password.trim().length > 0 && (query.password = password)

    User
        .findOne({ email })
        .then(user => {
            if (user && !user._id.equals(id)) {
                res.status(400).json({ code: 400, message: 'Email already exixts' })
                return
            }

            if (query.password) {
                const salt = bcrypt.genSaltSync(bcryptSalt)
                const hashPass = bcrypt.hashSync(query.password, salt)
                query.password = hashPass
            }

            User
                .findByIdAndUpdate(id, query, { new: true })
                .then(user => {
                    req.session.currentUser = user
                    res.status(200).json({ user, message: "User edited" })
                })
                .catch(err => res.status(500).json({ code: 500, message: "Error editing", err }))
        })
        .catch(err => res.status(500).json({ code: 500, message: "Error editing total", err }))
})

router.delete("/:id", (req, res) => {

    const { id } = req.params
    User
        .findByIdAndRemove(id)
        .then(() => res.status(200).json({ message: `User ${id} deleted` }))
        .catch(err => res.status(500).json({ code: 500, message: "Error deleting user", err }))
})

module.exports = router