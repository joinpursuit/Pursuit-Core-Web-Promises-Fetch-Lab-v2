const button = document.querySelector("#reload-btn");
let ul = document.querySelector("#")
button.addEventListener("click", (e) => {
  e.preventDefault();
  fetch("https://official-joke-api.appspot.com/random_ten").then(res => {
      if(!res.ok) {
          throw Error(`Something wrong ${res.status}`)
        }
        return res.json()
    }).then(res => {
      res.set
  })
});
