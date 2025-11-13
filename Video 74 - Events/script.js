let button = document.getElementById("btn")

button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = "<b>Hey you were clicked</b> Enjoy your click"
})


button.addEventListener("contextmenu", ()=>{
    alert("Don't Hack us by Right Click Please!!!!!!!")
})

document.addEventListener("keydown", (e)=>{
    console.log(e.key);
})