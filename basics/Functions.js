

let a =((user) =>{
    return user;
})("sir")

console.log(a)

let sum = (num1=1,num2=2) =>
{
    return num1+num2;
}

console.log(sum(3,4))

//Returning Function

let sumOfThree = (a) => {
    return (b) => {
        return (c) =>
        {
            return a+b+c;
        }
        return b;
    }
    return a;
}


console.log(sumOfThree(1)(2)(3))