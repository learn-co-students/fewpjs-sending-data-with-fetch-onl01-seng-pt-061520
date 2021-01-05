// Add your code here


fetch("http://localhost:3000/dogs", configurationObject)
    .then(function(response){
        return response.json();
    })
    .then(function(object) {
        console.log(object);
    })

function submitData(userName, userEmail) {
    let configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    };
    return fetch("http://localhost:3000/users", configurationObject)
            .then(function(response) {
                return response.json();
            })
            .then(function(object){
                let iden = document.createElement("li");
                iden.innerHTML = object.id;
                document.querySelector("script").appendChild(iden);
            })
            .catch(function(error) {
                document.querySelector("script").innerHTML = error.message;
            })
}