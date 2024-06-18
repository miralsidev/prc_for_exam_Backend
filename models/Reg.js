const mongoose = require('mongoose');
const Reg = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    Phone: {
        type: String,
        required: true
    },
    deletedAt: {
        type: Date,
        default: null
    }
}, { timestamps: true })
const Registration = mongoose.model('Registration', Reg)
module.exports = { Registration }