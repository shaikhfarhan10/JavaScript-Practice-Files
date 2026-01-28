import mongoose from "mongoose";
import express from "express";
import { ToDo } from "./models/ToDo.js";

await mongoose.connect("mongodb://localhost:27017/ToDo")
const app = express()
const port = 3000;

app.get("/", (req, res) => {
    const todo = new ToDo({ title: "Shaikh Farhan", desc: "Today i am Doing Mongoose with Express by my own", isDone: false, day: Math.floor(Math.random()) * 7 + 10 + 29 * Math.random() })
    todo.save()
    res.send("Server is Working")
})

app.get("/a", async (req, res) => {
    let todo = await ToDo.findOne({})
    console.log(todo);
    res.json({ title: todo.title, desc: todo.desc, isDone: todo.isDone, day: todo.day })
})

app.listen(port, () => {
    console.log(`Serving is Working on Port no ${port}`);
})