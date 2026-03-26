// [SECTION] Functions with Parameters

/*
SYNTAX:

function functionName(params1, params2, ...) {
    // code
}
*/

function greeting() {
  let userInput = prompt("Please enter your name.");
  console.log("Hello, " + userInput);
}

greeting();

// name -> is our parameters, parameters act as variable or storage for a specific function
function sayHello(name) {
  console.log(`Hello from function with parameter, ${name}`);
}

sayHello("John Doe");

function completeName(firstName, middleName, lastName) {
  console.log(`Hello, ${firstName} ${middleName} ${lastName}`);
}

completeName("John", "Doe", "Deo");
completeName("John", "Doe", "Deo", "Jr.");

// Function and return statement

function print() {
  console.log("Hello World!");
  return "Hello World!";
}

print();

let lastSum = 30;
let sum = function (num1, num2) {
  let total = num1 + num2;
  console.log("TOTAL: " + total);
  lastSum = total;
  return total;
};

if (lastSum >= 30) {
  console.log("passed!");
} else {
  console.log("failed!");
}

function checkRemarks() {
  if (lastSum >= 75) {
    console.log("Congrats, you passed!");
  } else {
    console.log("Congrats, you failed!");
  }
}

function registration(name, age) {
  if (age <= 17) {
    console.log("Sorry, you cannot register.");
  } else {
    console.log(`${name}, please proceed to the next step.`);
    return age;
  }
}

let value = registration("John Doe", 26);
console.log("AGE: " + value);

function checkAge(age) {
  if (age <= 17) {
    console.log("You cannot proceed!");
  } else if (age <= 30) {
    console.log("You can apply for basic account.");
  } else {
    console.log("You can apply for premium account.");
  }
}

checkAge(value);
