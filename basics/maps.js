
//Add values to the map

let map = new Map()
map.set("Name","Dhruv")
map.set("Surname","Burada")
console.log(map);

//size of map

console.log("Size of map: ",map.size)

//iterating over map

for(let val of map)
{
    console.log(val);
}

//Converting array to map

//array should be in 2D

let array = [["Name"],["surname"]] 
let mapfromarray = new Map(array)

console.log(mapfromarray);
