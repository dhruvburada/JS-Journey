let string = "aabbccdeff";
let map = new Map();

for (let char of string) {
  if (!map.has(char)) {
    map.set(char, 1);
  } else {
    map.set(char, map.get(char) + 1);
  }
}

console.log(map);

for (let [key, value] of map) {
  if (value == 1) {
    console.log(key);
    break;
  }
}
