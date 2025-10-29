const Joi = require("joi");
const ErrorResponse = require("../../utils/errorResponse");

const deleteUserSchema = Joi.object({
    userId: Joi.string().required()
});

const validateDeleteUserObj = async (req, res, next) =>{

    if(!req.body && Object.keys(req.body).length === 0){
        return next(new ErrorResponse(`The request body is not complet`, 400));
    }
    

    try {   
        const result = await deleteUserSchema.validateAsync(req.body)
        req.body = result
        return next()
    }catch (error){
        return next(new ErrorResponse(`There was an error: ${error}`, 400));
    }

}

module.exports = validateDeleteUserObj;