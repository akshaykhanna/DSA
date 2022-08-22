function fibonacciNo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fibonacciNo(n - 1, memo) + fibonacciNo(n - 2, memo);
  return memo[n];
}

console.log(fibonacciNo(2));
console.log(fibonacciNo(6));
console.log(fibonacciNo(7));
console.log(fibonacciNo(8));
console.log(fibonacciNo(50));
