let fraction = 1 / 3;
console.log(fraction);

console.log(fraction.toFixed(1)); // how many points do you need after the decimal point

console.log(0.1 + 0.2); //casues bug because binary representaion of 0.1 and 0.2 is not exact its repeating patter like 01011001 so that is added

console.log((0.1 + 0.2).toFixed(1));

let someBigNum = 1000000; // difficult to read number

console.log(someBigNum.toLocaleString()); //uses the default locale of the user's browser or operating system.

console.log(someBigNum.toLocaleString("en-IN")); /// India based formating of the numbers
console.log(someBigNum.toLocaleString("en-US")); //US based formating of the numbers

console.log(someBigNum.toPrecision(1)); // how many precise number do you require ?? rest in the power

// max number
console.log(Number.MAX_VALUE);

//min number

console.log(Number.MIN_VALUE);

console.log(Math.abs(-4)); //convert negative number to possitive
console.log(Math.round(4.1)); // round of the number decimal 5<= -1 and 5> +1
console.log(Math.floor(4.6)); // round down
console.log(Math.ceil(4.2)); //round up
console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8));

//generate random number between 0 to 1

console.log(Math.random());

//generate random number from 1 to 10

for (let i = 0; i < 100; i++) {
  let random = Math.floor(Math.random() * 10) + 1;
}

//general formula to generate a number between given range

let min = 11;
let max = 110;

random = Math.floor(Math.random() * (max - min) + min);

console.log(random);
