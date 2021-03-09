document.addEventListener('DOMContentLoaded', ()=>{
    fetch('https://official-joke-api.appspot.com/jokes/random')
.then(response =>{
    return response.json()
}).then(body =>{
    const random = body.setup
    let sec = body.punchline
    const ul = document.querySelector('ul')
    console.log(random)
    const li = document.createElement('li')
    li.textContent = `${random}` +  " " + `Punchline: ${sec}`
    ul.appendChild(li)
    console.log(sec)
})
})
