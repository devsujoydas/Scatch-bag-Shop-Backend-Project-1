const mongoose = require('mongoose');

const onwerSchema = mongoose.Schema({
    fullname: {
        type: String,
        minLength: 3,
        trim: true,
    },
    email: String,
    password: String,
    picture: String,
    cart: {
        type: Array,
        default: []
    },
    products: {
        type: Array,
        default: []
    },
    gstin: String,
})


module.exports = mongoose.model("onwer", onwerSchema)