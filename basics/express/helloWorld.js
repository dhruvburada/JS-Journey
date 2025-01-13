
//include express library to create an http server
const express = require('express');


//create an instance of express app named 'app'
const app = express();

//define a default root
app.get('/', (req, res) => {
    res.send('Hello World!');
});


//define another route that sends a different response when accessed
app.get('/name', (req, res) => {
    res.send("<h1 style='color:red;'>Hello World</h1>");
});


//start the server on port 3000 and log a message to the console when it's running
app.listen(3000, () => {
    console.log('Server is running on port 3000');
})