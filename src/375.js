function calculateGCD(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function findMedian(numbers) {
  const sortedNumbers = numbers.sort((a, b) => a - b);
  if (sortedNumbers.length % 2 === 1) {
    return sortedNumbers[(sortedNumbers.length - 1) / 2];
  } else {
    return (sortedNumbers[sortedNumbers.length / 2] + sortedNumbers[Math.floor(sortedNumbers.length / 2)]) / 2;
  }
}

function findSum(numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum;
}
