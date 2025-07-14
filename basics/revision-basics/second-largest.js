let arr = [5, 6, 9, 7, 2, 1, 2, 3, 5];

let largest = -Infinity;
let secondLargest;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    secondLargest = largest;
    largest = arr[i];
  }

  if (arr[i] > secondLargest && arr[i] !== largest) {
    secondLargest = arr[i];
  }
}

console.log(
  `Largest number is ${largest} and second largest is ${secondLargest}`
);
