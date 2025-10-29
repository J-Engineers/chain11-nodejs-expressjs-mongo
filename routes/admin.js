const express = require('express');
const router = express.Router();

const {
    getUser, 
    deleteUser,
} = require("../controllers/admin");

const { validateDeleteUserObj } = require('../validators/admin');


router.get('/get-user',  getUser);
router.delete('/delete-user', validateDeleteUserObj, deleteUser);

module.exports = router;