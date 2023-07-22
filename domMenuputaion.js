// // Get the parent element
// var parentElement = document.getElementById('parentElementId');

// // Access the first child
// var firstChild = parentElement.firstChild;

// // Do something with the first child
// console.log(document.body.firstChild);
// console.log(document.body.lastChild); 
// console.log(document.body.childNodes); // dispaly the all child nodes in our page
// let arr = Array.from(document.body.childNodes) // convert the all child nodes into an array 
// console.log(arr) // displaying the array 
// console.log(document.body.firstChild)
a = document.body.firstChild
console.log(a.parentNode)
console.log(a.parentElement)
console.log(a.firstChild.nextSibling)