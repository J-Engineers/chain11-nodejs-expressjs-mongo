const express = require("express");
const router = express.Router()


const {update} = require("../controllers/users");
const {updateObj} = require("../validators/users");
const { protect, verified } = require("../middlewares/admin");


router.put("/update-profile", protect, verified, update, update);