// let obj = {
//     a:1, 
//     b:"Farhan",
// }

// console.log(obj);

// let animal = {
//     eats: true,
// }

// let rabbit = {
//     jumps: true,
// }

// rabbit.__proto__ = animal

class Animal{
    constructor(name){
        this.name = name
        console.log("Object is created.....");
    }
    eats(){
        console.log("Khaa rha hu");
    }
    jumps(){
        console.log("Udh rha hu");
    }
    run(){
        console.log("Bhag rha hu");
    }
}

class Lion extends Animal{
    constructor(name){
        super(name)
        console.log("Object is created and he is a Lion");
    }
}

let a = new Animal("Bunny")
console.log(a);

let b = new Lion("Shera")
console.log(b);