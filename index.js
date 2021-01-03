// Add your code here
function submitData(userName, userEmail) {
    const userInfo = {
        name: userName,
        email: userEmail
    }
    
    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userInfo)
    }
    return fetch("http://localhost:3000/users", configObj)
        .then(function(resp) {
            return resp.json();
        })
        .then(function(object) {
            const p = document.createElement('p')
            p.innerHTML = object.id
            document.body.appendChild(p)
            console.log(object)
        })
        .catch(function(error) {
            const p = document.createElement('p')
            p.innerHTML = error.message
            document.body.appendChild(p)
        })
}