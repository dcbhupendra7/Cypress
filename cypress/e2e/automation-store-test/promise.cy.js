let promise = new promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("Passed");
  } else {
    reject("failed");
  }
});
promise
  .then((message) => {
    console.log(message + ", Resolved");
  })
  .catch((message) => {
    console.log(message + "rejcted");
  });
