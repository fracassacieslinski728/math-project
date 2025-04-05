function calculateArea(rectangle) {
  return rectangle.length * rectangle.width;
}

function displayRectangle(rectangle) {
  console.log(`The area of the rectangle is: ${calculateArea(rectangle)} square units`);
}
