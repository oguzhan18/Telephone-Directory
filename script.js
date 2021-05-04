alert("I am sharing statically. There is a sample made using api from my codpen.io account.");
const users = [
    {
      "id": 1,
      "name": "Oğuzhan",
      "username": "ÇART",
      "email": "oguhancart1@gmail.com",
      "phone": "05372503818",
      "website": "www.cartapp.phpnet.us"
    },
    {
      "id": 2,
      "name": "a",
      "username": "b",
      "email": "oguhancart1@gmail.com",
      "phone": "05372503818",
      "website": "www.cartapp.phpnet.us"
    },
    {
      "id": 3,
      "name": "c",
      "username": "ç",
      "email": "oguhancart1@gmail.com",
      "phone": "05372503818",
      "website": "www.cartapp.phpnet.us"
    },
    {
      "id": 4,
      "name": "d",
      "username": "e",
      "email": "oguhancart1@gmail.com",
      "phone": "05372503818",
      "website": "www.cartapp.phpnet.us"
    },
    {
      "id": 5,
      "name": "f",
      "username": "g",
      "email": "oguhancart1@gmail.com",
      "phone": "05372503818",
      "website": "www.cartapp.phpnet.us"
    },
    {
      "id": 6,
      "name": "ğ",
      "username": "h",
      "email": "oguhancart1@gmail.com",
      "phone": "05372503818",
      "website": "www.cartapp.phpnet.us"
    },
    {
      "id": 7,
      "name": "ğ",
      "username": "h",
      "email": "oguhancart1@gmail.com",
      "phone": "05372503818",
      "website": "www.cartapp.phpnet.us"
    }
  ]

const conSearch = document.querySelector('.con-search')
function handleRemove() {
    conSearch.querySelector('input').value = ''
    conSearch.classList.add('notValue')
}
function handleFocus(evt) {
    if (evt.target.value) {
        conSearch.classList.add('focus')
    }
}
function handleBlur() {
    conSearch.classList.remove('focus')
}

function handleSearch(evt) {
    const value = evt.target.value
    const newUsers = users.filter((user) => {
        delete user.address
        delete user.company
        delete user.phone
        delete user.id
        delete user.username
        const string = JSON.stringify(user).toLowerCase()
        if (string.indexOf(value.toLowerCase()) !== -1) {
            return user
        }
    })
    renderResults(newUsers, value)
}

function renderResults(results, value) {
    const conResults = document.querySelector('.con-results')
    conResults.innerHTML = ''
    
    if (!value) {
        conSearch.classList.remove('focus')
        conSearch.classList.add('notValue')
        return    
    } 
    conSearch.classList.remove('notValue')
    conSearch.classList.add('focus')
    results.forEach((result) => {
        const resultElement = document.createElement('div')
        resultElement.className = 'result'
        const title = document.createElement('h5')
        const text = document.createElement('p')
        const web = document.createElement('div')
        web.className = 'web'
        title.innerHTML = result.name.toLowerCase().replace(value, `<b>${value}</b>`)
        text.innerHTML = result.email.toLowerCase().replace(value, `<b>${value}</b>`)
        web.innerHTML = result.website.toLowerCase().replace(value, `<b>${value}</b>`)
        resultElement.appendChild(title)
        resultElement.appendChild(text)
        resultElement.appendChild(web)
        resultElement.classList.add('hidden')
        conResults.appendChild(resultElement)
        setTimeout(() => {
            resultElement.classList.remove('hidden')
        }, 20);
    })
}