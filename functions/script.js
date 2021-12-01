
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