// Bind method will allow us to set the this of a function to a specific object permanently it will not modify the main function itself
//but return a new function

function greet() {
  console.log("Hi", this.name);
}

object = { name: "Dhruv" };

let newMethod = greet.bind(object);

newMethod();
