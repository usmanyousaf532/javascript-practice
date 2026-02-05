// promise.all()

// Create a Promise
// const myPromise1 = new Promise((resolve, reject) => {
//   setTimeout(reject, 3000, "King");
// });
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("p2 pass"), 4000);
// });

// // Create another Promise

// const myPromise2 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("p2 fail "), 2000);
//   //   setTimeout(reject, 100, "Queen");
// });

// // // Both resolve, who is faster?

// Promise.any([myPromise1, myPromise2, p1])
//   .then((x) => {
//     console.log(x);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// allSettled()

// // Create a Promise
// const myPromise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 200, "King");
// });

// // Create another Promise
// const myPromise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "Queen");
// });

// // Both resolve, who is faster?

//   Promise.allSettled([myPromise1, myPromise2]).then((x) => {
//     console.log(x);
//   });

// function myDisplay(value) {
//   console.log(value);
// }

// // Create a Promise
// const myPromise1 = new Promise((resolve) => {
//   setTimeout(resolve, 200, "King");
// });

// // Create another Promise
// const myPromise2 = new Promise((resolve) => {
//   setTimeout(resolve, 100, "Queen");
// });

// // Settle All
// Promise.allSettled([myPromise1, myPromise2]).then((results) =>
//   results.forEach((x) => myDisplay(x.value))
// );

// function myDisplay(value) {
//   console.log(value);
// }

// // Create a Promise
// const myPromise1 = new Promise((resolve) => {
//   setTimeout(resolve, 10, "King");
// });

// // Create another Promise
// const myPromise2 = new Promise((resolve) => {
//   setTimeout(resolve, 100, "Queen");
// });

// // Settle All
// Promise.any([myPromise1, myPromise2]).then((results) => {
//   console.log(results);
// });

//catch

// Promise 1 (will resolve)
// const myPromise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const success = true; // change to false to simulate error

//     if (success) {
//       resolve("King");
//     } else {
//       reject("King failed");
//     }
//   }, 10);
// });

// // Promise 2 (will resolve)
// const myPromise2 = new Promise((_, reject) => {
//   setTimeout(() => {
//     const success = true; // change to false to simulate error

//     if (success) {
//       resolve("Queen");
//     } else {
//       reject("Queen failed");
//     }
//   }, 100);
// });

// // Promise.any with proper error handling
// Promise.all([myPromise1, myPromise2])
//   .then((result) => {
//     console.log("Success:", result);
//   })
//   .catch((error) => {
//     console.log("Error name:", error.name);
//     console.log("Error message:", error.message);
//     console.log("Individual errors:", error.errors);
//   });

//.race()

// Create a Promise that resolves after 200ms
// const myPromise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("King"); // successful

//   }, 200);
// });

// const myPromise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Queen"); // successful

//   }, 100);
// });

// const myPromise3 = Promise.resolve("Prince"); // resolves immediately

// // Race the promises (first one to resolve wins)
// Promise.race([myPromise1, myPromise2, myPromise3])
//   .then((result) => {
//     console.log("First resolved promise:", result);
//   })
//   .catch((error) => {
//     console.log("Something went wrong:", error);
//   });

//.withResolvers()

// const { promise, resolve, reject } = Promise.withResolvers();

// // You can now use 'resolve' and 'reject' anywhere in your code
// // to control the state of 'promise'.

// // Simulate async work
// setTimeout(() => {
//   const success = Math.random() > 0.5;
//   if (success) {
//     resolve("Operation successful!");
//   } else {
//     reject("Operation failed!");
//   }
// }, 1000);

// promise
//   .then((message) => text = message).catch((error) => text = error);

//withResolvers()

// for (let i = 1; i <= 10; i++) {
//   console.log("1");
// }

const { promise, resolve, reject } = Promise.withResolvers();

// You can now use 'resolve' and 'reject' anywhere in your code
// to control the state of 'promise'.

// Simulate async work
setTimeout(() => {
  const success = Math.random() > 0.5;
  if (success) {
    resolve("Operation successful!");
  } else {
    reject("Operation failed!");
  }
}, 2000);

promise
  .then((message) => console.log(message))
  .catch((error) => (text = error));
