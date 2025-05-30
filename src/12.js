// Calculate the factorial of a number using recursion
function factorial(n) {
  if (n <= 1) {
    return n;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5)); // Output: 120
