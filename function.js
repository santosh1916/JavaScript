let a = 8
let b = 4
let c = 10

function sum(x,y){
    return x + y

} 
console.log("the sum of a and b = ",sum(a,b) )// call the funtion,invoke the funtions
console.log("the sum of b and c = ",sum(b,c) )
console.log("the sum of c and a = ",sum(c,a) )

console.log(sum(a,b)) // invoke the funtion 

// arrow funtion
const avg = (p,q) => {
    return (p+q)/2
}
console.log("the avg of 9 and 5 =",avg(5,5)) // call the funtions

const avgthree = (r,s,t)=>{
    return (r+s+t)/3
}
console.log("The ave of 3 4 5 is = ",avgthree(3,4,5)) //calling funtions