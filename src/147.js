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
  if (y === 0) throw new Error("Cannot divide by zero");
  return x / y;
}

console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: -2
console.log(multiply(5, 3)); // Output: 15
console.log(divide(5, 3)); // Output: 1.6666666666666667
