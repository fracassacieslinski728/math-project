function fibonacci(n) {
  if (n <= 1) return n;
  let a = 0, b = 1, c, count = 2;

  while (++count < n) {
    c = a + b;
    a = b;
    b = c;
  }

  return b;
}

console.log(fibonacci(10));
