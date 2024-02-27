import express from 'express';
import { getTodos, createTodo, updateTodo } from '../controllers/todo.controller.js'; // Importa createTodo también

const router = express.Router();
router.get("/", getTodos);
router.post("/", createTodo); // Usa createTodo aquí
router.put("/update/:id", updateTodo);

export default router;
