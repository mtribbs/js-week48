// OBJECTS

//array []
// const thereseArray = ["Therese", "Ranégie-Ribbås", 2021-1992, "Gothenburg"];


//object {}
// const thereseObject = {
//     firstName: "Therese",
//     lastName: "Ranégie-Ribbås",
//     age: 2021 - 1992,
//     birthPlace: "Gothenburg",
// };

// objects have properties, can assign values to properties
// firstName - property name, "Therese" - value

// object - the order does not matter (it matters in an array)

// console.log(thereseObject);


// get a specific property
// option one: . notation !USE THIS ONE!
// cannot put expressions inside

// console.log(thereseObject.birthPlace);

// option two: [] notation
// console.log(thereseObject["lastName"]);
// can put expressions inside

// const key = "Name" 
// console.log(thereseObject["first" + key]);
// firstName



// const info = prompt(
//     "What information do you want to know about Therese? Choose between first name, last name, age or birthplace."
// )

//console.log(info); // not working gives e.g. age
//console.log(thereseObject.info); // not working, gives undefinied

// trying to access a prompt that does not exist

// console.log(thereseObject[info]); 
// can put expressions inside [] 
//js will replace the info with the value that it holds


// if (thereseObject[info]) {
//     console.log(thereseObject[info]);
// } else {
//     console.log("Not a valid input");
// }



const thereseObject = {
    firstName: "Therese",
    lastName: "Ranégie-Ribbås",
    age: 2021 - 1992,
    birthplace: "Gothenburg",
    cats: ["Otto", "Santana"]
};

console.log(thereseObject);

// add properties to object 
// . notation USE THIS
thereseObject.eyeColor = "Green";

thereseObject.husbandName = "Nicholas";

// [] notation
// thereseObject["height"] = 175;

console.log(thereseObject);


// Challenge!
// Write a sentence in a dynamic way. Do not hardcode any of the information

console.log(`Hi! My name is ${thereseObject.firstName} ${thereseObject.lastName} and I am ${thereseObject.age} years old. I live in ${thereseObject.birthplace} with my husband ${thereseObject.husbandName} and our ${thereseObject.cats.length} cats, ${thereseObject.cats[0]} and ${thereseObject.cats[1]}.`);

