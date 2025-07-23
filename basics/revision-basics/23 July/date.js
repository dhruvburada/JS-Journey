const date = new Date();

//current date & time
console.log(date); //2025-07-23T06:46:09.082Z //ISO Format

console.log(date.toString()); //Wed Jul 23 2025 12:16:09 GMT+0530 (India Standard Time)
console.log(date.toUTCString()); //Wed, 23 Jul 2025 06:46:09 GMT
console.log(date.toISOString()); //2025-07-23T06:46:09.082Z
console.log(date.toDateString()); //Wed Jul 23 2025

//create own date

const birthday = new Date(2004, 8, 21, 10, 0, 12, 12); //month starts from 0
console.log(birthday);

console.log(birthday.getHours());
console.log(birthday.getMinutes());
console.log(birthday.getSeconds());
console.log(birthday.getMilliseconds());
