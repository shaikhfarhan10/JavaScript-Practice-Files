import mongoose from "mongoose";
const ToDoSchema = new mongoose.Schema({
    title: String,
    desc: String,
    isDone: Boolean,
    day: Number
})

export const ToDo = mongoose.model('ToDo', ToDoSchema)