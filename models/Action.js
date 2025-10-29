const mongoose = require('mongoose');


const actionSchema = mongoose.Schema(
    {
        service: {
            type: String
        },
        name: {
            type: String,
            unique: true
        },
        role: {
            type: mongoose.Schema.ObjectId()
        },
        status: {
            type: Boolean,
            default: true
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Action", actionSchema);