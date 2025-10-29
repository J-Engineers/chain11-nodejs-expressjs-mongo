const express = require("express");
const router = express.Router()


const {update} = require("../controllers/users");
const {update} = require("../validators/users");


router.put("/update-profile", update, update);