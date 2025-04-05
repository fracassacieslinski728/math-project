// Create an array of objects with properties {x: 1, y: 2}
const data = [
  { x: 1, y: 2 }
];

// Function to square each element in the array and return a new array
function squareArray(array) {
  const squaredArray = array.map(element => element * element);
  return squaredArray;
}

// Square the array of objects
const squaredData = squareArray(data);

// Print the squared data
console.log(squaredData);
