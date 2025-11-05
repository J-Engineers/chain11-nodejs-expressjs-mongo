const Joi = require("joi");
const ErrorResponse = require("../../utils/errorResponse");

const addRoleSchema = Joi.object({
    name: Joi.string().required()
})

const validateAddRole = async (req, res, next) => {
    try{
        if(!req.body || Object.keys(req.body).length === 0){
            return next(new ErrorResponse(`Request body is empty`, 400));
        }
        const value = await addRoleSchema.validateAsync(req.body);
        req.body = value;
        next();
    }catch(err) {
        return next(new ErrorResponse(`Role Addition Error: ${err}`, 500));
    }
}

module.exports = validateAddRole;