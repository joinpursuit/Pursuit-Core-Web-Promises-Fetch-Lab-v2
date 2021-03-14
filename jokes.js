console.log("This is a start!")

fetch("https://official-joke-api.appspot.com/random_ten")
.then(jokes =>{
    console.log(jokes)
    return jokes.json()
})
.then(jokeList =>{
    console.log(jokeList[0].setup)

    for(let i = 0; i<jokeList.length;i++){
        const div = document.createElement('div');
        const p = document.querySelector('p')
        console.log(p.style)
        div.classList.add("card");
        div.innerText = jokeList[i].setup + "<br>" ;
        p.appendChild(div);
   
    

    
    div.addEventListener("click", (event)=>{
       console.log(event.target)
        console.log(event.target)
        event.target.innerText += "\n" + jokeList[i].punchline
        
  
        
    })
}
    let reset = document.addEventListener("click", (event)=>{

    })
    

})






