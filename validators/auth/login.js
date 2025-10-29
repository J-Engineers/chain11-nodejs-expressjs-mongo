const Joi = require("joi");
const ErrorResponse = require("../../utils/errorResponse");

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(5).max(50).required()
});


const validateLoginObj = async (req, res, next) => {
    try {
        if(!req.body || Object.keys(req.body).length === 0){
            return next(new ErrorResponse(`Missing request body`, 400));
        }
        const value = await loginSchema.validateAsync(req.body);
        req.body = value;
        return next();
    }
    catch (error) {
        return next(new ErrorResponse(`Login Validation Error: ${error}`, 400));
     }
}

module.exports = validateLoginObj;