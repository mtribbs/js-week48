
//  FUNCTIONS
// a variable holds a value, a function holds a piece of code

// step 1 - define function

function logFunction() {
    console.log("This is a function!");
}

// step 2 - call for function to execute

// logFunction();
// logFunction();
// logFunction();


// functions - a machine, put stuff in and get a finished product back
// bake a chocolate cake
// 3 ingredients: butter, chocolate, eggs

//define function

function chocolateCake(butter, chocolate, eggs) {
    const cake = `A simple cake with ${butter} cup of butter, ${chocolate} cups of chocolate, and ${eggs} eggs.`
    return cake;
}

//call for function 
// 1 - butter, 2 - chocolate, 3 - eggs

chocolateCake (1, 2, 3); //does not give any output

//need to store the result of the function in a variable

const yummyCake = chocolateCake(1, 2, 3);
console.log(yummyCake);

// value of the parameters are called arguments


function calcAge(age1, age2) {
    const resAge = age1 + age2;
    return resAge;
}
console.log(calcAge(20, 10));




// FUNCTIONS DECLARATION AND EXPRESSION
// declaration - can be called before it's declared in the code
// expression - cannot be called before it's declared
// hoisting 

// FUNCTION DECLARATION 
// hoisting allows functions to be safely called in the code before they are declared
// execution context

// calling for function, logs the right output withput giving error
hoisted();

// declaring funtion
function hoisted() {
    console.log("This is hoisted");
}


// FUNCTION EXPRESSION

//console.log(notHoisted);

//notHoisted(); //cannot call before declaration

// function expression - function inside a variable
// declare
const notHoisted = function() {
    console.log("This is not hoisted");
}

notHoisted(); // now we can call for the function, after it is declared
