//A Closure is when a function remembers the variables from its parent scope even after the parent
//function has finished execution.


function counter() {
    let count = 0; // Local Variable (Enclosed in counter's scope)
    
    return function() {
        count++;
        console.log(count);
    };
}

const increment = counter();  // `counter()` runs and returns a function
increment(); // Output: 1
increment(); // Output: 2
increment(); // Output: 3


//usually after the functions execution the varaibles are destroyed but in this case the varaible count is not destroyed and it is still available to the inner function which is returned from the outer function.
// The returned function remembers count even after counter() has finished

