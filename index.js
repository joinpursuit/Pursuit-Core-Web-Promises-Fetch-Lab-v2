document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('section');
    // const body= document.body
    const jb = document.querySelector('#jokes-button');
    const loadJokes = () =>{
        fetch('https://official-joke-api.appspot.com/random_ten')
        .then(res => {

            if(!res.ok){
                throw Error('Something went wrong')
            }
            section.innerHTML = ""
            return res.json();
        }).then(res => {
            // debugger
            for(let i = 0; i < res.length; i++){
                // This is set up of joke
                // console.log(res[i].setup);
                const card = document.createElement('span');
                card.classList.add('card');
                card.textContent = res[i].setup;
                section.appendChild(card);
                card.addEventListener("click", (e) => {
                    const card = e.target
                    const punchline = document.createElement("span")
                    punchline.classList.add('punchline')
                    //console.log(punchline)
                    if(punchline.textContent !== res[i].punchline) {
                        punchline.textContent = res[i].punchline
                    card.appendChild(punchline)

                } else {
                   punchline.textContent = ""
                    console.log("help")
                }

                })
                
                // this is punch line of joke
                // console.log(res[i].punchline);
            }
        }).catch(err => {
            console.log(err);
        })
    }

    loadJokes()

    

    jb.addEventListener('click', loadJokes)
});