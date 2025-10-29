const asyncHandler = require("../middlewares/asyncHandler");
const {update} = require("../services/users");

exports.update = asyncHandler(async (req, res, next) => {
    const result = await update(req, res, next);
    return res.status(200).json({
        success: true,
        message: "profile updated successfully",
        data: result
    })
});