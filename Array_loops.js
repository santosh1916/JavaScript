// Array Loop
/*
let num = [1,2,3,4]

// for loop
for(let i=0; i<num.length; i++){
    console.log(num[i])
}

// forEach loop
console.log("Squre of Array below")
num.forEach((element)=>{
    console.log(element*element)
})

// Array.from() = it is used to transfrom an obect , string , or Html Collectons into an Array
let Name = "Santosh"
let arr = Array.from(Name)
console.log(arr)

// for...of
for(let i of num){
    console.log(i)
}
// for...in
for(let item in num){
    console.log(item) // return keys 
}

*/
// Hier JavaSrcipt Method
// map() Method = Creating a new array by performing some Operation on ach array element
const a = [1,2,3,4]
let arr= a.map((value, index ,array)=>{
    console.log(value, index, array)
    return value + 1
})
console.log(arr)

// filter method 
let arr1 = [2,3,4,6,8]
let newArr = arr1.filter((value)=>{
    return value < 4 // return those value which is lessthan 4 => [2,3]
})
console.log(newArr)
console.log(arr1) // filter method does not change original array

// reduce Method in Array
let arr3 = [1,2,3,4]
let NewArr3 = arr3.reduce((value1 ,value2)=>{
    return value1 + value2
})
console.log(NewArr3) // return 10