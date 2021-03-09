document.addEventListener('DOMContentLoaded', ()=>{
    fetch('https://official-joke-api.appspot.com/jokes/random')
.then(response =>{
    return response.json()
}).then(body =>{
    console.log(body)
    const random = body.setup
    let sec = body.punchline
    const ul = document.querySelector('ul')
    console.log(random)
    const li = document.createElement('li')
    li.textContent = random  `Punchline: ${sec}`
    ul.appendChild(li)
    console.log(sec)
    // const second = document.getElementById('second')
    // second.addEventListener("click", ()=>{
    //  const secondli = document.createElement('li')
    //  secondli.textContent = sec
    //  second.appendChild(secondli)
    //     if(li.textContent !== sec){
    //         e.textContent = random + sec
    //     }
    // })
    
 
})
})

// const secondli = document.createElement('li')
    // secondli.textContent = sec
    // second.appendChild(secondli)

    // console.log(li)

    // ul.appendChild(li)
// for(let user of random){
//     const li = document.createElement('li')
//     li.textContent = user.punchline
//     ul.appendChild(li)
//     console.log(user.text)
// }
