// Write a program to print the marks of a student in an object using for loop
/*
let Marks = {
    Prity: 90,
    san: 89,
    Raja: 85,
    Srity: 95
}
// by for loop
for(let i = 0; i<Object.keys(Marks).length; i++ ){
    console.log("The marks of "+ Object.keys(Marks)[i] + " are " + Marks[Object.keys(Marks)[i]])
}

// by for in loop
for(let key in Marks){
    console.log("the marks of "+ key + " are "+ Marks[key])
}
*/

// Problem No 3
// write a program to choose the correct number until the user type the correct number
/*
let cn = 45
let i
while (i != cn) {
    i = prompt("Enter the correct number")
}
console.log("Congratulation you are choose the correct number",i)
*/

// problem No 4
// Write a program to fine out the mean of any four number
const mean = (a,b,c,d) => {
    return (a+b+c+d)/4
}
console.log("The mean of 4,5,6,7 is =",mean(4,5,6,7))