//Create an array of number and take input from the user and add all the element to this array
/*
var arr = []
for(let i = 0; i<4; i++){
    arr.push(Number.parseInt(prompt("Enter the value for an arry")))
}
console.log(arr)
let newArr = arr.reduce((value1,value2)=>{
    return value1+value2
})
console.log(newArr)
*/

// Q1 Create an array of the nuber and take inpute from the user to add number to this array
/*
let arr = [11,32,43,54]
arr.push(Number.parseInt(prompt("Enter the value for an arry")))
console.log(arr)
*/

// Q2 keep adding number to the array in until 0 is added in thia array
/*
let arr1 = []
let n;
do {
    n = Number.parseInt(prompt("Enter a number"))
    arr1.push(n)
} while (n != 0 );
console.log(arr1)
*/

// Q3 filter for number which is devisible by 10 of an array
/*
let arr2 = [10,121,344,506,60,450,870,210]
    arr2.filter((a)=>{
    return a%10
})
console.log(arr2)
*/

// Q4 create an array of squre of given array
/*
let arrS = [2,3,4,6,8,9]
let n = arrS.map((x)=>{
    return x*x
})
console.log(n)
*/

// // Q5 
// let arr3 = [1,2,3,4,5,6,7,8]
// let NewArr3 = arr3.reduce((value1 ,value2)=>{
//     return value1 * value2
// })
// console.log(NewArr3) // return 40320

//  find the lcm of array element

// let arr = []
// for(i = 0; i<6; i++){
//     arr.push(Number.parseInt(prompt("Enter the value")))
// }
// console.log(arr)
// let newArr = arr.reduce((value1 , value2)=>{
// return value1* value2

// })
// console.log(newArr);

// let gcd = function(){
//     return a*b/
// }


// find the gcd oof two Number
/*
function findGCD(a, b) {
    if (b === 0) {
      return a;
    }
  
    return findGCD(b, a % b);
  }
  
  // Example usage:
  const num1 = 45;
  const num2 = 10;
  const gcd = findGCD(num1, num2);
  console.log("GCD:", gcd);
*/
/*
function findLCM(a, b) {
    // Calculate the GCD using the Euclidean algorithm
    const gcd = findGCD(a, b);
  
    // Calculate the LCM using the formula: LCM = (a * b) / GCD
    const lcm = (a * b) / gcd;
  
    return lcm;
  }
  */

//   find gcd
//   var arr = []
//   let n = prompt("Enter the total number of element that you want to find gcd")
// for(let i = 0; i<n; i++){
//     arr.push(Number.parseInt(prompt("Enter the Element for an arry")))
// }
// console.log(arr)
// let newArr = arr.reduce(function findGCD(a, b) {
//     if (b === 0) {
//       return a;
//     }
  
//     return findGCD(b, a % b);
//   })
// console.log(newArr)

// find lcm wrong
// var arr = []
// let n = prompt("Enter the total number of element that you want to find gcd")
// for(let i = 0; i<n; i++){
//   arr.push(Number.parseInt(prompt("Enter the Element for an arry")))
// }
// console.log(arr)
// let newArr = arr.reduce(function findGCD(a, b) {
//   if (b === 0) {
//     return a;
//   }

//   return findGCD(b, a % b);
// })
// let lcm = arr.reduce((value1,value2)=>{
//     return value1*value2
// })
// console.log(lcm/newArr)