function Student(name, age, enrollment) {
  this.name = name; //refers to the global object // in strict mode gives error
  this.age = age;
  this.enrollment = enrollment;

  this.greet = function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
  };

  return this; //returns the global object
}

const usr1 = Student("Dhruv", 21, "22SOECE11006");
console.log(usr1);

const user2 = Student("Dhruv Brooo", 22, "EMP001"); // changes the existing object becuase both point to the global object

console.log(usr1);

//constructor function

//when you use new keyword student function acts as constructor function which will initialize a new obj with following values
// internally what it will do is create a new object and point the this of the function to that perticullar object
// and implicitly return the result or object

const user3 = new Student("Panda", 21, "22SOECE11020");
const user4 = new Student("Hiteshree", 21, "22SOECE11020");

console.log(user3);
console.log(user4);

// you can check if the object belongs to perticular class or not

console.log(user3 instanceof Student);

console.log(usr1 instanceof Student);

//problem with this : now each object created from the student class has its own greet method which will consume too much of memory
user3.greet();
user4.greet();

// Each Object has a prototype property which is a reference to another object so we will just add this greet property into the
//prototpye object so that it wont create a new property for each object

function Person(name, age, enrollment) {
  this.name = name;
  this.age = age;
  this.enrollment = enrollment;
}

Person.prototype.greet = () => `Hello there ! ${this.name}`; // when you want to assign properties to prototype
let p1 = new Person("Panda", 22, 21);
console.log(p1.greet());

console.log(p1.__proto__); ///When you want to look up what prototype does object has
