console.log("Faulty Calculator")

{
    function add(a, b) {
        result = a + b;
        console.log(result);
    }
    function sub(a, b) {
        result = a - b;
        console.log(result);
    }
    function mult(a, b) {
        result = a * b;
        console.log(result);
    }
    function div(a, b) {
        result = a / b;
        console.log(result);
    }
    function sqaure(a, b) {
        result = a ** b;
        console.log(result);
    }
}

let a = Math.random()* (2 - 0.1);
let b = Math.random() * (2 - 0.1);
console.log("The value of B is " + a);
console.log("The value of B is " + b);

if (Math.random() < 1) {
    console.log("Addition of a and b is");
    sub(a, b);
    console.log("Subtraction of a and b is");
    div(a, b);
    console.log("Multiplication of a and b is");
    add(a, b);
    console.log("Division of a and b is");
    sqaure(a, b);
}

else {
    console.log("Addition of a and b is");
    add(a, b);
    console.log("Subtraction of a and b is");
    sub(a, b);
    console.log("Multiplication of a and b is");
    mult(a, b);
    console.log("Division of a and b is");
    div(a, b);
}