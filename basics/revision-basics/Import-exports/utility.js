export function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

export { mul }; // or you can export something like this

export default function () {
  return "hello from utility";
}

// export default function()
// {
//     return "nothing"
// } //will throw an error  Identifier '.default' has already been declared

//export default -- this will be exported from the file default means you can use it without {} and you can import it with any name
// there can be only one defauult export in javascript
