function fibonacciNo(n) {
  const table = new Array(n+1).fill(0);
  table[0] = 0;
  table[1] = 1;
  for(let i=2; i<=n; i++){
    table[i] = table[i-1] + table[i-2];
  }
  return table[n];
}

console.log(fibonacciNo(2));
console.log(fibonacciNo(6));
console.log(fibonacciNo(1));
console.log(fibonacciNo(0));
console.log(fibonacciNo(7));
console.log(fibonacciNo(8));
console.log(fibonacciNo(50));
