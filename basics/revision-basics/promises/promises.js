// ✅ Task 1: Create a Basic Promise
// Write a function delayedHello() that returns a Promise which resolves with 'Hello' after 1 second.

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello");
  }, 1000);
});

p1.then((value) => console.log("Promise resolved ", value));

// ✅ Task 2: Create a Random Promise That Resolves or Rejects
// Write a flipCoin() function that randomly resolves ("Heads") or rejects ("Tails"), simulating success/failure.

function flipCoin() {
  let p2 = new Promise((res, rej) => {
    let random = Math.random();
    if (random < 0.5) {
      res("Heads");
    } else {
      rej("Tails");
    }
  });

  return p2;
}

flipCoin()
  .then((value) => console.log("Promise resolved : ", value))
  .catch((err) => console.log("Promise rejected", err));

//   ✅ Task 3: Promisify a Callback
// Rewrite this using Promises:

// function fetchData(callback) {
//   setTimeout(() => {
//     callback(null, { name: 'Alice' });
//   }, 1000);
// }

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "Alice" });
    }, 1000);
  });
}

fetchData().then((data) => console.log(data));

// 🚀 Stage 2: Intermediate – Chaining & Composition
// 🔗 Task 4: Chain Promises
// Create 3 Promises that simulate:

// Getting a user

// Getting that user’s posts

// Saving a summary

// Chain them like this:

// getUser()
//   .then(user => getPosts(user.id))
//   .then(posts => saveSummary(posts))
//   .then(summary => console.log('Done:', summary))
//   .catch(err => console.error('Error:', err));

let getUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, name: "John" });
    }, 1000);
  });
};

let getPosts = (id) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res([
        { id: 1, title: "Post 1" },
        { id: 2, title: "Post 2" },
      ]);
    }, 1000);
  });
};

let saveSummary = (posts) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Summary saved");
    }, 1000);
  });
};

getUser()
  .then((user) => getPosts(user.id))
  .then((posts) => saveSummary(posts))
  .then((summary) => console.log("Done:", summary))
  .catch((err) => console.error("Error:", err));

//   🔗 Task 5: Conditional Logic in a Chain
// Use .then() to conditionally return one Promise or another.

// checkUserRole("admin") // returns a Promise
//   .then((role) => {
//     if (role === "admin") return getAdminData();
//     else return getRegularData();
//   })
//   .then((data) => console.log(data));

let checkUserRole = () => {
  return new Promise((resolve) => {
    let random = Math.random();

    if (random < 0.5) {
      resolve("admin");
    } else {
      resolve("user");
    }
  });
};

let getAdminData = () => {
  return new Promise((resolve, reject) => {
    resolve("Here is the Admin Data");
  });
};

let getRegularData = () => {
  return new Promise((resolve, reject) => {
    resolve("Here is the regular data");
  });
};

checkUserRole()
  .then((type) => {
    if (type === "admin") {
      return getAdminData();
    } else {
      return getRegularData();
    }
  })
  .then((val) => console.log(val));

// 🌐 Stage 3: Advanced – Concurrent Promises & Real-World Patterns
// 🧩 Task 6: Use Promise.all()
// Create 3 separate Promises: getUser(), getPosts(), getComments().
// Run them in parallel and log all the data once all are done.

// Promise.all() is a method that takes an array of promises and returns a single promise.
// ✅ It resolves when all promises in the array resolve.
// ❌ It rejects immediately if any one promise rejects.

function getAllData() {
  let getData = new Promise((res) => res("here is your data"));
  let updateData = new Promise((res) => res("Data updated"));
  let storeData = new Promise((res) => res("Data Stored"));

  let promise = Promise.all([getData, updateData, storeData]);

  return promise;
}

getAllData().then((val) => console.log(val));

// ⚡ Task 7: Use Promise.race()
// Create 2 Promises that resolve after different times (e.g., 1s and 3s).
// Use Promise.race() to return whichever finishes first.

function promiseRace() {
  let promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise 1 resolved first");
    }, 2000);
  });

  let promise2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise 2 resolved first");
    }, 1000);
  });

  let p3 = Promise.race([promise1, promise2]);

  p3.then((val) => console.log(val));
}

promiseRace();

// 🛠️ Task 8: Retry with Promises
// Create a retry(fn, attempts) function that:

// Runs a Promise-returning fn()

// If it fails, retries up to attempts times

function retry(fn, attempts) {
  return fn().catch((err) => {
    if (attempts > 1) {
      console.log(`Retrying... attempts left: ${attempts - 1}`);
      return retry(fn, attempts - 1);
    } else {
      // No more retries — reject
      return Promise.reject(`❌ Failed after all attempts: ${err}`);
    }
  });
}

function fetchData2() {
  return new Promise((res, rej) => rej("data not found"));
}

retry(fetchData2, 3)
  .then((data) => console.log("Result:", data))
  .catch((err) => console.error("Error:", err));

// ✅ Step-by-step Instructions:
// Create 3 functions that return Promises:
// fetchUser() → resolves with "User data"
// fetchPosts() → rejects with "Posts failed"
// fetchComments() → randomly resolves or rejects
// Use Promise.allSettled() to run all three at once.
// Loop through the result and:
// Log "✅ Success:" with the value if fulfilled
// Log "❌ Failed:" with the reason if rejected

// 🧾 What is Promise.allSettled()?
// Promise.allSettled() is a method that takes an array of promises and waits for all of them to settle — meaning either:

// ✅ fulfilled (resolved), or

// ❌ rejected

// It returns a new promise that resolves after all input promises are settled, and it gives you their outcomes (success or failure), without short-circuiting like Promise.all().

function promiseSettlesDemo() {
  let fetchUser = () => new Promise((res) => res("User Data"));
  let fetchPosts = () => new Promise((_, rej) => rej("Posts failed"));
  let fetchComments = () =>
    new Promise((res, rej) =>
      Math.random() < 0.5 ? res("Comments Data") : rej("Comments failed")
    );

  Promise.allSettled([fetchUser(), fetchPosts(), fetchComments()]).then((val) =>
    console.log(val)
  );
}

promiseSettlesDemo();
