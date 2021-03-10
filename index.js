document.addEventListener('DOMContentLoaded', e =>{
    e.preventDefault()
    jokes()

    const button = document.getElementById('reload')
    button.addEventListener('click', ()=>{
            const rel = document.getElementById('btn')
            rel.textContent = 'btn'
            space.innerHTML = ''
    })
   
})
function jokes(){
    const space = document.getElementById('space')
    fetch('https://official-joke-api.appspot.com/jokes/random')
    .then(response =>{
    return response.json()
    }).then(body =>{
        const random = body.setup
        const sec = body.punchline
        const ul = document.querySelector('.card')
        const li = document.createElement('li') 
        li.className = 'setup'
        li.textContent = random
        ul.appendChild(li)

        const res = document.createElement('li')
        res.className = 'punchline'
        res.style.visibility = 'hidden'
        res.textContent = `Punchline: ${sec}`
        ul.appendChild(res)

        space.appendChild(ul)

        li.addEventListener("click", () =>{
            if(res.style.visibility === 'hidden'){
                res.style.visibility = 'visible'
            }else{
                res.style.visibility = 'hidden'
            }
        })
            
    })
 
    
    
}  

