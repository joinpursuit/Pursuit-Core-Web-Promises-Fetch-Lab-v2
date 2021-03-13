document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('section');
    const jb = document.querySelector('#jokes-button');
    jb.addEventListener('click', ()=>{
        fetch('https://official-joke-api.appspot.com/random_ten')
        .then(res => {
            if(!res.ok){
                throw Error('Something went wrong')
            }
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
                // this is punch line of joke
                // console.log(res[i].punchline);
            }
        }).catch(err => {
            console.log(err);
        })
    })
});