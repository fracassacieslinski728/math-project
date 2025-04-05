// Example JavaScript code to demonstrate basic usage of arrays and loops

const numbers = [10, 20, 30, 40, 50];

numbers.forEach((number) => {
  console.log(`Number: ${number}`);
});

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(`Sum of all numbers: ${sum}`);
