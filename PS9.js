// Write a javaScript program to loadscript funtion using promises
// let p1 = new Promise((resolve, reject) => {
//     function LoadScript(src){
//         let script = document.createElement("script")
//         script.src = src
//         document.body.appendChild(script)
//         script.onload = ()=>{
//             console.log("Script loaded With SRC: "+src)
//         }
//     }
// LoadScript("http://localhost/OnlinefoodDelivery/index.php")

// })
// p1.then(()=>{
//     console.log("Script Loaded Successfully")
// })

// const LoadScript = async (src)=>{
//     return new Promise((resolve, reject) => {
//         let script = document.createElement("script")
//         script.src= src
//         script.onload = ()=>{
//             resolve("Script loaded With SRC: "+ src)
//         }  
//         document.body.appendChild(script)
//     })  
    
// }
// let a = LoadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js")
// a.then((value)=>{
//     console.log(value  + " Loaded Successfully Done!")
// })
// const Main = async ()=>{
//     console.log(new Date().getMilliseconds())
//     let a = await LoadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js")
//     console.log(a)
//     console.log(new Date().getMilliseconds())
// }
// Main();

// Write a javaScript program to loadscript funtion using promises use .then() to alert the script is loaded
/*
 const LoadScript = async (src)=>{
    return new Promise((resolve, reject) => {
        let script = document.createElement("script")
        script.src = src
        script.onload = () =>{
            resolve(src)
        }
    document.body.appendChild(script)
    })
 }

 let LoadSRC = LoadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js")

 LoadSRC.then((src)=>{
    alert("The script Loaded with src :"+src)
    // console.log(src)
 })
 */

// Write a javaScript program to loadscript funtion using promises use async await funtion to alert the script is loaded

/*
const LoadScript = async (linkOfSrc)=>{
    return new Promise((resolve, reject) => {
        let script = document.createElement("script")
        script.src = linkOfSrc
        script.onload = ()=>{
            resolve(linkOfSrc)
        }
        document.body.appendChild(script)
    })
}
const load = async ()=>{
let a = await LoadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js")
alert("Script Loaded With SRC: "+a)
}
load();
*/

// Create a promise which reject after 3 sec using async await and try to catch its error

let p1 = ()=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            reject(new Error("SomeThing went wrong....Please check what happend"))
        },3000)
    })
}

let start = async ()=>{
   let p =  await p1()
   console.log(p)
}
start();