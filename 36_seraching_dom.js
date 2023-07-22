// change to card title to red
// let a = document.getElementsByClassName("card-title")[0] // select 0th index of card-title class

// let changeColor = prompt("Enter the color name which you want to change the color")
// a.style.color = `${changeColor}` // then change it according to user input

let ctitle = document.querySelectorAll(".card-title") // querySelectorAll is used to select through the CSS attribute 
console.log(ctitle)
ctitle[0].style.color = "red"
ctitle[1].style.color = "blue"
ctitle[2].style.color = "green"

let b = document.querySelectorAll(".this")
console.log(b)
b[0].style.color = "red"
b[0].style.background = "black"

console.log(document.getElementsByTagName("a"))
console.log(document.querySelector(".card").getElementsByTagName("a"))
