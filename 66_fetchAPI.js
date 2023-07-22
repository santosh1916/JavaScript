//66 -video Fetch Api 
/*
let p = fetch("https://goweather.herokuapp.com/weather/Ny")
p.then((response)=>{
    // console.log(value.status)
    // console.log(value.ok)
    return response.json()
}).then((value1)=>{
    console.log(value1)
})
*/

// 67- video Post method
/*
let options = {
    method: "POST",
    headers: {"Content-type": "application/json"},

    body: JSON.stringify({
        title: 'Santosh',
        body: 'prity',
        userId: 1916,
      }),
}

fetch('https://jsonplaceholder.typicode.com/posts', options)
  .then((response) => response.json())
  .then((json) => console.log(json));
  */

//   using async funtion post method
const postData = async (data)=>{
let options = {
    method: "POST",
    headers: {"Content-type": "application/json"},

    body: JSON.stringify(data),
    }
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    let response = await p.json()
    return response
}
const getData = async (id)=>{
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/'+id)
    let r_resopose = await response.json()
    return r_resopose
}
const mainFunc = async ()=>{
    let data = {  // use this from prompt
        name: `${prompt("Enter your name")}`,
        username: `${prompt("Enter your Username")}`,
        password: `${prompt("Enter your Password")}`,
      }
    let todo = await postData(data);
    console.log(todo)
    console.log(await getData(54))
}
mainFunc();