const delayTime = () => {
  setTimeout(function() {
    console.log("slowed by two seconds");
  }, 2 *1000);
};

async function doSomething() {
  try {
    let awaitTimeOut = await delayTime();
    console.log("here", awaitTimeOut);
  } catch (error) {
    console.error(error);
  }
}

doSomething();