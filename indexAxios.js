console.log("Hello");
const jokeLists = document.querySelector("ul");
const button = document.querySelector("button");

const reload = async () => {
  try {
    const res = await axios.get(
      "https://official-joke-api.appspot.com/random_ten"
    );
    jokeLists.innerHTML = "";
    res.data.forEach((joke) => {
      const li = document.createElement("li");
      li.classList.add("card");
      jokeLists.appendChild(li);
      const jokeSetup = document.createElement("p");
      jokeSetup.textContent = `${joke.setup}`;
      li.appendChild(jokeSetup);

      const list = document.createElement("p");
      list.classList.add("punchline");
      list.textContent = `${joke.punchline}`;
      li.appendChild(list);
      list.style.display = "none";
      li.addEventListener("click", () => {
        if (list.style.display === "block") {
          list.style.display = "none";
        } else {
          list.style.display = "block";
        }
      });
    });
  } catch (error) {
    console.log(error);
  }
};

button.addEventListener("click", reload);

reload();
