const express = require("express")
const blog = require("./Routes/blog")
const shop = require("./Routes/shop")
const app = express()
const port = 3000

app.use(express.static("public"))
app.use("/blog", blog)
app.use("/shop", shop)

app.get("/", (req, res) => {
    console.log("Hey its a get request");
    res.send("Hello World!")
})

app.post("/", (req, res) => {
    console.log("Hey its a post request");
    res.send("Hello World! Post")
})

app.put("/", (req, res) => {
    console.log("Hey its a put request");
    res.send("Hello World! Put")
})

app.delete("/", (req, res) => {
    console.log("Hey its a delete request");
    res.send("Hello World! Delete")
})

app.get("/index", (req, res) => {
    console.log("Hey this is Index");
    res.sendFile(`templates/index.html`, { root: __dirname })
})

app.get("/blog", (req, res) => {
    console.log("Hey its a get request");
    res.send("Blog Post")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})