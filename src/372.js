// Example of a simple calculator written in JavaScript
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 !== 0) {
        return num1 / num2;
    } else {
        throw new Error("Divide by zero");
    }
}

// Example usage:
console.log("Addition: " + add(5, 3));
console.log("Subtraction: " + subtract(5, 3));
console.log("Multiplication: " + multiply(4, 2));
try {
    console.log("Division with 0 as divisor: " + divide(10, 0));
} catch (error) {
    console.log(error.message);
}
