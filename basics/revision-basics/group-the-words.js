// task 6: Group Words by First Letter Using Map

// Input: ['dog', 'apple', 'dove', 'cat']
// Output:
// {
//   d: ['dog', 'dove'],
//   a: ['apple'],
//   c: ['cat']
// }
// ✅ Practice: map.set() and map.get() for grouped values.

let words = ["dog", "apple", "dove", "cat"];
let map = new Map();

words.forEach((word) => {
  if (map.has(word[0])) {
    map.get(word[0]).push(word);
  } else {
    map.set(word[0], [word]);
  }
});

console.log(map);
