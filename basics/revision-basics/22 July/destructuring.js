const student = {
  fullName: "Dhruv Burada",
  age: 21,
  scores: {
    math: 95,
    science: 88,
  },
  location: "Rajkot",
};

const {
  fullName: name,
  age,
  scores: { math, science },
  college = "Not provided",
} = student;

console.log(
  `${name}, age ${age}, scored ${math} in Math and ${science} in Science. College: ${college}`
);
