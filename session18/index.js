// console.log("Hello World!");

//[SECTION] JS Functions
// Performs specific tasks and eliminate repetitive codes

// function functionName(parameter) {
//    console.log("function \"functionName\" was called");
//}

function sayHello() {
  console.log("Hello, San Fernando City, Pampanga!");
}

// Invocation/Invoke or Function Calling
sayHello();

function showAlert() {
  alert("Hello World!");
}

let num1 = 0,
  num2 = 0;

function startCalc() {
  let userInput = parseInt(
    prompt(
      "Please select an action: \n[1] Input Numbers \n[2] Sum\n[3] Difference\n[4] Product\n[5] Quotient\n [6] Reset",
    ),
  );
  console.log(userInput);

  switch (userInput) {
    case 1:
      enterNumbers();
      break;
    case 2:
      sum();
      break;
    case 3:
      difference();
      break;
    case 4:
      product();
      break;
    case 5:
      quotient();
      break;
    case 6:
      reset();
      break;
  }

  startCalc();
}

function enterNumbers() {
  num1 = parseInt(prompt("Enter the first number: "));
  num2 = parseInt(prompt("Enter the second number: "));
  num1 = isNaN(num1) ? 0 : num1;
  num2 = isNaN(num2) ? 0 : num2;
}

function sum() {
  alert("The sum of " + num1 + " and " + num2 + " is: " + (num1 + num2));
}
function difference() {
  alert("The difference of " + num1 + " and " + num2 + " is: " + (num1 - num2));
}
function product() {
  alert("The product of " + num1 + " and " + num2 + " is: " + num1 * num2);
}
function quotient() {
  alert("The sum of " + num1 + " and " + num2 + " is: " + num1 / num2);
}

function reset() {
  alert("Reset both values to 0");
  num1 = 0;
  num2 = 0;
}

startCalc();
