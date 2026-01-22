const express = require("express");
const app = express();
const port = 3000;

app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    let siteName = "Adidas"
    let searchText = "Search Now"
    res.sendFile("templates/index.html", { root: __dirname })
})

app.get(`/blog/:slug`, (req, res) => {
    let blogTitle = "Adidas why and when?"
    let blogContent = "Its a very good brand"
    res.render("templates/index.html", { blogTitle: blogTitle, blogContent: blogContent })
})

app.listen(port, () => {
    console.log("Server is Working");
})