//Q1 What will  the following print in JavaScript
/*
let str = "San\"tosh"
console.log(str.length) // 8
*/


// Q2 Explore include function
/*
const sentance = 'The Mango is king of Fruits'
// const word ='Mango' // is return
const word ='Apple' //is not return
console.log(`The Word "${word}" ${sentance.includes(word) ? 'is' : 'is not'} in the sentence`);
// endsWith and startsWith Exploration
console.log(`This is ${sentance.startsWith('The')}`); // true
console.log(`This is ${sentance.endsWith('The')}`); // False
console.log(`This is ${sentance.startsWith('Fruits')}`); // False
console.log(`This is ${sentance.endsWith('Fruits')}`); // True
*/


//Q3 Write a Program to convert a given string in Lowercase and Uppercase
/*
let str = "Mango"
console.log(str.toLowerCase())
console.log(str.toUpperCase())
*/


//Q4 Extract the Amount from the given string 
// "please give me Rs 1000"
/*
let str4 = "Please give me Rs 1000"
let Amount = str4.slice("Please give me Rs ".length)
console.log(Amount)
console.log(typeof Amount) // String
let n = Number.parseInt(Amount)
console.log(n)
console.log(typeof n) // now it is return Number
*/


//Q5 Try to Change 4th charecter of the given string can you able to do it?
/*
let str5 = "Mango"
console.log(str5.replace("g","b"))
*/