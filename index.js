// Add your code here
function submitData() {
    const dataUrl = "http://localhost:3000/users"
    const formData = {
        name: "Steve",
        email: "steve@steve.com"
    }
    const configObj = {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }
    
    return fetch(dataUrl, configObj)
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        document.body.innerHTML += object.id
    })
    .catch(function(error) {
        document.body.innerHTML = error.message
    })
}