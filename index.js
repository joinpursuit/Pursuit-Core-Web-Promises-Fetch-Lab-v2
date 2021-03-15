document.addEventListener("DOMContentLoaded", (e) => {
    document.querySelector("form").addEventListener("submit", (e) =>{
        e.preventDefault();
    });


const reloadJokeBtn = document.querySelector("#reload");
let setUpParas = document.querySelectorAll(".setUpPara");
let punchLineParas = document.querySelectorAll(".punchLinePara")
let jokeCards = document.querySelectorAll(".card");




const loadJokes = () => {
    fetch("https://official-joke-api.appspot.com/random_ten")
      .then(response => {
          return response.json();
      })
      .then(body => {
            setUpParas.forEach((setUpPara, i) => {
            setUpPara.innerHTML = body[i].setup;
            punchLineParas[i].innerHTML = body[i].punchline;
        })
    })
}


jokeCards.forEach((jokeCard, i) => {
    jokeCard.addEventListener("click", (e)=>{
     punchLineParas[i].classList.toggle('hide');
        })
})


loadJokes();

reloadJokeBtn.addEventListener("click", e => {
    loadJokes();
})



});