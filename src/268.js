// Random number generator
function getRandomNumber(minValue, maxValue) {
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}

// Check if a number is even or odd
function isEvenOrOdd(number) {
  return number % 2 === 0 ? "even" : "odd";
}

// Function to convert decimal numbers to binary strings
function decimalToBinary(number, radix = 2) {
  let binaryString = "";
  while (number > 0) {
    binaryString = String(number % radix) + binaryString;
    number = Math.floor(number / radix);
  }
  return binaryString || "0";
}

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Function to find the maximum and minimum values
function findMaxAndMin(values) {
  let maxValues = [];
  let minValues = [];

  for (let value of values) {
    if (!maxValues.length || value > maxValues[maxValues.length - 1]) maxValues.push(value);
    if (!minValues.length || value < minValues[minValues.length - 1]) minValues.push(value);
  }

  return { max: maxValues, min: minValues };
}

// Function to perform an operation
function performOperation(operationType, values) {
  switch (operationType) {
    case "sum":
      return sum(values);
    case "average":
      return average(values);
    default:
      throw new Error("Unsupported operation type");
  }
}

// Helper function to calculate the sum of numbers in an array
function sum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}
