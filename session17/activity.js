let input = parseInt(prompt("Enter a number: "));

for (let i = 1; i <= input; i++) {
  console.log(
    "COUNT: " +
      i +
      (!(i % 3) || !(i % 5) ? " -" : "") +
      (!(i % 3) ? " COCO" : "") +
      (!(i % 5) ? " MELON" : ""),
  );
}
