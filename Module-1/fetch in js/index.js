fetch('https://api.github.com/users/hiteshchoudary')
.then((response) =>{
    return response.json()
})
.then((data) =>{
    console.log(data);
})
.catch((error) => console.log(error))