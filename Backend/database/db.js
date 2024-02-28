import mongoose from "mongoose";

//export nombrada

export const db = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/todolist");
        //esto lo sacamos de los 3 puntos de mongo compas y añadimos el /todolist
        console.log("Connected");
    } catch (error) {
        console.log(error)
        
    }
}