const delayTime = () => { setTimeout(2*1000, console.log("slowed by two seconds"))}

const doSomething = () => {
  try {
      let awaitTimeOut = await delayTime()
      console.log("here",awaitTimeOut)
  } catch (error) {
    console.error(error);
  }
};
