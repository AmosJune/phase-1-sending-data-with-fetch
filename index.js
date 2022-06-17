// Add your code here
function submitData(name, email) {

// configuration object is already inside the fetch
    return fetch("http://localhost:3000/users", {
    method : "POST",
    headers : {
      "Content-Type" : "application/json",
      Accept : "application/json"
    },
    body : JSON.stringify({
      name, 
      email,
    }),
  }) 

  //handling with .then()
  .then(function(response){
    return response.json()
  })
  .then(function(object){
    document.querySelector('body').innerHTML = object['id']
  })

  //when things go wrong 
  .catch(function(error){
    document.querySelector('body').textContent = error.message
  })
}
