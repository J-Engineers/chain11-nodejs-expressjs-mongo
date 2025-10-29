const asyncHandler = require("../middlewares/asyncHandler");
const { 
    getUser,
    deleteUser,
} = require("../services/admin");

exports.getUser = asyncHandler(async (req, res, next) => {
    const result = await getUser(req, res, next);
    res.status(200).json({
        "success": true,
        "message": "Users",
        "data": result
    })
});

exports.deleteUser = asyncHandler(async (req, res, next) => {
    const result = await deleteUser(req, res, next);
    res.status(200).json({
        "success": true,
        "message": "User deleted Successful",
        "data": result
    })
});

