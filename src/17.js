// Function to add two numbers
function addNumbers(a, b) {
  return a + b;
}

// Function to subtract two numbers
function subtractNumbers(a, b) {
  return a - b;
}

// Function to multiply two numbers
function multiplyNumbers(a, b) {
  return a * b;
}

// Function to divide two numbers (returns NaN for division by zero)
function divideNumbers(a, b) {
  if (b === 0) {
    return NaN;
  }
  return a / b;
}
