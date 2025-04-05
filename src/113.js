function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

console.log(isPalindrome("")); // Output: false

let numbers = [1234, 5678, 9012];
numbers.forEach(number => {
  if (isPalindrome(String(number))) {
    console.log(`The number ${number} is a palindrome.`);
  }
});
