console.log("")
{
    console.log("Multiple Name")
    function nice(name) {
        console.log("Hey " + name + " you are nice")
        console.log("Hey " + name + " you are good")
        console.log("Hey " + name + " your tshirt is good")
        console.log("Hey " + name + " your course is good to")
    }

    nice("Farhan")
    nice("S")
}

console.log("")
{
    console.log("Function of Sum")
    function sum(a, b) {
        // console.log(a + b)
        return a + b
    }


    result1 = sum(7, 10)
    result2 = sum(11, 11)
    result3 = sum(17, 19)
    console.log("The sum of these nuber is:", result1)
    console.log("The sum of these nuber is:", result2)
    console.log("The sum of these nuber is:", result3)
}

console.log("")
{
    console.log("Function of Sum having default value")
    function sum(a, b, c = 11) {
        // console.log(a + b)
        return a + b + c
    }


    result1 = sum(7, 10)
    result2 = sum(11, 11)
    result3 = sum(17, 19, 29)
    console.log("The sum of these nuber is:", result1)
    console.log("The sum of these nuber is:", result2)
    console.log("The sum of these nuber is:", result3)
}

console.log("")
{
    const fun = (x) => {
        console.log("I am Arrow Function", x)
    }

    fun(47)
    fun(53)
    fun(66)
}