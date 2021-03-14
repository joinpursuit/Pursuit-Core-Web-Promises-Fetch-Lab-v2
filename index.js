const button = document.querySelector("#reload");
const section = document.querySelector("#section-card")
button.addEventListener("click", (e) => {
    fetch(`https://official-joke-api.appspot.com/jokes/ten`)
    .then(res => {
        if(!res.ok){
            throw Error("Something went wrong, status " + res.status);
        }
        return res.json();
    }).then(res => {
        section.innerHTML = ""
        res.forEach(joke => {
            const div=document.createElement("div")
            div.classList.add("card")
            const p1 = document.createElement("p");
            p1.classList.add("p1")
            p1.textContent = joke.setup;

            const p2 = document.createElement("p")
            p2.classList.add("p2")
            p2.textContent=joke.punchline
            div.appendChild(p1)
            div.appendChild(p2)
            section.appendChild(div);
            console.log(joke);

        })
       
    }).catch(err => {
        console.log(err);
        })

    });

    section.addEventListener("click", (e) =>{
        e.target.childNode.style.visibility = 'hidden'
    // const p2=e.target.parentNode
    // e.tar
    // div or child user can click
    // change the second child to div 
    //   if(p2.style.display === "none"){
    //       p2.style.display = "block"
    //   } else {
    //       p2.style.display = "none"
    //   }
  })




