let duplicates = [1,2,3,4,1,21,4,3,2,1,5,43]

let set = new Set(duplicates);

console.log(set)

console.log(set.size)


//Union of two sets

let a = [1,2,3,4,5,2,1,3]
let b = [9,6,42,1,2,3]

let union = [...a,...b]

const unionset = new Set(union)

console.log(unionset)

//InterSection of the set


a = [1,2,3,4]
b = [2,3]

let InterSection = a.filter((number) => {if(b.includes(number)) return number})
console.log(InterSection);


//Difference of the set

function differ (number)
{
    if(a.includes(number) == true && b.includes(number)==flase)
    {
        return true;
    }

    return false;
}
let differs = a.filter((number) => {if(a.includes(number) == true && b.includes(number)==flase) { return true;}} )   

console.log(differs)