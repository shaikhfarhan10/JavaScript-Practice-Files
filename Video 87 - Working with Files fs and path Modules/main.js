const fs = require("fs");
// console.log(fs);
console.log("Starting");
// fs.writeFileSync("Farhan.txt", "Farhan is a Good Boy")
fs.writeFile("Farhan2.txt", "Farhan is a Good Boy", ()=>{
    console.log("Done");
    fs.readFile("Farhan2.txt", (error, data)=>{
        console.log(error, data.toString());
    })
})

fs.appendFile("Farhan.txt", "Farhan_Smarty ", (e,d)=>{
    console.log(d);
})
console.log("Ending");