// // set timeout function to mimic a server response
//*************************************************** */
// const fakeServerResponse = () => {
//   setTimeout(function() {
//     console.log("slowed by two seconds");
//   }, 2 * 1000);
// };

// // console.log(fakeServerResponse());

// // exploring async
// ******************
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
// *************************************
const fetch = require("node-fetch");

async function fetchAvatarUrl(userId) {
  const response = await fetch(
    `https://catappapi.herokuapp.com/users/${userId}`
  );
  const user = await response.json();

  return await Promise.all(
    user.cats.map(async function(catId) {
      const response = await fetch(
        `https://catappapi.herokuapp.com/cats/${catId}`
      );
      const catData = await response.json();
      console.log(catData.imageUrl);
    })
  ).catch(e => console.error(e));
  // comparing promises approach
  // ***************************
  //   return fetch(`https://catappapi.herokuapp.com/users/${userId}`)
  // .then(response => response.json())
  // .then(data => data.imageUrl);
}

fetchAvatarUrl(123);
