let nums = [1, 2, 2, 3, 1, 3, 3];
let map = new Map();

for (let num of nums) {
  if (!map.has(num)) {
    map.set(num, 1);
  } else {
    map.set(num, map.get(num) + 1);
  }
}

console.log(map);
