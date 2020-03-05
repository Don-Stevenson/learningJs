const fakeServerResponse = () => {
  setTimeout(function() {
    console.log("slowed by two seconds");
  }, 2 * 1000);
  return (sum = 2 + 2);
};

console.log(fakeServerResponse());

async function doSomething() {
  try {
      let sum = await fakeServerResponse() + 2;
      return sum;
  } catch (error) {
    console.error(error);
  }
}

console.log(doSomething());
