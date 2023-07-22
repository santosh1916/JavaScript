let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // console.log("Promise 1");
        resolve("Value 1")
    },1000);
});

let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // console.log("Promise 2");
        resolve("Value 2")
    },2000);
});

let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // console.log("Promise 3");
        // resolve("Value 3")
        reject(new Error("error Code 404!"))
    },300);
});

let p4 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // console.log("Promise 4");
        resolve("Value 4")
    },4000);
});

// p1.then((value)=>{
//     console.log(value)
// })

// p2.then((value)=>{
//     console.log(value)
// })

// p3.then((value)=>{
//     console.log(value)
// })

// p4.then((value)=>{
//     console.log(value)
// })


// to get all promise value 
// let all_promise = Promise.all([p1,p2,p3,p4])
// let all_promise = Promise.allSettled([p1,p2,p3,p4])
// let all_promise = Promise.race([p1,p2,p3,p4]) // sabse phle resolve wala 
// let all_promise = Promise.any([p1,p2,p3,p4]) // sabse phle resolve wala jo reject de dega
// let all_promise = Promise.resolve(6) // sabse phle resolve wala jo reject de dega
let all_promise = Promise.reject("hey") // sabse phle resolve wala jo reject de dega
all_promise.then((value)=>{

    console.log(value)
})


