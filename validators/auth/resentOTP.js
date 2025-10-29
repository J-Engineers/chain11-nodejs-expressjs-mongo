
const joi = require("joi");
const ErrorResponse = require("../../utils/errorResponse");


const verifySchema =  joi.object({
    email: joi.string().email().required()
});


const validateOTPObj = async (req, res, next) => {
    if(!req.body || Object.keys(req.body).length === 0){
        return next(new ErrorResponse(`Request body is empty or does not exist`, 400));
    }
    try{
        const check = await verifySchema.validateAsync(req.body);
        req.body = check;
        return next();
    }catch(error){
        return next(new ErrorResponse(`Email Verification Error: ${error.message}`, 400));
    }
}


module.exports = validateOTPObj;
