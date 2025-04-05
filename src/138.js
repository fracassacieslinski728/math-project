// This is an example of a simple JavaScript function to calculate the factorial of a number.
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}

// Example usage
console.log(factorial(5)); // Output: 120
