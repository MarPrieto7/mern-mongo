import express from "express";
import { db } from './dataBase/db.js' 
import todosRoutes from "./routes/routes.js"
import authRoutes from './routes/authRoutes.js'
const app = express();

app.use(express.json())
app.use("/auth", authRoutes)
app.use("/todos", todosRoutes )

db()

app.listen(3000, console.log("Connected"));