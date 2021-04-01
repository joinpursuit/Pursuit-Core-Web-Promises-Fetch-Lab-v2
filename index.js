// console.log("JS is connected!")

const button = document.querySelector("#reload")
const box = document.querySelector("div")

button.addEventListener ("click", () => {
    // console.log("You clicked me!")

    async function getJokes() {
        const results = await axios.get("https://official-joke-api.appspot.com/random_ten")
        console.log(results)
        const apiJoke = results.data
        console.log(apiJoke)

        for (let i = 0; i<= apiJoke.length-1; i++) {
            // let div = document.createElement("div")
            let li = document.createElement("li")
            li.textContent = apiJoke[i].setup
            box.appendChild(li)
        }
    
    }
    getJokes()
})
