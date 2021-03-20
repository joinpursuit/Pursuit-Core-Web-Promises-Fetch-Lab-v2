document.addEventListener("DOMContentLoaded", () => {
    
    const container = document.getElementById("container")
    const btn = document.getElementById("reload")

    function displayJokes() {
        fetch("https://official-joke-api.appspot.com/random_ten")
            .then((response) => {
                console.log(response)
                return response.json()
            })
            .then((body) => {
                console.log(body)
        
                for (let object of body) {
                    let joke = document.createElement("div")
                    let setup = document.createElement("h3")
                    setup.textContent = object.setup
                    container.appendChild(joke)
                    joke.appendChild(setup)
                    let punchLine = document.createElement("p")
                    punchLine.textContent = object.punchline
                    joke.appendChild(punchLine)
                    joke.classList.add("card")          // this adds a .card class to each joke box

                    punchLine.style.display = "none";
                    joke.addEventListener("click", () => {
                        if (punchLine.style.display === "none") {
                            punchLine.style.display = "block";
                        }
                        else {
                            punchLine.style.display = "none";
                        }
                    })
                }
            })
    }

    displayJokes()
    
    btn.addEventListener("click", () => {
        container.innerHTML = ''
        displayJokes()
    })

})





// The 10 jokes will be displayed upon page load. This should be done inside of a function called displayJokes()
    // Each joke will be displayed in it's own div
    // Each div will have a class of .card - this is done with 
// Each div in the container will have the setup and the punchline
    // the setup will be shown on load. 
    // the punchline will be hidden.

// we will access the div container with document.getElementById("container") and save it to const container
// We need to access the body's contents and display them on DOM as we iterate through the body's array:
// The body IS the array
// we will call each iterable item in the body array as 'joke'
    // we access setup with joke.setup
    // we access punchlines with joke.punchline
// at the same time, we need to create an element to append to the div: 
    // let setup = document.createElement('div')
    // setup.textContent = body.element.setup

    // let punchline = document.createElement('p')
    // punchline.textContent = body.element.punchline



// In order to be able to show/hide the punchline:
    // we need to set the display: none;
    // we need to add an eventListener that lets us target the joke box