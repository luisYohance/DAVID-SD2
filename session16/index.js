console.log("Hello World");

// [SECTION] Selection Control Structure

let age = 21;

if (age >= 18) {
  console.log("You're eligible for a driver's license");
}

let city = "manila";

if (city == "manila") {
  console.log("Welcome to the capital region");
} else {
  console.log("The selected area is not in Manila");
}

if (age >= 18 && city == "manila") {
  console.log("You can register for the event.");
} else if (age <= 18) {
  console.log("You are not eligible for the event.");
} else {
  console.log("All criteria not met");
}

let role = prompt("Please enter your role.");

if (role == "admin") {
  console.log("Welcome to UA Portal, Administrator!");
} else if (role == "student") {
  console.log("Welcome to UA Portal, Assumptionist!");
} else if (role == "teacher") {
  console.log("Welcome to UA Portal, Faculty!");
} else {
  alert("Please enter valid role.");
}

let day = 2;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  default:
    break;
}

switch (role) {
  case "admin":
    console.log("Welcome to UA Portal, Administrator!");
    break;
  case "teacher":
    console.log("Welcome to UA Portal, Faculty!");
    break;
  case "student":
    console.log("Welcome to UA Portal, Assumptionist!");
    break;
  default:
    alert("Please enter valid role.");
    break;
}
