const button = document.querySelector("#reload");
button.addEventListener("click", (e) => {
    const section = document.querySelector("#card")
    fetch(`https://official-joke-api.appspot.com/jokes/ten`)
    .then(res => {
        if(!res.ok){
            throw Error("Something went wrong, status " + res.status);
        }
        return res.json();
    }).then(res => {
        section.innerHTML = ""
        res.forEach(joke => {
            const p = document.createElement("p");
            p.classList.add("card")
            p.textContent = joke.setup;
            section.appendChild(p);
            console.log(joke);
        })
    }).catch(err => {
        console.log(err);
    });
})

