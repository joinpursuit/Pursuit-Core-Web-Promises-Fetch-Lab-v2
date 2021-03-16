console.log("Hello");
const jokeLists = document.querySelector("ul");
const button = document.querySelector("button");
const reload = async () => {
  try {
    const res = await axios.get(
      "https://official-joke-api.appspot.com/random_ten"
    );
    // debugger
    jokeLists.innerHTML = "";
    res.data.forEach((joke) => {
      const li = document.createElement("li");
      li.classList.add("card");
      const setupP = document.createElement("p");
      setupP.textContent = `${joke.setup}`;
      li.appendChild(setupP);
      jokeLists.appendChild(li);
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
  } catch (err) {
    console.log(err);
  }
};
button.addEventListener("click", reload);
reload();
