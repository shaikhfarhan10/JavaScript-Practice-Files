/*
This is for making a server
const http = require('node:http');
const hostname = "127.0.0.1";
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Farhan</h1>");
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
*/

const express = require('express')
const app = express()
const port = 3000

// app.use(express.static('public')) 
// it is for displaying on URL

app.get('/',(req,res)=>{
    res.send("Hello World!")
})

app.get('/about',(req,res)=>{
    res.send("About Us")
})

app.get('/contact',(req,res)=>{
    res.send("Contact Us")
})

app.get('/blog',(req,res)=>{
    res.send("Blog")
})

app.get('/blog/:slug',(req,res)=>{
    // http://localhost:3000/blog/Farhan?mode=dark&module=in
    console.log(req.params);
    console.log(req.query);
    res.send(`Hello ${req.params.slug}`)
})

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`);
})