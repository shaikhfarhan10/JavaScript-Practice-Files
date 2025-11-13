let obj = {
    a: 1,
    b: "Farhan"
}

console.log(obj)

// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = animal;

class Animal{
    constructor(name){
        this.name = name
        console.log("Object is created...")
    };

    eats(){
        console.log("Kha rha hu")
    }

    runs(){
        console.log("Bhag rha hu")
    }
 
    jumps(){
        console.log("Kudh rha hu")
    }
};

class Lion extends Animal{
    constructor(name){
        super(name)
        console.log("Lion is created...")
    }
}

let a = new Animal("Bunny");
console.log(a)

let l = new Lion("Shera");
console.log(l)