console.log("Hello World");

// WHILE DO LOOP
let count = 0;

while (count <= 5) {
  console.log("Count: " + count++);
}

// DO-WHILE LOOP
let score = 0;

do {
  console.log("DO-WHILE LOOP: " + score++);
} while (score <= 5);

//FOR LOOP
for (let numbers = 0; numbers <= 5; numbers++) {
  console.log("FOR LOOP: " + numbers);
}

for (let i = 0; i < 10; i++) {
  switch (i % 3) {
    case 0:
      console.log("COUNT: " + i + "- Divisible by 3");
      break;
    default:
      console.log("COUNT: " + i);
      break;
  }
}

for (let count = 0; count < 20; count++) {
  if (count == 15) {
    console.log("Hello it is me: " + count);
    continue;
  }

  console.log("COUNT: " + count);
}

let isRunning = true;
let isLocked = false;
let isLoggedIn = false;
let accountLocked = 0;
let password = "hello123";
while (isRunning) {
  if (accountLocked != 3) {
    let input = prompt("Please enter your password.");
    if (input != password) {
      console.log("Incorrect password. Chance: ", 2 - accountLocked++);
    } else {
      isLoggedIn = true;
      alert("Welcome user!");
    }
  } else {
    alert("Account is locked!");
    isRunning = false;
  }
}

// FOR LOOP W/ Input
let input = parseInt(prompt("Please enter a number."));
for (let i = 0; i < input; i++) {
  console.log(i);
}
