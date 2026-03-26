// 1.
function getCircleArea(radius) {
  return Math.PI * radius ** 2;
}

let circleArea = getCircleArea(
  parseFloat(prompt("Enter the radius of the circle: ")),
);
console.log(`Area of the circle: ${circleArea}`);

// 2.
function getAverage(num1, num2, num3, num4) {
  return (num1 + num2 + num3 + num4) / 4;
}

let averageVar = getAverage(
  parseFloat(prompt("Enter the first number: ")),
  parseFloat(prompt("Enter the second number: ")),
  parseFloat(prompt("Enter the third number: ")),
  parseFloat(prompt("Enter the fourth number: ")),
);

console.log(`Average of the four numbers: ${averageVar}`);

// 3.
function checkIfPassed(score, totalScore) {
  let percentage = score / totalScore;
  return percentage > 0.75;
}

let isPassingScore = checkIfPassed(
  parseFloat(prompt("Enter the score: ")),
  parseFloat(prompt("Enter the total score: ")),
);
console.log(`Is passing: ${isPassingScore}`);
