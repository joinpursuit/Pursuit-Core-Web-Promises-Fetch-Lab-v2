const displaySection = document.querySelector("div");

//add somthing to reset it so that the jokes don't keep getting added
document.querySelector("#reload").addEventListener("click", getFirstPart);


function getFirstPart(){
  // e.preventDefault()
  fetch("https://official-joke-api.appspot.com/random_ten").then(response=>{
    return response.json()
  }).then(body =>{
    console.log(body)
   let joke = body
   for(let firstPart of joke){
     const heading = document.createElement("h3")
     const punchlines = document.createElement("p")
     heading.classList.add("card")
     heading.textContent = firstPart.setup
     punchlines.textContent = firstPart.punchline

     displaySection.appendChild(heading)
     displaySection.appendChild(punchlines)
     heading.addEventListener("click", ()=>{
       if(punchlines.style.display === "none"){
        punchlines.style.display = "block"
       }else{
         punchlines.style.display = "none"
       }
     })
   }
  })

}