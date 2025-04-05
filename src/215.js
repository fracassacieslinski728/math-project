// Problem statement: Write a JavaScript function that takes two arrays of integers and returns their product.
function multiplyArrays(arr1, arr2) {
  let result = 0;
  
  // Multiply corresponding elements from both arrays
  for (let i = 0; i < arr1.length; i++) {
    result += arr1[i] * arr2[i];
  }
  
  return result;
}

// Example usage:
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

console.log(multiplyArrays(array1, array2)); // Output: 36
