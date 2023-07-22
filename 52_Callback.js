// //syncronous programming
// let a = prompt("what is your name")
// let b = prompt("what is your name")
// let c = prompt("what is your name")
// console.log("all are frnd",a+b+c)

// // Asyncronous programminng
// console.log("start")
// setTimeout(function(){
//     console.log("hey I am good")
// },4000)
// console.log("End")

// callbacks
// function loadScript(src,callback){
//     let script = document.createElement("script");
//     script.src = src;
//     script.onload = function(){
//         console.log("Script Loaded with SRC: " + src)
//         callback(null , src);
//     }
//     script.onerror = function(){
//         console.log("Script Error with SRC " + src)
//         callback(new Error("Src got some Error"))
//     }
//     document.body.appendChild(script);
// }

// function hello(error , src){
//     if(error){
//         console.log(error)
//         return
//     }
//     console.log("Hlw world " + src)
// }

// function googM(src){
//     console.log("good Morning " + src)
// }
// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js",hello)


/*
function LoadScript(src, callback){
    let script = document.createElement("script")
    script.src = src
    script.onload = function(){
        console.log("Script Loaded with SRC: " + src)
        callback(null, src);
    }
    script.onerror = function(){
        console.log("Script doesn't Load :" + src)
        callback(new Error("SRC got some Error please fixed!"))
    }
    script = document.body.appendChild(script)
}

function loadWith(error, src){
    if(error){
        document.write("Script error 403!")
        return
    }
    console.log("LoadWith " + src)
}

LoadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js", loadWith)
*/

