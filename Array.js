// Notes = Arrays are mutuable
// Arrays is a type of object
let Marks = [16,52,93,84, null,false, "not present"]
console.log(Marks[0])
console.log(Marks[1])
console.log(Marks[2])
console.log(Marks[3])
console.log(Marks[4])
console.log(Marks[5])
console.log(Marks[6])
console.log(Marks[7]) // will be undefine becouse index 7 does not exist
console.log("the length of Marks",Marks.length)
Marks[7]=90 // Adding a new Value to the array
Marks[0]=70 // Updating or Changing the Value of an array
console.log(Marks) // Updating array value print here
console.log(typeof Marks) // Object

// Methods of Array
let num = [1,2,3,4,5]

// toString method = convert an Array into a String
let b = num.toString()
console.log(b)
console.log(typeof b) // string

// Join() Method = Join all the array element using a seperator
let c = num.join(" and ")
console.log(c)
console.log(typeof c) // String

// pop() method = remove last element from the array
let r = num.pop()
console.log(num) // here last element 5 remove from the array
console.log(r) // return 5 which is remove from last array

// push() Method=  Modify the Orignal Array 
let p = num.push(45) // Push return the new array length
console.log(num, p) 

// shift() Method = remove 1st element and return it
let newarry= [1,2,3,4,5,6,7,8,9]
let s = newarry.shift()
console.log(newarry)
console.log(s) // remove 1st element and return it that is 1

//unshift() Method = it is just opposit of shift() Method, in this Add Element to the begining and return new array length
let newarry1 = [1,2,3,4,5,6,7,8,9]
let ns = newarry1.unshift(0)
console.log(ns) // return length of new array
console.log(newarry1) // 0 add at the begining


// delete() operator = it is not a method it is a operator
// it is use to delete an element from the array to the given index
let arrD = [1,2,3,4,5]
delete arrD[0]
console.log(arrD) // print [2,3,4,5]
console.log(arrD.length) // length does not effect

//concat() Method = use to join array
let arrC = [11,22,33,44,55]
let arrC1 = [66,77,88,99]
let newArray = arrC.concat(arrC1) //Joinin the array
console.log(newArray) 

// sort Method = arrange the array Alphabetically and modify the orignals array 
let arrS = [411,62,231,4,88,419,635,91]
let arrS1 = arrS.sort()
console.log(arrS1) // [231,4,411,419,62,635,88,91] only alphabetically not accending or decending order
console.log(arrS) // it can Modify the Orignals array so, it will return same as upper

// for accendig or decending order array use campare funtion in sort method
let compare = (a,b) => {
    return a-b
}
let arrA = [411,62,231,4,88,419,635,91]
arrA.sort(compare)
console.log(arrA)
arrA.reverse() // reverse() Method to reverse the array
console.log(arrA) // return reverse array

// splice() and slice() Method = splice() is use to add new items and slice out a piece from an array it create a new array
// splice()
let arrSP = [11,22,33,44,55,66,77,88,99]
arrSP.splice(2,4,100,101,102,103) // adding start from index no 2, delete 4 element from existing array and the add 100,101,102,103
console.log(arrSP)// so its returns [11,  22, 100, 101,102, 103,  77,  88,99]

// slice()
let arrSC = [11,22,33,44,55,66,77,88,99]
let NewarrSC = arrSC.slice(3) // from index 3 it create new array i.e [44,55,66,77,88,99]
console.log(NewarrSC) // return [44,55,66,77,88,99]

