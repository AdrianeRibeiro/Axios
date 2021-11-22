const url = "http://localhost:5500/api"
const newUser = {
  name: "Olivia Palito",
  avatar: "http://lorempixel.com.br/500/400/?1",
  city: "Rio do Sul"
}

const userUpdated = {
  name: "Mayk Britto",
  avatar: "https://avatars.githubusercontent.com/u/6643122?v=4",
  city: "Paraná"
}

function getUser() {
  axios.get(url)
  .then(response => {
    const data = response.data
    renderResults.textContent = JSON.stringify(data)
  })
  .catch(error => console.log(error))
}

//getUser()

function addNewUser() {
  axios.post(url, newUser)
  .then(response => {
    alert(response.data)
  })
  .catch(error => console.log(error))
}

//addNewUser()

function updateUser() {
  axios.put(`${url}/3`, userUpdated)
  .then(response => {
    alert(JSON.stringify(response.data))
  })
  .catch(error => console.log(error))
}

//updateUser()

function deleteUser() {
  axios.delete(`${url}/12`)
  .then(response => {
    alert(JSON.stringify(response.data))
  })
  .catch(error => console.log(error))
}

//deleteUser()

function getOneUser() {
  axios.get(`${url}/1`)
  .then(response => {
    const data = response.data
    renderResults.textContent = JSON.stringify(data)
  })
  .catch(error => console.log(error))
}

getOneUser()