// innerHTML
/*

let x = document.getElementsByTagName("span")[0]
let x1 = document.getElementsByTagName("span")[0]
console.log(x)
console.dir(x1)

let y = document.body.firstChild.nodeName
let z = document.body.firstElementChild.nodeName
console.log(y)
console.log(z)

console.log(first.innerHTML) // it gives span tag element in which id is first
console.log(second.innerHTML) // it gives span tag element in which id is second
console.log(third.innerHTML) // it gives span tag element in which id is third


first.innerHTML="<i>hey! I am italic change by javascript</i>" // we can also set innerHTML using javaScript 
*/


// outter Html
/*
console.log(first.outerHTML)
console.log(second.outerHTML)
first.outerHTML = "<div>Hey! I am div tag</div>" // set outerHTML span to div 
*/

// console.log(document.body.firstChild.nodeValue)

console.log(document.body.textContent) /*
Hey! I am span first
Hey! I am span second
Hey! I am span third */

// first.hidden = false // it is use to show hidden element using dom 