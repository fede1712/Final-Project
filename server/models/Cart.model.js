const { Schema, model } = require("mongoose")

const cartSchema = new Schema({
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
    totalPrice: {
        type: Number
    }
}, {
    timestamps: true
})

const Cart = model("Cart", cartSchema);

module.exports = Cart;
