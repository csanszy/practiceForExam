const express = require("express");
const { getAlluser } = require("../controllers/userController");

const router = express.Router();

router.get("/user", getAlluser);

module.exports = router;