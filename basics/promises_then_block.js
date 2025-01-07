



let fetchData = new Promise(function (resolve, reject) {

    console.log('Fetching data');
    let status = "Pending"

    //Assuming that this is the logic that fetches the data
    setTimeout(() => {
        console.log('Data received');
        
        //once the data has been fetched from the server we will just resolve the promise changing the its state to fullfilled
        resolve("Data fetched successfully here is your data 99090000");
        reject("An error has been occured"); //If there will be an error then it will be caught by the catch
    }, 5000);

});


console.log(fetchData) //If we try to print the state of the promise before resolve it will be in pending state 

// If we want to do something when the data is fetched (promise is resolved) we will use then block


fetchData.then(data => {
    console.log("Data is fetched Showing it in table form ......." );
}).catch(error => {
    console.error("Error has been occured");
});



