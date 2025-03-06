function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numbers = Array(5).fill().map(() => getRandomNumber(0, 10));
console.log(numbers);
