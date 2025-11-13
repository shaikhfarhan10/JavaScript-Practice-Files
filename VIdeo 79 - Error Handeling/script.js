let a = prompt("Enter first number")

let b = prompt("Enter second number")
if(isNaN(a)||isNaN(b)){
    throw SyntaxError("Sorry this is not Allowed")
}
let sum = parseInt(a) + parseInt(b)

function main(){
    let x = 10;
    try {
        console.log("The sum is :", sum*x)
        return true
    } catch (error) {
        console.log("Error aa gya bhai")
        return false
    }
    finally{
        console.log("files are close and db connection is being closed")
    }
}

let c = main()