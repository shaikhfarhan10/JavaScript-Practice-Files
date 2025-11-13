console.log(document.body); 
console.log(document.body.childNodes[1].childNodes);
console.log(document.body.childNodes[1].firstChild);
console.log(document.body.childNodes[1].lastChild);
console.log(document.body.childNodes[1].firstElementChild);
console.log(document.body.childNodes[1].lastElementChild);
document.body.childNodes[1].firstElementChild.style.backgroundColor = "Green";
document.body.childNodes[1].children[1].style.backgroundColor = "Gray";
document.body.childNodes[1].children[2].style.backgroundColor = "Blue";
document.body.childNodes[1].children[3].style.backgroundColor = "Gray";
document.body.childNodes[1].lastElementChild.style.backgroundColor = "Green";


console.log("I am special", document.body.firstElementChild.children[1].previousElementSibling);
console.log("I am special", document.body.firstElementChild.children[1].nextElementSibling);
    