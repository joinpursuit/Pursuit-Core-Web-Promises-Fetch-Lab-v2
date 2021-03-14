document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('section');
    // const body= document.body
    const jb = document.querySelector('#reload');
    // possible set timer
    const loadJokes = () =>{
        fetch('https://official-joke-api.appspot.com/random_ten')
        .then(res => {
            if(!res.ok){
                throw Error('Something went wrong');
            }
            section.innerHTML = "";
            return res.json();
        }).then(res => {
            for(let i = 0; i < res.length; i++){
                const card = document.createElement('span');
                card.classList.add('card');
                card.textContent = res[i].setup;
                section.appendChild(card);
                const punchline = document.createElement("span");
                punchline.classList.add('punchline');
                punchline.textContent = res[i].punchline;
                card.appendChild(punchline);
                punchline.style.visibility = 'hidden';
                card.addEventListener("click", () => {
                    if(punchline.style.visibility === 'hidden') {
                        punchline.style.visibility = 'visible';
                    } else {
                        punchline.style.visibility = 'hidden';
                    }
                })
            }
        }).catch(err => {
            console.log(err);
        })
    }

    loadJokes()

    

    jb.addEventListener('click', loadJokes)
});