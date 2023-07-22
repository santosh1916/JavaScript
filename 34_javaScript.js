let a = document.body
console.log("first child of a is :",a.firstChild) // it dispaly any type of childNodes like text,comment,element
console.log("first element child of a is :",a.firstElementChild) // it only dispaly element child
console.log(document.head.nextElementSibling) // body
console.log(document.body.previousElementSibling) // head
