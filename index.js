

document.addEventListener('DOMContentLoaded', e =>{
    e.preventDefault()
    jokes()

   
})
function jokes(){ 
    const space = document.getElementById('space')
    fetch('https://official-joke-api.appspot.com/random_ten')
    .then(response =>{
    return response.json()
    }).then(body =>{
        for(let te of body){
            const forms = document.createElement('div')
            forms.className = 'card'
            const random = document.createElement('span')
            random.className = 'setup'
            random.textContent = te.setup
            console.log(random)
            forms.appendChild(random)

            const answer = document.createElement('span')
            answer.className = 'punchline'
            answer.style.visibility = 'hidden'
            answer.textContent = `Punchline: ${te.punchline}`
            console.log(answer)
            forms.appendChild(answer)

            space.appendChild(forms)

            random.addEventListener("click", e =>{
                e.preventDefault()
                if(answer.style.visibility === 'hidden'){
                    answer.style.visibility = 'visible'
                }else{
                    answer.style.visibility = 'hidden'
                }
            })

        }
        
    })
    
    const button = document.getElementById('reload')
    button.addEventListener('click', ()=>{
            const rel = document.getElementById('btn')
            rel.textContent = 'btn'
            space.innerHTML = ''
    })
}   
       
     
   
 
    

