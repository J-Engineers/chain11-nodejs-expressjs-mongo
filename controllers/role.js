const asyncHandler = require("../middlewares/asyncHandler");
const { 
    addRole
} = require("../services/role");

exports.addRole = asyncHandler(async (req, res, next) => {
    const result = await addRole(req, res, next);
    res.status(200).json({
        "success": true,
        "message": "Role added Successful",
        "data": result
    })
});
