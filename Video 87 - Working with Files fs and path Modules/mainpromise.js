import { write, writeFile } from "fs";
import fs from "fs/promises"
let a = await fs.readFile("Farhan.txt")
let b = await fs.writeFile("Farhan.txt", "This is the best thing")
let c = await fs.appendFile("Farhan.txt", "\nThis is an amazing Promise")
console.log(a.toString(), b, c);