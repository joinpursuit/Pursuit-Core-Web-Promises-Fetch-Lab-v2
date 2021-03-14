const ul = document.querySelector("#jokes");
const punchline = document.querySelector("#punchline");
const button = document.querySelector("#refreshBut");
const body = document.body;

fetch("https://official-joke-api.appspot.com/random_ten")
  .then((response) => {
    console.log(response.json);
    return response.json();
  })
  .then((res) => {
    res.forEach((jokes) => {
      const li = document.createElement("li");
      li.innerText = jokes.setup;
      ul.appendChild(li);
      const li2 = document.createElement("li");
      li2.innerText = jokes.punchline;
      li.appendChild(li2);
      li2.style.display = "none";
      li.addEventListener("click", (event) => {
        if (event.target.childNodes[1].style.display === "none") {
          event.target.childNodes[1].style.display = "block";
        } else {
          event.target.childNodes[1].style.display = "none";
        }
      });
    });
  });

const refresh = () => {
  location.reload();
};
