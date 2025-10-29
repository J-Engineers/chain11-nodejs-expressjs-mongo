const express = require('express');
const router = express.Router();

const {
    getUser, 
    deleteUser,
} = require("../controllers/admin");

const { validateDeleteUserObj } = require('../validators/admin');
const { protect, verified } = require('../middlewares/admin');


router.get('/get-user', protect, verified,  getUser);
router.delete('/delete-user', validateDeleteUserObj, deleteUser);

module.exports = router;