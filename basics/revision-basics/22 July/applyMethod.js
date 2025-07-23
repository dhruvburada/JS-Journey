//call and apply methods are simillar only difference between call and apply is apply method takes arguments in an array

function greet(language) {
  if (language === "english") {
    console.log(`Hello ${this.name} How are you??`);
  } else if (language === "hindi") {
    console.log(`kesa hai ${this.name} bhai ??`);
  }
}

let obj = {
  name: "Dhruv",
};

greet.apply(obj, ["hindi"]);
