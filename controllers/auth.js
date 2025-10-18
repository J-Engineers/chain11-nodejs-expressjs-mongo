const asyncHandler = require("../middlewares/asyncHandler");
const { 
    login,
    register,
} = require("../services/auth");

exports.login = asyncHandler(async (req, res, next) => {
    const result = login(req, res, next)
    res.status(200).json({
        "sucuess": true,
        "message": "Login Successful",
        "data": result
    })
});

exports.register = asyncHandler(async (req, res, next) => {
    const result = register(req, res, next)
    res.status(200).json({
        "sucuess": true,
        "message": "Registration Successful",
        "data": result
    })
});