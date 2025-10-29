const User = require("../../models/User");
const crypto = require("crypto");
const ErrorResponse = require("../../utils/errorResponse");


const verify = async (req, res, next) => {
    const { token } = req.body;
    const updatedToken = crypto.createHash('sha256').update(token).digest('hex');

    const user = await User.findOne({
        verificationCode: updatedToken,
        verificationExpire: { $gt: Date.now() }
    })

    if(!user){
        throw new ErrorResponse(`Invalid token ${token}`, 400);
    }

    user.verificationCode = undefined;
    user.verificationExpire = undefined;
    user.isVerified = true;

    user.save();
    const data = {};
    return data;
}

module.exports = verify;