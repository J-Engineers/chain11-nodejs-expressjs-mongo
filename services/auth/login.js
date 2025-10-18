const ErrorResponse = require("../../utils/errorResponse")

const login = async (req, res, next) => {
    try{
        const { email, password } = req.body;
        return {
            "data": [],
            "metaData": {}
        }
    }catch(error){
        console.log(error);
        throw new ErrorResponse(`Login Error: ${error.message}`, 500);
    }
}

module.exports = login
