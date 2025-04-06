// Example 1: Basic Math Operations
console.log(5 + 3); // Output: 8
console.log(2 - 4); // Output: -2

// Example 2: Using Math Object
const math = { add: (a, b) => a + b, subtract: (a, b) => a - b };
console.log(math.add(5, 3)); // Output: 8
console.log(math.subtract(2, 4)); // Output: -2

// Example 3: Using Math Functions
const mathFunctions = {
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
    modulo: (a, b) => a % b,
    sqrt: (x) => Math.sqrt(x)
};

console.log(math.multiply(5, 3)); // Output: 15
console.log(math.divide(20, 4)); // Output: 5

// Example 4: Using Math in Different Contexts
const mathContext = {
    add: function(a, b) { return a + b; },
    subtract: function(a, b) { return a - b; }
};

console.log(math.add(5, 3)); // Output: 8
console.log(math.subtract(2, 4)); // Output: -2

// Example 5: Using Math Objects and Function overloads (Example)
const mathOverload = {
    multiply: function(a, b) { return a * b; },
    divide: function(a, b) { return a / b; }
};

console.log(math.multiply(5, 3)); // Output: 15
console.log(math.divide(20, 4)); // Output: 5

// Example 6: Using Math in Different Functions
const mathFunctionsInDifferentFns = {
    multiply: function(a, b) { return a * b; },
    square: function(x) { return x * x; }
};

console.log(math.multiply(5, 3)); // Output: 15
console.log(math.square(2)); // Output: 4

// Example 7: Using Math in Different Functions (Example)
const mathFunctionsInDifferentFns = {
    multiply: function(a, b) { return a * b; },
    square: function(x) { return x * x; }
};

console.log(Math.sqrt(16)); // Output: 4
