import express from 'express';
import { getTodos, createTodo, updateTodo, deleteTodo, getATodo } from '../controllers/todo.controller.js'; // Importa createTodo también

const router = express.Router();
router.get("/", getTodos);
router.post("/", createTodo); 
router.put("/update/:id", updateTodo); 
router.delete("/:id", deleteTodo);
router.get("/:id",getATodo);

export default router;