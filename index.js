// Add your code here
function submitData(name,email) {
   return fetch('http://localhost:3000/users',{
       method: 'POST',
       headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
       },
       body: JSON.stringify({
           name,
           email
       })
   })
      .then(function(response){
       return response.json()
   })
      .then(function(object){
          document.body.innerHTML = object[ "id" ]
      })
      .catch(function(err){
          document.body.innerHTML = err.message
      })

}
