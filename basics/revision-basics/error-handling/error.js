let a = 10;
let b = 0;

// The throw statement in JavaScript manually raises an error (exception). It interrupts the normal program flow and jumps to the nearest catch block, or stops execution if none is found

// if (a / b === Infinity) {
//   throw new Error("CanNotDivideByZero"); // throw custom errors you can throw just anything but we th
// }

// You can throw:
// a built-in error: throw new Error("Something went wrong")

// a custom value: throw "Oops" (not recommended in serious apps)

try {
  c = a / b;
} catch (error) {
  console.log(error.name, error.message);
}
