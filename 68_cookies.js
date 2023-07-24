// set cookie in our page
console.log(document.cookie)
document.cookie = "name=Santosh"
document.cookie = "name1=Sant"
document.cookie = "name3=Santosh3"
document.cookie = "name4=Prity"

// add cookie using key value pair
let key = prompt("Enter the key")
let value = prompt("Enter the value")

// document.cookie = `${key}=${value}`
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie)
