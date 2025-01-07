// A Promise is a way to handle asynchronous operations like fetching data, reading files, or waiting for a timer. It lets you write cleaner code to manage tasks that take time to complete, without getting stuck in callback hell (a situation where callbacks are nested and hard to read).

// A Promise has three states:

// Pending: The task is not finished yet.
// Resolved (Fulfilled): The task is completed successfully. Resolve(value) : Changes the state of the Promise to "fulfilled" and optionally passes a value or message to indicate success.
// Rejected: reject(reason) Changes the state of the Promise to "rejected" and optionally passes a reason or error message to indicate failure.



// A Promise remains in the "pending" state until either resolve or reject is called.

let promise = new Promise(function(resolve, reject) {

    console.log("Hello world!");
});

console.log(promise);

//when promises are completed, we use resolve function which can optional parameter to pass when the promise is completed what message should be displayed to say that the promise have been resolved which changes the state of the promise is changed to fulfilled

promise = new Promise(function(resolve, reject) {

    console.log("Hello world!");
    resolve("Task done!"); // without parameters it will print undefined
});

console.log(promise); 


// when promise fails, the error is generated we use reject function which can optional parameter to pass when the promise is failed what message should be displayed to say that the promise have been rejected which changes the state of the promise is changed to rejected

promise = new Promise(function(resolve, reject) {

    console.log("Hello world!");
    reject("Task failed!"); // without parameters it will print undefined
});

