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
    total: {
        type: Number,
        required: true,
        default: 0
    }
}, {
    timestamps: true
})

const Cart = model("Cart", cartSchema);

module.exports = Cart;
