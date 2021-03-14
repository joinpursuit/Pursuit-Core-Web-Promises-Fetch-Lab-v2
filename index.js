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
            const ul=document.createElement("ul")
            ul.classList.add("card")
            const li = document.createElement("li");
            li.classList.add("joke")
            li.textContent = joke.setup;

            const p = document.createElement("p")
            p.classList.add("punchline")
            p.textContent=joke.punchline
            ul.appendChild(li)
            li.appendChild(p)
            section.appendChild(ul);
            console.log(joke);

            // const ul = document.querySelector(".card")
            ul.addEventListener("click", (e) => {
                if(p.style.visibility === "hidden") {
                        p.style.visibility = "visible"
                    } else {
                        p.style.visibility = "hidden"
                    }
            })
        })
       
    }).catch(err => {
        console.log(err);
        })

    });

    // const ul = document.querySelector(".card")
    // ul.addEventListener("click", (e) =>{
        // e.target.childNode.childNode.style.visibility = 'hidden'
    // const p2=e.target.parentNode
    // e.tar
    // div or child user can click
    // change the second child to div 
    // if(p.style.visibility === "hidden") {
    //     p.style.visibility = "visible"
    // } else {
    //     p.style.visibility = "hidden"
    // }
    //       p2.style.display = "block"
    //   } else {
    //       p2.style.display = "none"
    //   }
//   })




