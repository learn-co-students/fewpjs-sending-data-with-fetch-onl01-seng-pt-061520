function submitData(name,email) {
    let formData= {
        name: name,
        email: email
    };

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
            "Accept":"application/json",
        },
        body: JSON.stringify(formData)
    };

    return fetch("http://localhost:3000/users",configObj)
    .then(function(response){
        return response.json();
    })
    .then(function(object){
        //From this object, find the new id and append this value to the DOM.
        let h2= document.createElement('h2');
        h2.innerHTML = object.id;
        document.body.appendChild(h2);
        console.log(object);
    })
    .catch(function(error){
        //expect to receive an object on error with a property, message, containing info about what went wrong. Append this message to the DOM when catch() is called.
        let h3= document.createElement('h3');
        h3.innerHTML=error.message;
        document.body.appendChild(h3);
        console.log(error.message);
    });
}