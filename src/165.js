function addNumbers(a, b) {
  return a + b;
}

function subtractNumbers(a, b) {
  return a - b;
}

function multiplyNumbers(a, b) {
  return a * b;
}

function divideNumbers(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    throw new Error('Divisibility by zero is not allowed.');
  }
}
