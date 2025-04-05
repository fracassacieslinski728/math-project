let input = prompt("Enter your input:");

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
  if (b === 0) {
    alert("You cannot divide by zero!");
    return null;
  }
  return a / b;
}

console.log(`Your input is: ${input}`);
