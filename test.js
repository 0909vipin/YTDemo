/* callback */
/* function callback(some) {
  console.log(some);
}
function add(a, b, callback) {
  let sum = a + b;
  callback(sum);
}
add(1, 2, callback); */
/* callback */

/* promise and async await */
/*let v = fetch("https://jsonplaceholder.typicode.com/posts");
 
async function test() {
  let v = await fetch("https://jsonplaceholder.typicode.com/posts");
  console.log(await v.json());
}
test(); */

/* fetch("https://jsonplaceholder.typicode.com/posts")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(error);
  }); */

// by promise
/* let url = fetch("https://jsonplaceholder.typicode.com/posts");
url
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  }); */
/* promise and async await */

const mongoose = require("mongoose");

mongoose.connect("url/database");
app.set("view engine", "ejs");

const jwt = require("jsonwebtoken");
jwt.sign(user, secret);
jwt.verify(token, secret);
