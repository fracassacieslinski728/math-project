const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numbers = [1, 2, 3, 4, 5];
const randomNumber = getRandomInt(0, numbers.length - 1);
console.log(numbers[randomNumber]);
