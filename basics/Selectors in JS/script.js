//Select element using id 

// grandparent = document.getElementById('grand-parent-id');
// grandparent.style.backgroundColor = "red";

//select all parent and convert them into grey

parent = document.getElementsByClassName("parent"); //returns HTML collection
parent = Array.from(parent); //convertig HTML collection into array
//for each element changing color to grey
parent.forEach(
    changeColor,
);

function changeColor(element)
{
    element.style.backgroundColor = "grey";
}

//If you want to select element via css selector

grandparent = document.querySelector('#grand-parent-id'); //select using id 
console.log(grandparent);
//orr 
grandparent = document.querySelector('.grand-parent');  //select using class name will only select the first one  
grandparent.style.backgroundColor = "marronette"; 


//If you want to select all class elements using css selector

parent = document.querySelectorAll('.parent');
console.log(parent) 
parent.forEach(changeColor)

parent1 = parent[0];
children = parent[0].children;
children[1].style.backgroundColor="black"

