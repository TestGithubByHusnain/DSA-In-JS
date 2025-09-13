// Promise creation
const promiseOne = new Promise(function (resolve, reject) {
  // do an async task: Db calls, cryptography, network calls
  setTimeout(function () {
    // console.log("Async task is complete");
    // Connecting resolve with .then:
    resolve();
  }, 1000);
});
// Promise consuming:
promiseOne.then(function () {
  //   console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    // console.log("Async task 2");
    resolve();
  }, 2000);
}).then(function () {
  //   console.log("Promise 2 consumed");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // console.log("DB is connected");
    resolve({ username: "Wick", email: "wick234@gmail.com" });
  }, 1000);
});
promiseThree.then(function (user) {
  // console.log(user);
});

// Promise chaining
const promisefour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Husnain", Password: "husnain123" });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});
promisefour
  .then((user) => {
    // console.log(user);
    return user.username;
  })
  .then((username) => {
    // console.log(username);
  })
  .catch(function (error) {
    // console.log(error);
  })
//   .finally(() => 
//     console.log("The Promise is either reolved or rejected."
// ))


const promisefive = new Promise(function (resolve, reject){
 setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Javascript", Password: "js123" });
    } else {
      reject("Error: JS went wrong");
    }
  }, 1000);

})
async function consumePromiseFive(){
  try {
    const response = await promisefive
    // console.log(response);
  } catch (error) {
    // console.log(error);
  }
   
}
// consumePromiseFive()


fetch('https://jsonplaceholder.typicode.com/users')
.then( (response) => {
return response.json()
})
.then((data) =>{
console.log(data);
})
.catch((error) => console.log(error))