import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
    // creamos el esquema de nuestro esquema, le decimos que esperamos de ese valor
    title: {type:String, require: true},
    task : { type: String, require: true},
    type : { type: String, enum:["work", "school","free"]},
    
// nos da la fecha de la tarea
},
{timestamp: true}
);

export const Todo = mongoose.model("task", todoSchema);
//definimos variable Todo para que busque información del Esquema en la tabla task
