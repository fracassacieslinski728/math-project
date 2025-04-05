function sumOfSquares(numbers) {
    return numbers.reduce((sum, num) => {
        return sum + num * num;
    }, 0);
}

const result = sumOfSquares([1, 2, 3]);
console.log(result); // Output: 14
