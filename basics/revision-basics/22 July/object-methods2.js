/// ✅ Goal:
/// Return `true` if **any** student scored below 40, else `false`

let results = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 42 },
  { name: "Charlie", score: 78 },
  { name: "David", score: 32 },
];

console.log(results.some((user) => user.score < 40));

/// ✅ Goal:
/// Return `true` only if **all** users have `verified: true`

let users = [
  { id: 1, email: "a@mail.com", verified: true },
  { id: 2, email: "b@mail.com", verified: true },
  { id: 3, email: "c@mail.com", verified: false },
];

console.log(users.every((user) => user.verified === true));

/// ✅ Goal:
/// Find the **first** student who scored more than 90

let students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 95 },
  { name: "Charlie", score: 78 },
];

console.log(students.find((student) => student.score > 90));

/// ✅ Goal:
/// Check if `searchItem` is present in the cart or not

let cart = ["pen", "pencil", "eraser", "notebook"];
let searchItem = "eraser";

console.log(cart.includes(searchItem));

/// ✅ Goal:
/// Sort the products in **ascending** order of price

let products = [
  { name: "Phone", price: 999 },
  { name: "Laptop", price: 1299 },
  { name: "Tablet", price: 499 },
];

products.sort((a, b) => a.price - b.price);
console.log(products);

/// ✅ Goal:
/// Create an object like:
/// { Clothing: 2, Food: 2, Electronics: 1 }

let items = [
  { name: "Shirt", category: "Clothing" },
  { name: "Pants", category: "Clothing" },
  { name: "Apple", category: "Food" },
  { name: "Banana", category: "Food" },
  { name: "Laptop", category: "Electronics" },
];

let count = items.reduce((acc, val) => {
  acc[val.category] = (acc[val.category] || 0) + 1;
  return acc;
}, {});

console.log(count);

/// ✅ Goal:
/// Create a flat array of IDs but only keep IDs > 103
/// Output: [104, 105, 106]

const userIds = [[101, 102, 103], [104, 105], [106]];

let result = userIds.flat(Infinity).filter((id) => id > 103);
console.log(result);

/// ✅ Goal:
/// Get unique list of all tags
/// Output: ["js", "beginner", "css", "layout", "performance"]

const blogPosts = [
  { title: "Intro to JS", tags: ["js", "beginner"] },
  { title: "Advanced CSS", tags: ["css", "layout"] },
  { title: "JS Tricks", tags: ["js", "performance"] },
];

let uniqueTags = [...new Set(blogPosts.flatMap((post) => post.tags))];
