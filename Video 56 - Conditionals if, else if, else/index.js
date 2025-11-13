console.log("Conditionals: if, else if, else ladder")

{
    console.log("Arithmetic Operator")
    let a = 10;
    let b = 7;
    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(a / b);
    console.log(a ** b);
    console.log(a % b);
}
console.log("")
{
    console.log("Assignment Operator")
    let age = 11;
    let grace = 7;

    {
        if ((age += grace) >= 18) {
            console.log("You can drive")
        }
        else {
            console.log("You cannot drive")
        }
    }
    {
        if ((age -= grace) >= 18) {
            console.log("You can drive")
        }
        else {
            console.log("You cannot drive")
        }
    }
    {
        if ((age *= grace) >= 18) {
            console.log("You can drive")
        }
        else {
            console.log("You cannot drive")
        }
    }
    {
        if ((age /= grace) >= 18) {
            console.log("You can drive")
        }
        else {
            console.log("You cannot drive")
        }
    }
    {
        if ((age %= grace) >= 18) {
            console.log("You can drive")
        }
        else {
            console.log("You cannot drive")
        }
    }
    {
        if ((age **= grace) >= 18) {
            console.log("You can drive")
        }
        else {
            console.log("You cannot drive")
        }
    }
}
console.log("")
{
    console.log("Logical Operator")
    let a = 18;
    let b = 17;

    console.log(a != b && b != a)
    console.log(a != b && b == a)
    console.log(a != b || b != a)
    console.log(a != b || b == a)
}

/*
This is 
Multi Line
Comment
*/
console.log("")
{
    console.log("Multiple Line Code in One Line")
    a = 7
    b = 10
    c = a > b ? (a - b) : (b - a)
    console.log(c)

    /*
    translate to:
    if(a>b){
        let c = a - b; 
    }
    else{
        let c = b - a;
    }
    */
}