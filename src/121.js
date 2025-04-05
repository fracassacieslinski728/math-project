function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

// Example usage
console.log(add(5, 3)); // Output: 8
console.log(subtract(10, 2)); // Output: 8
console.log(multiply(4, 6)); // Output: 24
