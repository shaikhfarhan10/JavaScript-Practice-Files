// async function getData(){
// return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve(455)
//     },3500)
// })
// }

async function getData(){
    let x = await fetch('http://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    return data
    // console.log(data);
}



async function main(){
    
    console.log("Loading Modules");
    
    console.log("Do something else");
    
    let data = await getData()

    console.log(data);

    console.log("Loading");

    console.log("Process Data");
}

main()
// data.then((v)=>{
    
//     console.log("Load Data");
//     console.log("Process Data");
    
// })