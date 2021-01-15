const userUrl = 'http://localhost:3000/users'
const headers = {"Content-Type": "application/json", "Accept": "application/json"}

function submitData(userName, userEmail) {
    let config = {
        method: "POST",
        headers: headers,
        body: JSON.stringify({name: userName, email: userEmail})
    }

    return fetch(userUrl, config)
    .then(response => response.json())
    .then(function(result) {
        document.body.innerHTML = result['id']
    })
    .catch(function(error){
        document.body.innerHTML = error['message']
    })
}