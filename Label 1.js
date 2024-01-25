// 1.
console.log(
  "Recently I heard that you've achieved 95% marks in your exam.\nThis is brilliant!\nI wish you'll shine in your life!	Good luck with all the barriers(/\\) in your life."
);

// 2.
function doMath(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    console.error("Give an integer value");
    return;
  }
  console.log(`${num1} + ${num2} = ${num1 + num2}`);
  console.log(`${num1} - ${num2} = ${num1 - num2}`);
  console.log(`${num1} * ${num2} = ${num1 * num2}`);
  console.log(`${num1} / ${num2} = ${num1 / num2}`);
}

// 3.
function checkEven(num) {
  if (typeof num !== "number" || num < 0) {
    console.error("Give a valid number");
    return;
  }
  console.log(num % 2 === 0 ? "even" : "odd");
}

// 4.
function checkNumber(num) {
  num > 0 && console.log("Positive");
  num < 0 && console.log("Negative");
  num === 0 && console.log("Zero");
}

// 5.
function buyThings(amount) {
  amount < 5000 && console.log("Something");
  amount >= 5000 && amount < 10000 && console.log("Levis Bag");
  amount >= 10000 && amount <= 20000 && console.log("Gucci Bag");
  amount > 20000 && console.log("Gucci Bag\nGucci Belt");
}
