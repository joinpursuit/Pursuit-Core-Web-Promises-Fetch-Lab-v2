const jokes = document.querySelector("#jokes");
const button = document.querySelector("#refreshBut");
const body = document.body;

window.addEventListener("load", (e) => {
  fetch("https://official-joke-api.appspot.com/jokes/ten")
    .then((res) => {
      if (!res.ok) {
        throw Error("Something went wrong.");
      }
      return res.json();
    })
}).catch((err) => {
    console.log(err);
})