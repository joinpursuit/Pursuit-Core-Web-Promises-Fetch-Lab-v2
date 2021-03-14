const ul = document.querySelector("#jokes");
const punchline = document.querySelector("#punchline")
const button = document.querySelector("#refreshBut");
const body = document.body;


  fetch("https://official-joke-api.appspot.com/random_ten")
  .then(response => {
    console.log(response.json)
    return response.json();
  }).then(res => {
    res.forEach(jokes => {
    const li = document.createElement("li")
    li.innerText = jokes.setup
    ul.appendChild(li) 
    const li2 = document.createElement("li")
    li2.innerText = jokes.punchline
    li.addEventListener("click" ,(event) => {
      li.appendChild(li2)
      //  li2.style.visibility = "hidden"
    
      // if(event.target.style.visibility === "hidden"){
      //   event.target.style.visibility ="visible"
      // } else {
      //   event.target.style.visibility = "hidden"
      // }
   
    // li2.style.visibility = "visible"
    
      // if(event.target.style.visbility === "hidden"){
      //   event.target.style.visbility ="visible"
      // } else {
      //   event.target.style.visbility = "hidden"
      // }
    })
    })
    })
    
  


  
