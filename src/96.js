function squareRoot(num) {
  const root = Math.sqrt(num);
  if (root < 0) throw new Error('Square root of negative number is not defined.');
  console.log(root);
}

squareRoot(4); // Output: 2.0
