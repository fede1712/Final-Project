const { Schema, model } = require("mongoose")

const shopSchema = new Schema({

    name: {
        type: String,
        unique: true,
        required: true,
        minlength: 3,
        maxlength: 100,
        trim: true,
        set: value => value.charAt(0).toUpperCase() + value.substring(1).toLowerCase()
    },
    description: {
        type: String,
        minlength: 3,
        maxlength: 100,
    },
    bikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Bike'
    }],
    address: {
        type: {
            type: String,
        },
        coordinates: [Number],
        direction: String
    },

}, {
    timestamps: true
})


const Shop = model("Shop", shopSchema);

module.exports = Shop;