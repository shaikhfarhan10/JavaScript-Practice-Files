class User{
    constructor(name){
        this.name = name;
    }
    get name(){
        return this.__name;
    }
    set name(value){
        if(value.length<4){
            console.log("Name is too Short.");
        }
        this.__name = value
    }
}

let user = new User("JOhn")
console.log(user);

user.name = ""