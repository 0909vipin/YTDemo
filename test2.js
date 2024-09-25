const { response } = require("express");

var url1 = "https://jsonplaceholder.typicode.com/posts";
var url2 = "https://jsonplaceholder.typicode.com/posts";
var url3 = "https://jsonplaceholder.typicode.com/posts";

/* async function runUrl() {
  let v = await fetch(url1);
  console.log(await v.json());
}

runUrl(); */

//var urlarr = [url1,url2,url3];

fetch(url1)
  .then((response) => {
    return response;
  })
  .then((data) => {
    fetch(url2)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  });
