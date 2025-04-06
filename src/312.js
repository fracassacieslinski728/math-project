function calculateArea(rectangle) {
  const width = rectangle.width;
  const height = rectangle.height;
  
  if (width > height) {
    let area = width * height;
    return Math.round(area);
  } else {
    let area = height * width;
    return Math.round(area);
  }
}

// Example usage:
const rect1 = { width: 5, height: 3 };
console.log(`The area of rectangle with dimensions ${rect1.width} x ${rect1.height} is ${calculateArea(rect1)} square units.`);

const rect2 = { width: 8, height: 6 };
console.log(`The area of rectangle with dimensions ${rect2.width} x ${rect2.height} is ${calculateArea(rect2)} square units.`);
