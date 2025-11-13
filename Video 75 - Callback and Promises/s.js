console.log("Farhan is a Hacker");
console.log("He is Brilliant");

setTimeout(() => {
    console.log("I am inside SetTimeOut");
}, 2000)

setTimeout(() => {
    console.log("I am inside other SetTimeOut");
}, 2000)

console.log("The End");

const fn = () => {
  console.log("Nothing");
}


const callback = (arg, fn) => {
    console.log(arg);
    fn()
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Farhan", fn)
    document.head.append(sc)
}

loadScript("", callback)