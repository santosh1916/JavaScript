

async function srity (){  // due to async this return promise
    // return 5
    let delhiWeather = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("40 Deg")
        }, 1000);
    })
    
    let biharWeather = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("45 Deg")
        }, 6000);
    })
    // delhiWeather.then(alert)
    // biharWeather.then(alert)
    console.log("feteching delhi weather....")
    let delhiW = await delhiWeather;
    console.log("feteched delhi weather "+delhiW)
    console.log("feteching bihar weather....")
    let biharW = await biharWeather;
    console.log("fetched bihar weather "+biharW)
    return [delhiW,biharW]
}

const prity = async ()=>{
    console.log("Hello I am Prity I am not waiting")
}
const main1 = async ()=>{
    console.log("Welcome to weather control room")
    let a = await srity();
    let b = await prity();
    // a.then((value)=>{
    //     console.log(value)
    // })
}
main1();
// console.log(a)

// srity().then((x)=>{
//     alert(x)
// })