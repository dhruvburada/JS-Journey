//call apply and bind helps you to manually attach this keyword to the obj

let obj = {
  name: "Dhruv",
};

function greet() {
  console.log(`Good morning my name is ${this.name}`);
}

greet(); // in global context in strict mode this will be undefined

//call greet method on obj

greet.call(obj); // attach this context of the greet method to the obj
