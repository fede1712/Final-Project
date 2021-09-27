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
    quantity: {
        type: Number,
        required: true,
        min: [1, 'La cantidad no puede ser inferior a  1'],
        default: 1

    },
    totalPrice: {
        type: Number
    }
}, {
    timestamps: true
})

const Cart = model("Cart", cartSchema);

module.exports = Cart;
