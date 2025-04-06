function calculateSum(a, b) {
  return a + b;
}

function findGreatestNumber(numbers) {
  let greatest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > greatest) {
      greatest = numbers[i];
    }
  }
  return greatest;
}
