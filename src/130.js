// Initialize the number of iterations and the maximum value to compare against
let numIterations = 10;
let maxValue = 10;

// Function to check if a specific number is prime or not
function isPrime(number) {
    for (let i = 2, s = Math.sqrt(maxValue); i <= s; i++) {
        if (number % i === 0) return false;
    }
    return true;
}

// Generate random numbers between the given range and check if they are prime or not
while (numIterations--) {
    let randomNumber = Math.floor(Math.random() * (maxValue + 1)) - maxValue + 1;

    if (isPrime(randomNumber)) {
        console.log(`Found a prime number: ${randomNumber}`);
    }
}

console.log("The project is completed!");
