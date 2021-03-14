const ul = document.querySelector("#joke-list");
// const punchLine = [];

const createJokes = () => {
  fetch("https://official-joke-api.appspot.com/random_ten")
    .then((res) => {
      if (!res.ok) {
        throw Error("Not today Satan!");
      }
      return res.json();
    })
    .then((res) => {
      res.forEach((joke) => {
        const li = document.createElement("li");
        li.classList.add("card")
        const p = document.createElement("p")
        p.textContent = joke.punchline;
        p.innerText.fontsize(0);
        li.textContent = joke.setup;
        ul.appendChild(li);
        li.appendChild(p)
        debugger
      });
    })
    .catch((err) => {
      console.log(err);
    });
  // console.log(punchLine);
};
createJokes();

//  ul.addEventListener("click", (e) => {
//    const li = e.target;
//    li.childNodes[1].innerText.fontsize(2);

// li.children[0].style.fontSize = 14px
//   //  debugger
//   });
  
  
//   @ index 1
// innerhtml/innertextcontent