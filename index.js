const button = document.querySelector("#reload");
let ul = document.querySelector("ul");
const select = document.querySelector("select");
let endPoint = "/*/ten"; // /ten -> for regu test specs and /*/ten -> for bonus specs
let usedJokes =[];
const innitLoad = () => {
  ul.innerHTML = "";
  fetch(`https://official-joke-api.appspot.com/jokes${endPoint}`)
    .then((res) => {
      if (!res.ok) {
        throw Error(`Something wrong ${res.status}`);
      }
      return res.json();
    })
    .then((res) => {
      res.forEach((joke) => {
        if( usedJokes.includes(joke.id)){

        }else{
          
        }

        const div = document.createElement("div");
        div.className = "card";
        const h2 = document.createElement("h2");
        h2.textContent = joke.setup;
        // h2.textContent = joke.type;
        const h5 = document.createElement("h5");
        h5.textContent = joke.punchline;
        usedJokes.push(joke.id)
        div.appendChild(h2);
        div.addEventListener("click", (e) => {
          if (div.innerHTML.includes("h5")) {
            div.removeChild(h5);
          } else {
            div.appendChild(h5);
          }
        });
        ul.appendChild(div);
      });
    });
};

innitLoad();

button.addEventListener("click", (e) => {
  e.preventDefault();
  innitLoad();
});
select.addEventListener("change", (e) => {
  const category = e.target.value;
  if (category === "general") {
    endPoint = "/general/ten";
  } else if (category === "programming") {
    endPoint = "/programming/ten";
  } else {
    endPoint = "/ten";
  }
  innitLoad()
});
