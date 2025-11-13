console.log('Faulty Calculator');

let random = Math.random()

let a = prompt("Enter you first number")
let c = prompt("Enter Operation")
let b = prompt("Enter your second number")

let obj = {
    "+": "-",
    "-": "+",
    "*": "/",
    "/": "*",
}

if (random > 0.1) {
    console.log(`The result is ${ a } ${ c } ${ b }`),
    alert(`The result is ${eval (`${ a } ${ c } ${ b }`)}`)
}

else {
    c = obj[c]
    alert(`The result is ${eval (`${ a } ${ c } ${ b }`)}`)
}