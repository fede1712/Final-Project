const { Schema, model } = require("mongoose")

const billSchema = new Schema({

    cartId: {
        type: Schema.Types.ObjectId,
        ref: 'Cart'
    },
    shopId: {
        type: Schema.Types.ObjectId,
        ref: 'Shop'
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }

}, {
    timestamps: true
})

const Bill = model("Bill", billSchema);

module.exports = Bill;
