const User = require("../../models/User");
const ErrorResponse = require("../../utils/errorResponse");

const getUser = async (req, res, next) => {
    const { limit = 10, page=1 } = req.query;


    const skip = Number(limit) * (Number(page) - 1);

    const user = await User.find().skip(skip).limit(Number(limit));
    const countUser = await User.countDocuments();

    if (!user){
        throw new ErrorResponse(`Users not found`, 400);
    }
    
    const metaData = {
        totalItems: countUser,
        limit: Number(limit),
        pages: Math.ceil(countUser/limit),
        currentPage: Number(page)
    }

    return {
        data: user,
        metaData
    }
}

module.exports = getUser;