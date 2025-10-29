const User = require("../../models/User");
const ErrorResponse = require("../../utils/errorResponse");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;

const login = async (req, res, next) => {
    try{
        const { email, password } = req.body;

        const user = await User.findOne({email});
        if(!user){
            throw new ErrorResponse(`Email does not exist`, 400);
        }
        if(!(await bcrypt.compare(password, user.password))){
            throw new ErrorResponse(`Incorrect password`, 400);
        }
        //update the user
        user.lastLogin = Date.now();
        user.save();

        
        // sign new jwt
        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET || 'secret', { expiresIn: '1d' });
        return {
            "token": token,
            "metaData": {}
        }
    }catch(error){
        console.log(error);
        throw new ErrorResponse(`Login Error: ${error.message}`, 500);
    }
}

module.exports = login
