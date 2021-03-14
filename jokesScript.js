console.log("hey");

const button = document.querySelector("#reload");
const section = document.querySelector("section");
const card = document.querySelectorAll(".card");
const body = document.querySelectorAll("body");

let p = document.querySelectorAll("p");
let punch = document.querySelectorAll("h5");


const test = document.querySelector("h1");

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


//  document.querySelectorAll(".card").forEach((card) => {
//      card.addEventListener("click", (event) => {
//             event.target.style.color = "orange"
		
// 			test.style.color = "red";
// 			punchline.style.color = "green";
// 			h5.style.visibility = "visible";
// 		});
//  });

// card is an array
section.addEventListener("click", (e) => {
    debugger
    const punchline = document.querySelector(".punchline")
    if (e.target.className === "card") {
        e.target.style.visibility = "visible";
		}
   
    
    test.style.color = "red";
    punchline.style.color = "green";
    	
});



// const cardList = document.querySelectorAll(".card");
// console.log(cardList);
// cardList.addEventListener("click", (e) => {
// 	h5.style.visibility = visible;
// });
