// Add your code here

function submitData(name, email){

    let formData = {
        name: name,
        email: email
      };

    let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      };


    return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
        const p = document.createElement('p')
        p.innerHTML = object.id
        document.body.appendChild(p)
        })
    .catch(function(error) {
        document.body.innerHTML = error.message
    });

    
}
   
  // method: "POST" is missing from the object below

   