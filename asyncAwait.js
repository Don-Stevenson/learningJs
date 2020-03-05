const delayTime = () => {
  setTimeout(function() {
    console.log("slowed by two seconds");
  }, 500);
};

console.log(delayTime());

async function doSomething() {
  try {
    let awaitTimeOut = await delayTime();
    console.log("here", awaitTimeOut);
  } catch (error) {
    console.error(error);
  }
}
