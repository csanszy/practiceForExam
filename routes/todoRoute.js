const express = require("express");
const { getAlltodo, postTodo, updateTodo, deleteTodo } = require("../controllers/todoController");

const router = express.Router();

router.get("/todo", getAlltodo);
router.post("/todo", postTodo);
router.put("/todo/:id", updateTodo);
router.delete("/todo/:id", deleteTodo);

module.exports = router;