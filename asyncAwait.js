// // set timeout function to mimic a server response
// const fakeServerResponse = () => {
//   setTimeout(function() {
//     console.log("slowed by two seconds");
//   }, 2 * 1000);
// };

// // console.log(fakeServerResponse());

// // trying to use async await
// async function doSomething() {
//   try {
//       let serverResponse = await fakeServerResponse();
//       return serverResponse;
//   } catch (error) {
//     console.error(error);
//   }
// }

// console.log(doSomething());

// following along with fun fun function
const fetch = require("node-fetch");

async function fetchAvatarUrl(userId) {
  const response = await fetch(
    `https://catappapi.herokuapp.com/users/${userId}`
  );
  const data = await response.json();

  console.log(data.imageUrl);

  //   return fetch(`https://catappapi.herokuapp.com/users/${userId}`)
  // .then(response => response.json())
  // .then(data => data.imageUrl);
}

fetchAvatarUrl(123);
