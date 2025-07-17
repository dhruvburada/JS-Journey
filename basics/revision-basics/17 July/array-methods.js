let nums = [1, 2, 3, 4];
// → [2, 4, 6, 8]

let doubled = nums.map((val) => {
  return val * 2;
});

console.log(doubled);

//Filter out odd numbers
// → [2, 4]

let odd = nums.filter((x) => x % 2 == 0);
console.log(odd);

let users = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];
// → Use forEach to console.log each name

let names = [];
users.forEach((user) => names.push(user.name));

names = ["alice", "bob", "charlie"];
// → ["ALICE", "BOB", "CHARLIE"]
names = names.map((name) => name.toUpperCase());

console.log(names);

//Sum of all the numbers using reduce
let prices = [10, 20, 30];
// → 60 using reduce

let sum = prices.reduce((acc, val) => acc + val);

console.log(sum);

users = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 19 },
];
// → Only Bob & Charlie

let adults = users.filter((user) => user.age > 18);
console.log(adults);

//List full names of employees
let people = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Jane", lastName: "Smith" },
];
// → ["John Doe", "Jane Smith"]

let fullnames = people.map((obj) => `${obj.firstName} ${obj.lastName} `);

console.log(fullnames);

// Filter even numbers and then square them

nums = [1, 2, 3, 4, 5];
// → [4, 16]

let evenSquare = nums.filter((num) => num % 2 == 0).map((x) => x ** 2);
console.log(evenSquare);

users = [
  { name: "A", isActive: true },
  { name: "B", isActive: false },
  { name: "C", isActive: true },
];
// → 2

let isActive = users.reduce((acc, val) => acc + Number(val.isActive), 0);

console.log(isActive);

//Flatten an array of arrays

let nested = [1, 2, [(1, 2)], [3, 4], [5]];
// → [1, 2, 3, 4, 5]

nested.forEach((arr) => {
  if (typeof nested === "object") nested = nested.flat();
});

console.log(nested);

users = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "Charlie", role: "admin" },
];
// → { admin: [Alice, Charlie], user: [Bob] }

let groupedBy = { user: [], admin: [] };

users.forEach(
  (obj) => (groupedBy[obj.role] = [...groupedBy[obj.role], obj.name])
);

console.log(groupedBy);

people = [
  { name: "A", salary: 10000 },
  { name: "B", salary: 20000 },
  { name: "C", salary: 15000 },
];
// → Person with max salary

let maxsalary = people.reduce((acc, val) => {
  if (acc.salary > val.salary) return acc;
  else return val;
});

console.log(maxsalary);

let temp = { Alice: [1, 2, 3, 4] };

input = [
  { name: "Alice", subject: "Math" },
  { name: "Bob", subject: "Science" },
  { name: "Alice", subject: "English" },
];
// → { Alice: ["Math", "English"], Bob: ["Science"] }

let grouped = {};

input.forEach((obj) => {
  if (!grouped[obj.name]) {
    grouped[obj.name] = [];
  }
  grouped[obj.name] = [...grouped[obj.name], obj.subject];
});

console.log(grouped);
