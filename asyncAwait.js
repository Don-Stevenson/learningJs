
// set timeout function to mimic a server response
const fakeServerResponse = () => {
  setTimeout(function() {
    console.log("slowed by two seconds");
  }, 2 * 1000);
};

// console.log(fakeServerResponse());

// trying to use async await
async function doSomething() {
  try {
      let serverResponse = await fakeServerResponse();
      return serverResponse;
  } catch (error) {
    console.error(error);
  }
}

console.log(doSomething());
