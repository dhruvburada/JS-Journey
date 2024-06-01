
function arithmatic(name,...args)
{
    return name(...args)
}

function add(...args)

{
    let sum=0
    for(var val of args)
    {
        sum+=val;
    }
    return sum;
}

function substract(...args)
{
    let sum=0;
    for(var val of args)
    {
        sum-=val;
    }
    return sum;
}

a = arithmatic(substract,1,2,-10);

console.log(a)