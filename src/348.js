function addNumbers(a, b) {
  return a + b;
}

function calculateBMI(height, weight) {
  const bmi = weight / (height * height);
  if (bmi < 18.5) {
    console.log("Underweight");
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("Normal");
  } else {
    console.log("Overweight");
  }
}

function sortStrings(str1, str2) {
  return str1 > str2 ? "String1 is greater" : "String2 is greater";
}
