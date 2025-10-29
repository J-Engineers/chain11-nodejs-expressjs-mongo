const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type: String,
    },
    phone: {
        type: String
    },
    password: {
        type: String
    },
    referralCode: {
        type: String
    },
    referredBy: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    verificationCode: {
        type: String
    },
    verificationExpire: {
        type: Date,
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        // type: Enumerator('admin', 'user'),
        default: 'user'
    },
    lastLogin: {
        type: Date,
        default: Date.now()
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("User", userSchema);