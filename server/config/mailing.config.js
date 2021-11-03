const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'tricycle.project.ironhack@gmail.com',
        pass: 'tricycle.project',
    }
})

module.exports = transporter