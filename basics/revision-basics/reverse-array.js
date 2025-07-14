let arr = [1, 2, 3, 4, 5];

let low = 0;
let high = arr.length - 1;
let temp;

while (low <= high) {
  temp = arr[low];
  arr[low] = arr[high];
  arr[high] = temp;
  low++;
  high--;
}

console.log(arr);
