function sumEvenNumbers(arr) {
  let sum = 0;
  arr.forEach(number => {
    if (number % 2 === 0) {
      sum += number;
    }
  });
  return sum;
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5])); // Output: 6
