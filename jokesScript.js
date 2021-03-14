console.log("hey");

const button = document.querySelector("#reload");
const section = document.querySelector("section");
const test = document.querySelector("h3");


button.addEventListener("click", (e) => {
	// get 10 jokes from the API
	fetch("https://official-joke-api.appspot.com/random_ten")
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
						const p = document.createElement("p");
						// add the class
						p.className = "card";
						p.textContent = joke.setup;
						// append each joke to the section tag
						section.appendChild(p);

						// punchline
						const punch = document.createElement("h5");
						punch.textContent = joke.punchline;
						p.appendChild(punch);
					});
					
				})
		.catch((err) => {
			console.log(err);
		});
});

section.addEventListener("onclick", e => {
    h3.style.visibility = visible;
    h1.style.color = red;
})
// const cardList = document.querySelectorAll(".card");
// console.log(cardList);
// cardList.addEventListener("click", (e) => {
// 	h5.style.visibility = visible;
// });