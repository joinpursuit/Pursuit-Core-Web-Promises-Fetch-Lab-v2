const displaySection = document.querySelector(".container");
document.querySelector("#reload").addEventListener("click", (jokes));


function jokes(){
  fetch("https://official-joke-api.appspot.com/random_ten").then(response=>{
    return response.json()
  }).then(body =>{
    console.log(body)
    let joke = body
    for(let jokes of joke){
      const section = document.createElement("div")
      const heading = document.createElement("h3")
      const punchlines = document.createElement("p")
      section.classList.add("card")
      heading.textContent = jokes.setup
      punchlines.textContent = jokes.punchline
      
      section.appendChild(heading);
      section.appendChild(punchlines)
      displaySection.appendChild(section)
      
      heading.addEventListener("click", ()=>{
        if(punchlines.style.display === "none"){
          punchlines.style.display = "block"
        }else{
          punchlines.style.display = "none"
        }
      })
    }
    
  })
  displaySection.innerHTML = ''
    
};



