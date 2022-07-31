function fibonacciNo(n) {
  if (n <= 2) return 1;
  return fibonacciNo(n - 1) + fibonacciNo(n - 2);
}
console.log(fibonacciNo(2));
console.log(fibonacciNo(6));
console.log(fibonacciNo(7));
console.log(fibonacciNo(8));
console.log(fibonacciNo(50));
