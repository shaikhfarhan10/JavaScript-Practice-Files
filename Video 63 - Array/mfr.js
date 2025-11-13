let arr = [1, 3, 5, 7, 9, 11];
let newArr = []
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newArr.push(element ** 2)
}

let newArr1 = arr.map(e => {
    return e ** 2
})
console.log(newArr);
console.log(newArr1);

const greaterThanSeven = (e) => {
    if (e < 7) {
        return true
    }
    return false
}

console.log(arr.filter(greaterThanSeven));

const red = (a, b) => {
    return a + b
}
console.log(arr.reduce(red));
console.log(
    Array.from("Farhan")
);