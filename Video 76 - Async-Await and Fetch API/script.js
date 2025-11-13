async function getData(){
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve(455)
      }, 3500); 
    })
}

async function main() {
    
console.log("Loading Module")

console.log("Do something else")

console.log("Load data")
let data = await getData()

console.log(data)

console.log("Process data")

console.log("Data Process Successfully")

}

main()