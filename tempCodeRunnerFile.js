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
