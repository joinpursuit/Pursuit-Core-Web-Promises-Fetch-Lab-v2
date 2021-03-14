fetch('https://official-joke-api.appspot.com/random_ten')
    .then(response => {
  return response.json()
}).then(body => {

  const userList = document.querySelector('ul')
  for (let user of body) {
    const userItem = document.createElement('li')
    userItem.textContent = user.setup
    userList.appendChild(userItem)
  }
})