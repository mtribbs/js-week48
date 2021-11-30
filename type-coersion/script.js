
// TYPE COERSION 
// convert a value from one type to another
// e.g. string into number
// type coersion = when js does this automatically
// type conversion = when we have to do it manually

// two values of different types

//console.log("I am " + 28 + " years old."); // 28 is not shown as a number type
//console.log(28);

//console.log("23" - "10" - 3); // the minus operator does not trigger type coersion
//console.log("23" + "10" + 3); // js converts everything to a string, but does not calculate


// TYPE CONVERSION
//JS won't convert, we need to do it ourselves

//const year = "1992";
//console.log(year + 15); //js does a coersion but not the one we want, it converts 15 to a string

// convert 1992 to a number
// built-in function:

//console.log(year); // string
//console.log(Number(year)); // number
//console.log(Number(year) + 15); // number, and calculation


// Logical operators
//console.log("23" > "18"); //(true) type coersion - JS converts the strings into numbers


// Guess the output
let n = "1" + 1;
// 1 to string and then we add 1 (number)
// n = 11
n = n - 1;
// "11" -1 //"11" is converted to a number
console.log(n);
