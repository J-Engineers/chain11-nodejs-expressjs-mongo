const express = require('express');
const router = express.Router();

const {
    login, 
    register,
} = require("../controllers/auth");
const validateLoginObj = require('../validators/auth/login');


router.post('/login', validateLoginObj,  login);
router.get('/profile', myProfile);
router.put('/update-profile', updateProfile);
router.delete('/delete-account', deleteAccount);

module.exports = router;