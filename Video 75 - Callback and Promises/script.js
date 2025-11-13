console.log("Aysyncronus/syncronus");
console.log("Farhan is the hacker");
console.log("S is the hecker");

setTimeout(() => {
    console.log("I am inside settimeout 1")
}, 1000);

setTimeout(() => {
    console.log("I am inside settimeout 2")
}, 2000);

console.log("The End");

const cd = () =>{
    console.log("Everything")
}

const fn = () => {
  console.log("Nothing")
  cd()
}

const callback = (arg) => {
    console.log(arg)
    fn()
}
const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Farhan", fn, cd);
    // sc.onload = fn("Shaikh")
    // sc.onload = cd("Shaikh Farhan")
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)