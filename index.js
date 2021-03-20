document.addEventListener("DOMContentLoaded", () => {
    let container = document.getElementById("container")

    let btn = document.getElementById("reload")

    const reload = () => {
        fetch("https://official-joke-api.appspot.com/random_ten")
        .then((stat) => {
                return stat.json()
        }).then((joke) => {
            let div = document.createElement("div")
            div.textContent = joke[0]
            container.appendChild(div)
            console.log(joke[0])
        }).catch((error) => {
            console.log("error: " + error)
        })
    
    }

    btn.addEventListener("click", () => {
        reload()
    })


})







// btn.addEventListener("click", () => {
//     let div = document.createElement("div")
//     div.textContent = "hello, this is my content"
//     div.style.color = "blue"
//     div.style.border = "2px solid black"
//     container.appendChild(div)
// })


