const button = document.querySelector("button");
const jokeLists = document.querySelector("ul");

const fetchJokes = () => {
fetch("https://official-joke-api.appspot.com/random_ten")
  .then((res) => {
    if (!res.ok) throw Error("Something went wrong");
    return res.json();
  })
  .then((res) => {
    jokeLists.innerHTML = "";
    res.forEach((joke) => {
      const li = document.createElement("li");
      li.classList.add("card");
      li.textContent = `${joke.setup}`;
      // debugger
      jokeLists.appendChild(li);

      const list = document.createElement("p");
      list.classList.add("punchline");
      list.textContent = `${joke.punchline}`;
      list.setAttribute("style", "display: block")
      // debugger
      li.appendChild(list);
    });
  });
}

jokeLists.addEventListener("click", (e) => {
  // const li = e.target;
  // debugger;
  if (e.target.childNodes[1].style.display === "block") {
    e.target.childNodes[1].style.display = "none";
    // li.textContent = `${res[i].setup}`;
  } else {
    e.target.childNodes[1].style.display = "block";
  }
});

button.addEventListener("click", fetchJokes)

fetchJokes()