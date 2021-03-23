const ul = document.querySelector("ul");
const reloadBtn = document.querySelector("#reload");

fetch("https://official-joke-api.appspot.com/random_ten").then(response=>{
  return response.json()
}).then(body=>{
  console.log(body)
})