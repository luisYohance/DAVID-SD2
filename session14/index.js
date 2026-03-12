// This is how we print an output using JS
// console.log(StringContent or VariableName);

console.log("Hello World!");

// <- Use this for comments

/*
    This is a
    multi-line
    comment
*/

// [SECTION] Variable
// Acts as a storage for data which can be modified afterwards except for constants

// int - whole number | float, double - decimal
// float - 7 decimal places | double - 15 decimal places
// str - alpha numeric enclose in single or double quote
// boolean - true or false, 1 or 0

// [SECTION] DATA TYPE

// Numeric Data Types

/*
    let [variableName]; -> no initialized value
    let [variableName] = [value]; -> with initialized value
*/

let age;
let height = 100;
let gwa = 99.75;
console.log(height);

//JS is a loose type programming language

console.log(height);

// Boolean Data Types
let isMarried = false;
let isRegistered = true;

console.log(isMarried);
console.log(isRegistered);

console.log(typeof isRegistered);

// Concatenation
let province = "Pampanga";
console.log("I live in " + province);

//Type-Coercion
// Concatenation of a string and a number or other data types will all be converted to a string
console.log("My overall grade is: " + gwa);
