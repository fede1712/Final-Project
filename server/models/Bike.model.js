const { Schema, model } = require("mongoose")

const bikeSchema = new Schema({

    name: {
        type: String,
        unique: true,
        required: true,
        default: 'Unknown name',
        minlength: 3,
        maxlength: 100,
        trim: true,
        set: value => value.charAt(0).toUpperCase() + value.substring(1).toLowerCase()
    },
    subtitle: {
        type: String,
        unique: true,
        required: true,
        default: 'Unknown subtitle',
    },
    description: {
        type: String,
        minlength: 3,
        maxlength: 100,
    },
    imageModel: {
        type: String,
        required: true,
        default: ''
    },
    imageDetail: {
        type: String,
        required: true,
        default: ''
    },
    imageHero: {
        type: String,
        required: true,
        default: ''
    },
    price: {
        type: Number,
        require: true,
    },
    quantity: {
        type: Number,
        require: true,
    },
    specifications: {
        // color: {
        //     //Hexadecimal!!!????
        // }, toString(16)
        batteryRange: {
            type: Number,
            required: true,
            minlength: 1,
            maxlength: 100,
        },
        assistSpeed: {
            type: Number,
            required: true,
            minlength: 1,
            maxlength: 100,
        },
        motor: {
            type: String,
            minlength: 3,
            maxlength: 100,
        },
        battery: {
            type: String,
            minlength: 3,
            maxlength: 100,
        },
    },
}, {
    timestamps: true
})

const Bike = model("Bike", bikeSchema);

module.exports = Bike;
