function calculateAverage(numbers) {
  if (numbers.length === 0) {
    throw new Error('No numbers to average');
  }

  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  const average = sum / numbers.length;
  return average;
}

const result = calculateAverage([10, 20, 30]);
console.log(result);
