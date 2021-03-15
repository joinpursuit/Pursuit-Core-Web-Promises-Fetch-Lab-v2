document.addEventListener("DOMContentLoaded", event => {
    event.preventDefault();
  reload();
})

  function reload() {
      const container = document.getElementById('container');
    fetch("https://official-joke-api.appspot.com/random_ten")
      .then(res => {
        return res.json();
      })
      .then(body => {
        for (jok of body) {
          const forms = document.createElement("div");
          forms.className = 'card';
          const inputJ = document.createElement("button");
          inputJ.className = "setup";
          inputJ.textContent = jok.setup;
          forms.appendChild(inputJ);
          const jokey = document.createElement('span');
          jokey.className = "punchline";
          jokey.style.visibility = "hidden";
          jokey.textContent = jok.punchline;
          forms.appendChild(jokey);
          container.appendChild(forms);
          inputJ.addEventListener("click", () => {
              // event.preventDefault()
            if (jokey.style.visibility === 'hidden') {
              jokey.style.visibility = "visible";
            } else {
              jokey.style.visibility = "hidden";
            }
        })
    }
})
const button = document.getElementById('reload')
    button.addEventListener("click", () => {
        // const spanner = document.getElementById('loading')
        // spanner.textContent = "Loading"
      container.innerHTML = ''
    })

  }

