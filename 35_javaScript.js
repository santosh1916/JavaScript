let t = document.body.firstElementChild.firstElementChild
console.log(t)
console.log(t.rows)
console.log(t.tHead) // accesss table head
console.log(t.tHead.firstElementChild) 
console.log(t.tFoot) // null becouse in this table there is no any table Footer
console.log(t.caption) 
console.log(t.tBodies)  
console.log(t.rows[0].rowIndex) //row index at 0

console.log(typeof document) //object
console.log(typeof window) // object