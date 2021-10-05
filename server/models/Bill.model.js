const { Schema, model } = require("mongoose")

const billSchema = new Schema({

    cartId: {
        type: Schema.Types.ObjectId,
        ref: 'Cart'
    },

    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Bike'
        }
    ],

    shopId: {
        type: Schema.Types.ObjectId,
        ref: 'Shop'
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    totalPrice: {
        type: Number
    }

}, {
    timestamps: true
})

const Bill = model("Bill", billSchema);

module.exports = Bill;
