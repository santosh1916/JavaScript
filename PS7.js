// Create a navbar and change firstelement color
/*
let a = document.getElementsByTagName("a")[0];
a.style.color="red"
*/

// Q3 change the color of first and last Elementchild
/*
document.getElementsByTagName("div")[0].firstElementChild.style.color="red"
document.getElementsByTagName("div")[0].lastElementChild.style.color="green"
*/

// Q4 Write a javascript code to change all <a></a> tag background-color in cyan
/*
Array.from(document.getElementsByTagName("a")).forEach((element)=>{
    element.style.background="cyan"
})
*/

