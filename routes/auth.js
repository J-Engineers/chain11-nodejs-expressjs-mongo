const express = require('express');
const router = express.Router();

const {
    login, 
    register,
} = require("../controllers/auth");

const { validateLoginObj, validateRegisterObj } = require('../validators/auth');


router.post('/login', validateLoginObj,  login);
router.post('/register', validateRegisterObj, register);

module.exports = router;