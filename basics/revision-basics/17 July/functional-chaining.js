function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(sum(1)(2)(3));

function multiply(a) {
  let product = a;

  function inner(b) {
    if (b === undefined) return product;
    product *= b;
    return inner;
  }

  return inner;
}

console.log(multiply(2)(3)(4)()); // 24
console.log(multiply(5)(2)(2)(1)()); // 20
console.log(multiply(10)()); // 10

function calc(start) {
  return {
    val: start,
    add(a) {
      this.val += a;
      return this;
    },
    sub(a) {
      this.val -= a;
      return this;
    },
    multiply(a) {
      this.val *= a;
      return this;
    },
    result() {
      return this.val;
    },
  };
}

console.log(calc(10).add(2).sub(3).result());
