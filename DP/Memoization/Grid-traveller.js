function gridTraveller(m, n, memo = {}) {
  if (m + n <= 0) return 0;
  if (m === 1 || n === 1) return 1;
  const key = m + "-" + n;
  if (key in memo) return memo[key];
  memo[key] = gridTraveller(m - 1, n, memo) + gridTraveller(m, n - 1, memo);
  return memo[key];
}

console.log(gridTraveller(1, 1));
console.log(gridTraveller(2, 3));
console.log(gridTraveller(3, 2));
console.log(gridTraveller(3, 3));
console.log(gridTraveller(18, 18)); // this will take too much time
