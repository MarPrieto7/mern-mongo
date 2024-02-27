import express from 'express';
import { getTodos, createTodo } from '../controllers/todo.controller.js'; // Importa createTodo también

const router = express.Router();
router.get("/", getTodos);
router.post("/", createTodo); // Usa createTodo aquí

export default router;
