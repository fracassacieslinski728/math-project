// Example of a simple JavaScript program that performs basic arithmetic operations:

// Add 2 to 3
const sum = 2 + 3;
console.log(sum); // Output: 5

// Subtract 4 from 6
const difference = 6 - 4;
console.log(difference); // Output: 2

// Multiply 10 by 5
const product = 10 * 5;
console.log(product); // Output: 50

// Divide 8 by 4
const quotient = 8 / 4;
console.log(quotient); // Output: 2

// Example of a function to calculate the factorial of a number:
function factorial(n) {
    if (n < 0) return "Factorial is not defined for negative numbers.";
    else if (n === 0) return 1;
    else return n * factorial(n - 1);
}

// Example usage:
console.log(factorial(5)); // Output: 120
