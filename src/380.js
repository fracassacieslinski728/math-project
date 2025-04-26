function sumNumbers(...numbers) {
    let result = 0;
    numbers.forEach(number => {
        if (typeof number === "number") {
            result += number;
        }
    });
    return result;
}

console.log(sumNumbers(1, 2, 3, 4)); // Output: 10
