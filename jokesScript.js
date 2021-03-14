const button = document.querySelector("#reload");
const section = document.querySelector("section");
const card = document.querySelectorAll(".card");
const body = document.querySelectorAll("body");

let p = document.querySelectorAll("p");
let punch = document.querySelectorAll("h5");

const option = document.querySelector("option");
const select = document.querySelector("select");

const test = document.querySelector("h1");
let selectValue = "programming"

select.addEventListener("change", (e) => {
    selectValue = select.value;
    console.log(selectValue);
	return selectValue;
});
console.log(selectValue);
button.addEventListener("click", (e, selectValue) => {
    selectValue = "programming";
console.log(selectValue);
	
	console.log(`https://official-joke-api.appspot.com/${selectValue}_ten`);

	fetch(`https://official-joke-api.appspot.com/random_ten`)
	// fetch(`https://official-joke-api.appspot.com/${selectValue}_ten`)
		.then((res) => {
			if (!res.ok) {
				throw Error("Something went wrong, status " + res.status);
			}
			return res.json();
		})
		.then((res) => {
			// clear the old jokes
			section.innerHTML = "";
			console.log(res);
			// need to loop each joke
			res.forEach((joke) => {
				// create a p tag for each joke
				p = document.createElement("p");
				// add the class
				p.className = "card";
				p.textContent = joke.setup;
				// append each joke to the section tag
				section.appendChild(p);

				// punchline
				punch = document.createElement("h5");
				punch.className = "punchline";
				punch.textContent = joke.punchline;
				p.appendChild(punch);
			});
		})
		.catch((err) => {
			console.log(err);
		});
});


section.addEventListener("click", (e) => {
  
	if ((e.target.firstElementChild.style.visibility === "hidden")) {
		e.target.firstElementChild.style.visibility = "visible"
    } else {
        e.target.firstElementChild.style.visibility = "hidden";
    }

});



// Have a select at the top for either
// general, random, or programming and only load jokes of that type
