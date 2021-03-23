const ul = document.querySelector("ul");
const reloadBtn = document.querySelector("#reload");

fetch("https://official-joke-api.appspot.com/random_ten").then(response=>{
  return response.json()
}).then(body =>{
 let joke = body
 for(let firstPart of joke){
   console.log(firstPart.setup)
 }
})