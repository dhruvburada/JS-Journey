

function something()
{

    let p = new Promise(function(resolve, reject) {
        
        setTimeout(function() { 
            resolve("Dhruv");

    },3000);
    
});

return p;
}

// something().then(function(data){
//     let temp = data.toString();
//     console.log("This is data",temp);
//     console.log("Hello world");
//     //this will not be executed as it is outside of the promise
// })

//when we use .then syntax in promises the problem is that 

async function  main()
{
    let value = await something();
    console.log(value);
    console.log("Hi there");
}


main();

console.log("This is out of scope");