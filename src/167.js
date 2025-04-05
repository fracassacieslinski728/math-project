function calculateSum(numbers) {
  let sum = 0;
  numbers.forEach(number => {
    sum += number;
  });
  return sum;
}

let testNumbers = [1, 2, 3, 4];
console.log(calculateSum(testNumbers));
