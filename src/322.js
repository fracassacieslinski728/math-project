function addNumbers(a, b) {
  const result = a + b;
  return result;
}

function subtractNumbers(a, b) {
  const result = a - b;
  return result;
}

function multiplyNumbers(a, b) {
  const result = a * b;
  return result;
}

function divideNumbers(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero.");
  }
  const result = a / b;
  return result;
}
