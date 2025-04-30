const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/scatch')

const userSchema = mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    isadmin: Boolean,
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