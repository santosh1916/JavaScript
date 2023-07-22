// let a = prompt("What is your name")
// let b = prompt("What is your age")
// let c = prompt("What is your fav color")
// console.log(a + " is " + b + " years old and the fav color is "+c)


// console.log("Start")
// setTimeout(()=>{
//     document.write("Hey! I am prity")
// },5000 )
// console.log("end")


// callback funtion as a argument

function loadScript(src,callback){
    let script = document.createElement("script");
    script.src = src;
    script.onload = function(){
        console.log("Loaded script with SRC: "+src)
        callback(null,scr);
    }
    script.onerror = () =>{
        console.log("Error of loading with src: "+src) // showing the error when scr link is wrong
        callback(new Error("scr got some Error"))
    }
    document.body.appendChild(script)
}

function Load(error,src){
    if(error){
        console.log(error)
        return
    }
    alert("Script loaded enjoy the party" + src) 
}

function notLoad(error,src){
    if(error){
        console.log(error)
        return
    }
    alert("Script not loaded" + src) 
}

loadScript("https://www.youtube.com/",Load)