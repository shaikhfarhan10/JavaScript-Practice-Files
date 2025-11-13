console.log("Practice Set 1")
console.log("")
console.log("1st Question")
let a = "Farhan";
let b = 47;
console.log(a + b);

console.log("2nd Question")
let o ={
    name: "Farhan",
    "Job code": 7500,
};

console.log(o);
o.salary = "1000cross";
console.log(o);
o.salary = "10000crores";
console.log(o);
console.log(typeof o.salary)

console.log("3rd Question")
const p ={
    object: "Farhan",
}
console.log(p)
p.object = 47;
console.log(p)

console.log("4th Question")
p.name = "Farhan";
console.log(p)

console.log('5th Question');
const dictionary = {
    "Farhan": "Multi-Billionaire/Trillionaire",
    "Ronaldo": "GOAT; easy to win",
    "Messi": "GOAT; difficult to lose"
};

console.log("Word - Meaning Dictionary")
for(let word in dictionary){
    console.log(`${word} - ${dictionary[word]}`);
}