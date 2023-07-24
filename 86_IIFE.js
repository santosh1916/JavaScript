// IIFE concept--Advance javaScript
/*
let a = ()=>{
       return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(456)
        },4000)
    })
}
 // resolve the value of a
(async ()=>{  //yellow bracket is IIFE
    let b = await a()
    console.log(b)
    let c = await a()
    console.log(c)
    let d = await a()
    console.log(d)
 })();
 //  console.log(d) // throw error becoze at this time d is not define
 */
//-------------------------------------------------------------------------------

//87_video Destructuring
//---------------------------------
let arr = [3,5,6,7,9,11]
// let [a,b,c,d]=arr
// console.log(a,b ,c, d)

// let [a,b,c,...rest]=arr
// console.log(a,b,c,rest)

// let [a, , ,...rest]=arr
// console.log(a, rest) // 3 , [7 to 11]

// let [a, ,d,...rest]=arr
// console.log(a, d, rest) //3 6, [7 to 11]

// let {a,b}= {a:1,b:5}
// console.log(a,b) 

// ----------------------------
let arr1 = [2,4,5,6]
let obj1 = { ...arr1}
console.log(obj1)

function sum(v1,v2,v3){
    return v1+v2+v3
}
let sum1 = sum(...arr1)  // sum take input only three value
console.log(sum1)

//-----------------------------------

obj2 = {
    name: "santosh",
    company: "xyz",
    address: "abc"
}
console.log({...obj2, name:"Prity", company:"this is my company"})
console.log({name:"Aman", company:"lastsoft",...obj2}) // in this not override
console.log({...obj2})