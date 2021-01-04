// Add your code here
fetch("http://localhost:3000/dogs", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({
    dogName: "Byron",
    dogBreed: "Poodle"
  })
});

let formData = {
    dogName: "Byron",
    dogBreed: "Poodle"
  };
   
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
      };
       
      fetch("http://localhost:3000/dogs", configObj)
        .then(function(response) {
          return response.json();
        })
        .then(function(object) {
          console.log(object);
        })
        .catch(function(error) {
          alert("Bad things! Ragnarők!");
          console.log(error.message);
        });