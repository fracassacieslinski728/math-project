function calculateSum(numbers) {
  let sum = 0;
  
  numbers.forEach(num => {
    if (typeof num === 'number') {
      sum += num;
    }
  });

  return sum;
}

let myNumbers = [1, 2, 3, 4, 5];
console.log(calculateSum(myNumbers));
