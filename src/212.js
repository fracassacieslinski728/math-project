// This is a simple calculator that can perform basic arithmetic operations.
function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  if (y === 0) {
    throw new Error("Cannot divide by zero.");
  }
  return x / y;
}

console.log(add(10, 5)); // Output: 15
console.log(subtract(10, 5)); // Output: 5

console.log(multiply(10, 5)); // Output: 50
console.log(divide(10, 5)); // Output: 2.0

// Example of using the functions:
let result = add(4, 3);
console.log(result); // Output: 7
