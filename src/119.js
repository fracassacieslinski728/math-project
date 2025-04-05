// Define your function here
function sumOfSquares(...numbers) {
  let sum = 0;
  numbers.forEach(number => {
    sum += number * number;
  });
  return sum;
}

// Example usage:
console.log(sumOfSquares(1, 2, 3)); // Output: 14
