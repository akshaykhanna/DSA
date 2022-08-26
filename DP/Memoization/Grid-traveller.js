function gridTraveller(m, n, memo = {}) {
  if (m === 0 || n === 0) return 0;
  if (m === 1 || n === 1) return 1;
  const key = m + "-" + n;
  if (key in memo) return memo[key];
  memo[key] = gridTraveller(m - 1, n, memo) + gridTraveller(m, n - 1, memo);
  return memo[key];
}

console.log(gridTraveller(0, 0)); // Output: 0
console.log(gridTraveller(0, 1)); // Output: 0
console.log(gridTraveller(8, 0)); // Output: 0
console.log(gridTraveller(1, 1)); // Output: 1
console.log(gridTraveller(2, 3)); // Output: 3
console.log(gridTraveller(3, 2)); // Output: 3
console.log(gridTraveller(3, 3)); // Output: 6
// this will take too much time without dp but with it, it works fast
console.log(gridTraveller(18, 18)); // Output: 2333606220
