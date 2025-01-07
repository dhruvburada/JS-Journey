
let length = 5 
const value=10
let array = new Array()

while(length>0)
{
    array.push(value)
    length=length-1;


}

console.log(array);
console.log(array.indexOf(11));

newArray = [...array,1,23]

console.log(newArray)