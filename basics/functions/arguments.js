function addAll(...args) {
  //All normal functions have access to arguments object that is not actual array but array like datastrucutre that uses index to access elements
  sum = 0;
  for (i of arguments) {
    sum += i;
  }

  console.log(sum);
}

let num = [1, 2, 3, 4, 5, 6];
addAll(1, 2, 3, 4, 5, 6, 7);

console.log(...num);
