let person1 = "Santosh" // string define in double cot
console.log(person1)

let person2 = 'prity' // string define in single cot
console.log(person2)

console.log(person1+person2) // join without space b/w sting using '+' symbole

let person3 = `Prity` // string define with literals 
let person4 = `Santosh` // string define with literals 

let santence = `${person3} is frnd of ${person4}`
let santence1 = `${person1} is frnd of ${person2}`
console.log(santence)
console.log(santence1)

// Escape Sequance Characters
let fruit = 'Bana\'na'
console.log(fruit.length)
console.log(fruit)
let fruit1 = "Bana\"na"
console.log(fruit.length)
console.log(fruit1)

// Backcelace n character
let flower = 'Ros\ns'
console.log(flower) // due to \n 's' print in new line

// Backcelace t character
let Animal = 'ca\tt'
console.log(Animal) // due to \t 't' print in tab(some space)

// Backcelace t character
let veg = 'carro\rt'
console.log(veg) // due to \r 't' print in first (carriage Return)

// Convert the Charecter to lower and upercase
let word ="Banana"
console.log(word.toUpperCase()) // to Convert Uppercase the funtion used toUpperCase()
console.log(word.toLowerCase()) // to Convert Lowercase the funtion used toLowerCase()