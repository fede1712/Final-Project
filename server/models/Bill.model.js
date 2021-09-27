const { Schema, model } = require("mongoose")

const billSchema = new Schema({

    cartId: {
        type: Schema.Types.ObjectId,
        ref: 'Cart'
    },
    date: {
        type: Date,
        required: true
    }

}, {
    timestamps: true
})

const Bill = model("Bill", billSchema);

module.exports = Bill;
