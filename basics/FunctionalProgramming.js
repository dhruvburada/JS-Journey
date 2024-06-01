
arr=[12,21,21321,321,31]

function print_index_value(element,index)
{
    console.log(element,index)
}
arr.forEach(print_index_value);

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]


let setofcountries = new Set(countries);

console.log(setofcountries)
console.log(setofcountries.size)
setofcountries.delete('Canada')

console.log(setofcountries)

emptyset = new Set();

emptyset.add("value1");

console.log(emptyset)

let user = {
    firstName:"Dhruv",
    lastName:"Burada",
    age:18


}


console.table(user)
const county = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  console.table(county)

console


let array = [1,2,3,4]


console.log(array.map((element) => {return element+1}))