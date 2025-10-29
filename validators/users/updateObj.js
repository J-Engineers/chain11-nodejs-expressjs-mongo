const Joi = require("joi");
const ErrorResponse = require("../../utils/errorResponse");


const updateSchema = Joi.object({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    email: Joi.string().optional(),
    phone: Joi.string().min(11).max(15).required()
});

const validateUpdateObj = async (req, res, next) => {
    if(!req.body || Object.keys(req.body).length === 0){
        next(new ErrorResponse(`Request body not complete`, 400));
    }

    try{
        const value = await updateSchema.validateAsync(equal.body);
        req.body = value
        return next()
    }catch(error){
        next(new ErrorResponse(`Request not validated properly: ${error}`, 400));
    }
}

module.exports = validateUpdateObj