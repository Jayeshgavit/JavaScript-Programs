
//id Selection
const button = document.getElementById("btn1")
console.log(button);
console.dir(button);


//Selecting with ClassName
const heading = document.getElementsByClassName("heading-class");
console.dir(heading);
console.log(heading);


//Selecting with TagName
const paragraph = document.getElementsByTagName("p");
console.dir(paragraph);
console.log(paragraph);


//Query Selector : return first elemsnt
const felement = document.querySelector(".heading-class")
console.log(felement);

//return all nodelist
const elementsall = document.querySelectorAll("p");
console.log(elementsall);


//first child
console.log("first child : "); 
console.log(document.body.firstChild);
console.log("Last Child : ");
console.log(document.body.lastChild);
console.log("children : ");
console.log(document.children[0].children);

