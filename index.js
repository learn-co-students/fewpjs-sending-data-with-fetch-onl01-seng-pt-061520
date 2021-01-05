// Add your code here

let container = document.querySelector('div.container')

function submitData(userName, userEmail) {
  let data = {
    name: userName,
    email: userEmail
  }

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(data)
  }

  fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
      return response.json()
    })
    .then(function(object) {
      document.body.innerHTML = object["id"].toString()
    })
    .catch(function(error) {
      document.body.innerHTML = error.message
    })
}
