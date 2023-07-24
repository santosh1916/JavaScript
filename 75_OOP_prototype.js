// Prototype

let a = {
    name : "Santosh",
    langauge : "Javascript",
    run : ()=>{
        alert("self alert")
    }
}
console.log(a);

// set any prototype

let p ={
    run : ()=>{
        alert("i am alert")
    }
}
p.__proto__ = {
    name1: "Prity"
}
a.__proto__ = p;
a.run();
console.log(a.name1);


