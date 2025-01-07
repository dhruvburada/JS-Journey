//String conversion to Boolean

//a =  ""                            //Empty String will be casted to false
a = "Has something"                 //String with values will be casted to true 

let bol = Boolean(a)

console.log(bol)

if(a)
{
    console.log("Yes")
}
else
{
    console.log("No")
}



//Number conversion to Boolean

let num=0;                                     //If number doesnt contains any value other then 0 results in true
if(num)
{
    console.log("Has value")
}
else
{
    console.log("Doesnt have value")
}


//NaN conversion to Boolean

let c = NaN
let b = Boolean(c);

console.log(b);

//NaN conversion to Number

console.log(Number(c))    //NaN is already a number

console.log(typeof c)