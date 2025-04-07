// Problem: Write a JavaScript program to find the maximum element in an array of numbers.
function findMax(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

// Test the function
const testNumbers = [3, 5, 7, 9, 2];
console.log(findMax(testNumbers)); // Output: 9
