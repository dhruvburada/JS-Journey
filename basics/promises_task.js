

let fetchdata = new Promise(function(resolve, reject) {

    let isSuccessFull = false;
    let data = ["dhruv","burada"];

    if(isSuccessFull) 
    {
        resolve(data);
    }
    else
    {
        reject("Connection error");
    }

});

fetchdata.then(function(data) {
    console.log("Data fetched successfully ",data);
}).catch(function(err) {
    console.error("Failed to fetch data: "+err);
});