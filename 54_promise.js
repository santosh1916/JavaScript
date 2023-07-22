// let promise = new Promise(function(resolve, reject){
//     alert("hello alert")
//     resolve(54)
// })

// console.log("hello1")
// setTimeout(function(){
//     console.log("Hello in 4 sec")
// }, 4000)
// console.log("Hello 2")

// console.log(promise)


// 55 video --promise
/*
let p1 = new Promise((resolve,reject)=>{
    console.log("promise is panding")
    setTimeout(()=>{
        console.log("I am promise and i am rejected")
        reject(new Error("I am an error from 1"))
    },6000)
})

let p2 = new Promise((resolve,reject)=>{
    console.log("promise is panding")
    setTimeout(()=>{
        console.log("I am promise and i am resolve")
        resolve("the value of fullfiled by" + " 65")
    },6000)
})


console.log(p1 ,p2 )

p2.then((value)=>{
    console.log(value)
})

p1.catch((error)=>{
    console.log("some error in p1")
})
*/

// 55 video test
/*
let promise = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("done")
    },4000)
})

promise.then(alert)
*/

// 56 js video
// Promise chaning
/*
let p1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log("resolve after 2 sec")
        resolve(56)
    }, 2000);
})

p1.then((value)=>{
    console.log(value)
    let p2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Promise 2")
        },3000)
        
    })
    return p2
}).then((value)=>{
    console.log("we are done")
    return 2
}).then((value)=>{
    console.log("done finnaly")
    return new Promise((resolve, reject)=>{   // we don't have to create new variable for promise
        console.log("This is rreturning new promise")
    })
})
*/

//  LoadScript funtion with promise
/*
const LoadScript = (src)=>{
    return new Promise((resolve, reject)=>{
        let script = document.createElement("script")
        script.src = src
        document.body.appendChild(script)
        script.onload=()=>{
            resolve(111)
            console.log("Script Loaded with SRC: "+src)
        }
        script.onerror = ()=>{
            reject(0)
        }
    })
}
var script1 = "http://localhost/OnlinefoodDelivery/index.php"
let p1 = LoadScript(script1)
p1.then((value)=>{
    // window.location = script1
    console.log(value)
}).catch((error)=>{
    console.log("We are some problem Loading the script")
})
*/

//57 video Multiple handler with one promise

let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        alert("hey I am not resolve")
        resolve(56)
    },3000)
})
p1.then(()=>{
    console.log("Congratulation! this Promise is resolve")
})
p1.then(()=>{
    console.log("final")
})