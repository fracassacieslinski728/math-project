function sum(numbers) {
  let result = 0;
  numbers.forEach(number => {
    if (typeof number === 'number') {
      result += number;
    }
  });
  return result;
}

console.log(sum([1, 2, 3])); // Output: 6
