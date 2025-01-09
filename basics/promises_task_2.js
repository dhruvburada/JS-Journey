let p1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        
        resolve("Promise 1 resolved");
    }, 2000);
});

let p2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        
        resolve("Promise 2 resolved");
    }, 1000);
});

let p3 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        
        resolve("Promise 3 resolved");
    }, 3000);
});

//fetches the data from promises which resolves first

Promise.race([p1, p2, p3]).then(function(data)
{
    console.log(data);
}
).catch(function(error){
    console.error(error);
});


//when all  promises are resolved

Promise.all([p1, p2, p3]).then(function(data)
{
    console.log(data);
}
).catch(function(error){
    console.error(error);
});