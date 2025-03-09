const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Hello world!");
    resolve();
    // reject();
  }, 1000);
});

promise
  .then(() => {
    console.log("This is in then block");
  })
  .catch(() => {
    console.log("This is in catch block");
  })
  .finally(() => {
    console.log("This is in finally block");
  });

// another way of doing this
const promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let err = true;
    if (err) {
      console.log("hello world!");
      resolve("resolved!");
    } else {
      reject("rejected!");
    }
  }, 3000);
})
//   .then(() => console.log("This is in the then block"))
//   .catch(() => console.log("This is in catch block"))
//   .finally(() => console.log("This is in finally block"));

async function callThePromise() {
    try {
        const response = await promise2;
        console.log(response);   
    } catch (error) {
        console.log(error);
    }
}

callThePromise();