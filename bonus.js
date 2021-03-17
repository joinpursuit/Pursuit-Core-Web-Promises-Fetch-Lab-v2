document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('section');
    // const jb = document.querySelector('#reload');
    // possible set timer
    const select = document.querySelector('select');
    let seenJokes = [];
    select.addEventListener('change', (e)=> {
        // debugger
        const jokeCategory = e.target.value;
        fetch(`https://official-joke-api.appspot.com/jokes/${jokeCategory}`)
        .then(res => {
            if(!res.ok){
                throw Error('Something went wrong');
            }
            section.innerHTML = "";
            return res.json();
        }).then(res => {
            console.log(seenJokes);
            for(let i = 0; i < res.length; i++){
                let id = res[i].id
                seenJokes.push(id);
                if(!seenJokes.includes(id)){
                    debugger
                    console.log(seenJokes[i]);
                    const card = document.createElement('span');
                    card.classList.add('card');
                    const p = document.createElement("p");
                    p.classList.add('joke-line');
                    p.textContent = res[i].setup;
                    section.appendChild(card);
                    card.appendChild(p);
                    const punchline = document.createElement("p");
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
                } //else {
                //     console.log('help');
                //     // continue;
                // }
                // console.log(seenJokes[i]);
            }
            console.log(seenJokes);
        }).catch(err => {
            console.log(err);
        })
    });
});