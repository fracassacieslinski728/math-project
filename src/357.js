function getRandomInt(max) {
  Math.random() * max;
}

let array = [];
for (let i = 0; i < 10; i++) {
  array.push(Math.floor(Math.random() * 50) + 1);
}
console.log(array);
