console.log("This are Loops")

console.log("For Loop")
let a = 1;

for (i = 0; i < 100; i++) {
    console.log(a + i);
}

console.log("")
console.log("For-In Loop")

let obj = {
    name: "Farhan",
    role: "Programmer",
    company: "FS"
}

for (const key in obj) {
    {
        const element = obj[key];
        console.log(key, element)

    }
}

console.log("")
console.log("For-Of Loop")

for (const f of "Farhan") {
    console.log(f)
}


console.log("")
console.log("While Loop")

let f = 0;
while (f < 6) {
    console.log(f)
    f++;
}

console.log("")
console.log("Do-While Loop")
let s = 0;
do {
    console.log(s)
    s++;
} while (s < 7)