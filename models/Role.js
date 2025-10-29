const mongoose = require('mongoose');


const roleSchema = mongoose.Schema(
    {
        name: {
            type: String,
            unique: true
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

module.exports = mongoose.model("Role", roleSchema);