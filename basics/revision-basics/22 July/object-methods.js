let students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 42 },
  { name: "Charlie", score: 78 },
  { name: "David", score: 32 },
  { name: "Eva", score: 91 },
];

let passedStudents = students.filter((student) => student.score >= 50);
let studentNames = passedStudents.map((student) => student.name);
let avgScore =
  students.reduce((acc, val) => acc + val.score, 0) / students.length;

console.log(studentNames);
console.log(avgScore);

//. Group by Subject

let marks = [
  { name: "Alice", subject: "Math", score: 90 },
  { name: "Bob", subject: "Math", score: 75 },
  { name: "Alice", subject: "English", score: 85 },
  { name: "Bob", subject: "English", score: 60 },
  { name: "Charlie", subject: "Math", score: 95 },
  { name: "Charlie", subject: "English", score: 70 },
];

// Grouped By Subject:
// Output {
//   Math: [
//     { name: "Alice", score: 90 },
//     { name: "Bob", score: 75 },
//     { name: "Charlie", score: 95 }
//   ],
//   English: [
//     { name: "Alice", score: 85 },
//     { name: "Bob", score: 60 },
//     { name: "Charlie", score: 70 }
//   ]
// }

let groupedBySubject = {};

marks.forEach((obj) => {
  let { name, subject, score } = obj;
  if (!groupedBySubject.hasOwnProperty(subject)) {
    groupedBySubject[subject] = [];
  }
  groupedBySubject[subject].push({ name, score });
});

console.log(groupedBySubject);

// 🧠 Task 1: Filter Top Performers

// let students = [
//   { name: "Alice", score: 85 },
//   { name: "Bob", score: 42 },
//   { name: "Charlie", score: 78 },
//   { name: "David", score: 32 },
//   { name: "Eva", score: 91 },
// ];

let topPerformers = students.filter((student) => student.score > 75);
console.log(topPerformers);

// 🔁 Task 2: Update Scores with Bonus

let scores = [
  { name: "Alice", score: 60 },
  { name: "Bob", score: 70 },
  { name: "Charlie", score: 50 },
];
// ✅ Goal: Add 10 bonus points to each score only if it's less than 65, return the updated array.

let newScores = scores.map((player) => {
  if (player.score < 65) {
    return { ...player, score: player.score + 10 };
  }
  return { ...player };
});

console.log(newScores);

// 📊 Task 3: Calculate Average per Subject

marks = [
  { subject: "Math", score: 90 },
  { subject: "Math", score: 80 },
  { subject: "Science", score: 70 },
  { subject: "Science", score: 60 },
];
// ✅ Goal: Create an object like this:

// {
//   Math: 85,
//   Science: 65
// }
// Where each key is a subject, and value is the average score for that subject.

let avg = marks.reduce((acc, value) => {
  acc[value.subject] = (acc[value.subject] || 0) + value.score / 2;
  return acc;
}, {});

console.log(avg);

// 🧩 Task 4: Merge Two Arrays of Objects

let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

let ages = [
  { id: 1, age: 25 },
  { id: 2, age: 30 },
];

// ✅ Goal: Merge users and ages by id, to produce:

// output
// [
//   { id: 1, name: "Alice", age: 25 },
//   { id: 2, name: "Bob", age: 30 }
// ]

let newArr = [];
users.forEach((user) => {
  let ageObj = ages.find((age) => age.id === user.id);
  console.log(ageObj);

  newArr = [...newArr, { ...user, ...ageObj }];
});

console.log(newArr);
