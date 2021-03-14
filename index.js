//A list of ten jokes that are randomly loaded when the page is refreshed, each with the `"card"` class
const ul = document.querySelector("ul");
const button = document.querySelector("#reload")


fetch("https://official-joke-api.appspot.com/random_ten")
  .then((res) => {
    if (!res.ok) {
      throw Error("error!");
    }
    return res.json();
  })
  .then((res) => {
    ul.innerText = ""
    res.forEach((joke) => {
      const li = document.createElement("li");
      li.classList.add("card");
      li.innerHTML = `${joke.setup} <p class="punchline" style="display: none;">${joke.punchline}</p>`;
      ul.appendChild(li);
    });
  });

ul.addEventListener("click", (event) => {
  if (event.target.childNodes[1].style.display === "block") {
    event.target.childNodes[1].style.display = "none";
  } else {
    event.target.childNodes[1].style.display = "block";
  }
});


//A button with id `"reload"` that clears all the jokes on the screen and loads new random ones
button.addEventListener("click", () =>{
  location.reload()
  return false
})