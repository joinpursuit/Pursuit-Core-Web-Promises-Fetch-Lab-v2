//A list of ten jokes that are randomly loaded when the page is refreshed, each with the `"card"` class
const ul = document.querySelector("ul")
fetch("https://official-joke-api.appspot.com/random_ten").then((res) => {
  if (!res.ok) {
    throw Error("error!");
  }
  return res.json();
}).then((res) =>{
   res.forEach(jokes =>{
    const li = document.createElement("li")
    li.textContent = jokes.setup
    li.classList.add("card");
    ul.appendChild(li);

   })   
})

// Clicking on a joke card should expand it and reveal the punchline
