const express = require('express');
const router = express.Router();

const {
    getUser, 
    deleteUser,
} = require("../controllers/admin");

const { validateDeleteUserObj } = require('../validators/admin');
const { protect, verified } = require('../middlewares/admin');

const {
    addRole,
} = require("../controllers/role");

const { validateAddRole } = require('../validators/role');




router.get('/get-user', protect, verified,  getUser);
router.delete('/delete-user', protect, verified, validateDeleteUserObj, deleteUser);


router.post('/', validateAddRole,  addRole);


module.exports = router;