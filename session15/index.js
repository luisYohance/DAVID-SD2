/*

*/

//[SECTION] Arithmetic Operators

let num1 = 10;
let num2 = 2;
let sum = num1 + num2;
console.log("SUM: " + sum);
let diff = num1 - num2;
console.log("DIFFERENCE: " + diff);
let prod = num1 * num2;
console.log("PRODUCT: " + prod);
let quot = num1 / num2;
console.log("QUOTIENT: " + quot);

// [SECTION] Assignment Operators
let num3 = 20;
let num4 = 8;

num3 += num3;
console.log("ASSIGNMENT OPERATOR: " + num3);

let days = 5;
console.log("ORIGINAL VALUE: " + days);

days++;
console.log("DAYS POST-INCREMENT-1: " + days);
days++;
console.log("DAYS POST-INCREMENT-2: " + days);
days++;
console.log("DAYS POST-INCREMENT-3: " + days);

let months = 4;
console.log("ORIGINAL VALUE: " + months);

months++;
console.log("POST-INCREMENT-1: " + months);

months++;
console.log("POST-INCREMENT-2: " + months);

// [SECTION] TYPE COMPARISON OPERATORS

// EQUALITY OPERATOR (==)

let num6 = 10;
let num7 = 12;
let num8 = "10";

console.log("Equality operator: " + (num6 == num7));
console.log("Equality operator: " + (num6 == num8));

// STRICT EQUALITY OPERATOR (===)

console.log("Strict Equality operator: " + (num6 === num7));
console.log("Strict Equality operator: " + (num6 === num8));

//Not Equal
console.log("Not Equal: " + (num6 == num7));
console.log("Not Equal: " + (num6 == num8));

// [SECTION] Relational Operator

let num9 = 25;
let num10 = 30;

console.log("GT: ", num9 > num10);
console.log("LT: ", num9 < num10);
console.log("GTE: ", num9 >= num10);
console.log("LTE: ", num9 <= num10);

// [SECTION] Logical Operators

let isOfLegalAge = false,
  isMarried = false,
  isVoter = true;

console.log("AND: ", isOfLegalAge && isMarried && isVoter);
console.log("OR: ", isOfLegalAge || isMarried || isVoter);
console.log("NOT: ", !isOfLegalAge);

// [SECTION] Bitwise Operators

// [SECTION] Large Scale Data Types
// Arrays
// > can store multiple elements/values
// > values must be the same data type

let names = ["John", "Jane", "Joe"];
let array = [10, 20, 30];

console.log(array);
console.log(names);

// Objects

let user = {
  name: "Kelvin Valerio",
  gradeLevel: 13,
  isEnrolled: true,
};

console.log(user);

// [SECTION] Alert vs Prompt

let name = prompt("What is your name?");
alert("Hello " + name);

let input1 = parseInt(prompt("Enter a number: "));
let input2 = parseInt(prompt("Enter a number: "));

let sum3 = input1 + input2;
console.log("SUM: " + sum3);
