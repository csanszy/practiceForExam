const express = require("express");
const { getAlluser, postUser, putUser, deleteUser } = require("../controllers/userController");

const router = express.Router();

router.get("/user", getAlluser);
router.post("/user", postUser);
router.put("/user/:id", putUser);
router.delete("/user/:id", deleteUser);


module.exports = router;