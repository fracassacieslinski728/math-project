function calculateSum(numbers) {
    let sum = 0;
    numbers.forEach(num => {
        if (!isNaN(Number(num))) {
            sum += Number(num);
        }
    });
    return sum;
}
