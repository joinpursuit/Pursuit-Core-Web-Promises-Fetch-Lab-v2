const ul = document.querySelector("#joke-list");

const createJokes = async () => {
  try {
    const res = await axios.get(
      "https://official-joke-api.appspot.com/random_ten"
    );
    res.data.forEach((joke) => {
      const li = document.createElement("li");
      ul.appendChild(li);
      li.classList.add("card");
      const setup = document.createElement("p");
      setup.classList.add("setup");
      setup.textContent = joke.setup;
      li.appendChild(setup);
      const punchline = document.createElement("p");
      punchline.textContent = joke.punchline;
      punchline.style.display = "none";
      punchline.classList.add("punchline");
      li.appendChild(punchline);
      li.addEventListener("click", (e) => {
        if (punchline.style.display === "block") {
          punchline.style.display = "none";
        } else {
          punchline.style.display = "block";
        }
      });
    });
  } catch (err) {
    console.log(err);
  }
};
createJokes();

const button = document.querySelector("button");
button.addEventListener("click", (e) => {
  ul.textContent = "";
  createJokes();
});

