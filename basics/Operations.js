let a = 1 
let b = 2


console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)



//Make value negative


a = -a

console.log("Negatie of a : "+a)

//String Concatination  Anything Added with String will be treated as string

let firstName = "Dhruv"
let lastName = " Burada"

export default firstName

console.log(firstName+lastName)
console.log(firstName-lastName)

//Concatination with the numbers

let c = a+lastName
console.log(c) //a is treated as string
console.log(typeof c)


// Number + null value = Number

let something = 5;
let nothing = null


console.log(something+nothing)


//String + null value (will be treated as string) = String+null  

console.log(firstName+nothing)

//Boolean + null == Boolean 

let bol = true
console.log(bol+null)

//Something + or - undefined == NaN (except String)

let undef;
console.log(1+undef)
console.log(undef+firstName)
console.log(NaN+undef)


console.log(true+false);
console.log(false-true)
console.log(undef - true)
console.log(NaN - true)
