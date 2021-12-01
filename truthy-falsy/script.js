
// TRUTHY & FALSY VALUES

// 5 falsy values: 0, '' (empty string), undefined, NaN, null
// everything else will return as true

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Therese")); //not a falsy value
console.log(Boolean({})); //not a falsy value


const money = 0;
if (money) {
    console.log("Yay, you have money!");
} else {
    console.log("You have no money...");
}
// js will return this as false, beacause the value is 0, if we change it to e.g. 100 it will return true

let height;
if (height) {
    console.log("Height is defined");
} else {
    console.log("Height undefined");
}



// EQUALITY OPERATORS

// === strict comparison
const age = 18;
if (age === 18) console.log("age is equal to 18");
// both sides need to be exactly the same for it to return true
// === strict comparison, does not perform type coersion

// == loose equality AVOID!!
// not strict comparison, does perform type coersion

// '18' == 18 would be true
// '18' === 18 would be false


const number = prompt("Type a number");
//console.log(number); // type is not number

if (number === 25) {
    console.log("Cool");
} else if (number === 5) {
    console.log("Also cool");
} else {
    console.log("Not cool");
}
// not working bc we are using a strict comparison, and the prompt does not return a number type


// '!==' strict not, '!=' not strict not
if (number !== 25) console.log("Also not cool");