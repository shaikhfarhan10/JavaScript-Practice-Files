// alert('Farhan');
// console.log('Farhan');

// let prom1 = new Promise((resolve, reject) => {
//     let a = Math.random();
//     if (a < 0.5) {
//         setTimeout(() => {
//             reject("No random number was not supporting you")
//         }, 500);   
//     }
//     else {
//         setTimeout(() => {
//             console.log("Yes I am Done")
//             resolve("Farhan done it")
//         }, 500);
//     }
// })

// prom1.then((a) => {
//     console.log(a)
// }).catch((err) => {
//     console.log(err)
// })

console.log('Promises Chain');

let promise1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        setTimeout(() => {
            reject("No random number was not supporting you prommise 1")
        }, 500);   
    }
    else {
        setTimeout(() => {
            console.log("Yes I am Done in promise 1")
            resolve("Farhan done it in promise 1")
        }, 500);
    }
})

let promise2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        setTimeout(() => {
            reject("No random number was not supporting you promise 2")
        }, 500);   
    }
    else {
        setTimeout(() => {
            console.log("Yes I am Done in promise 2")
            resolve("Farhan done it in promise 2")
        }, 500);
    }
})

let p3 = Promise.reject([promise1, promise2])
p3.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})