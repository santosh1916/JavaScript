let first = document.getElementById("first")
let sec = document.getElementById("second")

let a = first.getAttribute("class")
console.log(a)

// to check wheather the given attribute present or not in html if not = return false, if yes = return true
console.log(first.hasAttribute("class")) //true
console.log(first.hasAttribute("style")) // false

// first.setAttribute("hidden" , "ture") // set hidden attribute in html
second.setAttribute("class" ,"sec" ) // set attribute class= "sec" in second div id
first.removeAttribute("class") // to remove attribute class in first div

// manually set any attrinute
// second.setAttribute("data-name", "santosh")
// console.log(second.dataset) // from html
// console.log(second.dataset.game) //from html
// console.log(second.dataset.player) //from html