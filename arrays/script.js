
//ARRAYS

const dog1 = "Tore";
const dog2 = "Clementine";
const dog3 = "Doris";

// bad practice
// instead, we want to store it in one place
// array - a big container for storing data, when we have more tha  one value

//Array of strings
// const dogs = ["Tore", "Clementine", "Doris"];
// console.log(dogs);

// const years = [1985, 1990, 1994];
// console.log(years);
//most common way of creating an array

//const years = new Array(1994, 1985, 2015, 2020);
//different way of creating an array, not as common though

const dogs = ["Tore", "Clementine", "Doris"];
console.log(dogs);

// arrays hold elements

console.log(dogs[0]);
// IMPORTANT arrays ALAYS start at 0

// check how many elements an array holds
console.log(dogs.length);

// check the last element in an array
console.log(dogs[dogs.length - 1]);

// can mutate arrays
dogs[0] = "Trasan";
console.log(dogs);

