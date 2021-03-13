console.log("hey");

const button = document.querySelector("#reload");
const section = document.querySelector("section");

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
			console.log(res);
            // need to loop each joke
            res.forEach(joke => {
                const p = document.createElement("p")
                p.textContent = joke.setup;
                section.appendChild(p)
            });
		})
		.catch((err) => {
			console.log(err);
		});
	// clear the old jokes
	// create a p tag for each joke
	// append each joke to the section tag
});
