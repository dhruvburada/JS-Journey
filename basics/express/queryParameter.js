const express = require('express');

const app = express();

app.get("/",(req,res) => 
{
    res.send("Hello World!");
})


function sumofn(n)
{
    return (n*(n+1))/2;
}
app.get("/sumofn/",(req,res)=>
{
    let n = parseInt(req.query.n); // query parameter is present in the url
    res.send(`sum of ${req.query.n} numbers is : `+sumofn(n).toString());

})

app.get("/sumoftwo/",(req,res)=>
{
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    res.send(`sum of ${num1} and ${num2} is : `+ (num1+num2).toString());
})

app.listen(80,()=>{console.log("application is listening on port 80")});