const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    contact: String,
    picture: String,
    cart: {
        type: Array,
        default: []
    },
    orders: {
        type: Array,
        default: []
    },
})


module.exports = mongoose.model("user", userSchema)