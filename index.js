fetch('https://official-joke-api.appspot.com/random_ten').then(response => {
  return response.json()
}).then(body => {
  console.log(body)
  const jokes = body.setup
  console.log(jokes)

  const userList = document.querySelector('ul')
  for (let joke of jokes) {
    const li = document.createElement('li')
    li.textContent = joke.setup
    ul.appendChild(li)
  }
})
console.log(jokes)
/*
fetch('https://alejos-todos-api.herokuapp.com/api/users').then(response => {
  return response.json()
}).then(body => {
  console.log(body)
  const users = body.payload
  const userList = document.querySelector('ul')
  for (let user of users) {
    const userItem = document.createElement('li')
    userItem.textContent = user.username
    userList.appendChild(userItem)
  }
})
*/