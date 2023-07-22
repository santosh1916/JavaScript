// Error handle
/*
try{
    console.log(srity)
    throw new ReferenceError("I am reference Error")
    // throw new Error("I am new error")
}catch(error){
    console.log(error.name) // reference
    console.log(error.message) // how error find
    console.log(error.stack) // how error find
}
*/
try{
    let age = prompt("What is your age")
    age = Number.parseInt(age)
    if(age>120){
    throw new ReferenceError("Age not valid")
    }

}
catch(error){
    console.log(error.name) // reference
    console.log(error.message) // how error find
    console.log(error.stack) // how error find
}