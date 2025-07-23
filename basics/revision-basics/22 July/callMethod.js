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

//functions with arguments

function greet(language) {
  if (language === "english") {
    console.log(`Hello ${this.name} How are you??`);
  } else {
    console.log(`kesa hai ${this.name} bhai ??`);
  }
}

greet.call(obj, "english"); //attach this context of the greet method to the obj and pass english as arguments
