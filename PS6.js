// // Write a program using prompt funtion to take inpute of age as a value from the user and use alert to tell him if he can drive or not!

// let age = prompt("Enter your age So, we can tell you to drive or not according to your age")
// Number.parseInt(age)
// if(age >= 18 && age <= 50){
//     document.write("Your age is " + age + " So,You can drive")
// }
// else if(age > 50){
//     document.write("you are more than 50 years So, I suggest please don't Drive!")
// }else{
//     document.write("you are below 18 So, please wait for Some Year")
// }

// Write a program using prompt funtion to take inpute of age as a value from the user and use alert to tell him if he can drive or not!
/*
let age = prompt("Enter your age")
age = Number.parseInt(age)

const canDrive = (age) => {
    return age >= 18 ? true : false
}
if(canDrive(age)){
    document.write("Yes! you can drive")
}else{
    document.write("you cannot drive")
}
*/
// in Q2 and Q3 use confirm to ask the user if he wants to see the prompt again? and negetive with error
/*
let runAgain = true
const canDrive = (age) => {
    return age >= 18 ? true : false
}
while(runAgain){
    let age = prompt("Enter your age")
    age = Number.parseInt(age)

if(age<0){
    console.error("Please! Enter the valid age?")
    break;
}
if(canDrive(age)){
    alert("Yes! you can drive")
}else{
    alert("you cannot drive")
}
runAgain = confirm("Do you want to play again")
}


// Q5 Write a program to change the url to google.com (redriction) of user enter a number greater than 10?
let num = prompt("Enter a number to change the page\n greater than 4 = go to google.com")
num = Number.parseInt(num)
if(num>4){
    document.location = "https://www.google.com"
}
*/
// Change the background color according to user input
let color = prompt("Enter the color name that is case sensitive")
document.body.style.background = color