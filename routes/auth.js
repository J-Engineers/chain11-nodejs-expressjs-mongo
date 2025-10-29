const express = require('express');
const router = express.Router();

const {
    login, 
    register,
    verify
} = require("../controllers/auth");

const { validateLoginObj, validateRegisterObj, validateVerificationObj } = require('../validators/auth');


router.post('/login', validateLoginObj,  login);
router.post('/register', validateRegisterObj, register);
router.post('/verify', validateVerificationObj, verify);

module.exports = router;