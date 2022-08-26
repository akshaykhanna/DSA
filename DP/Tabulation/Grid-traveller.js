function gridTraveller(m, n) {
  if (m === 0 || n === 0) return 0;
  const table = new Array(m + 1).fill(0).map((p) => new Array(n + 1).fill(0));
  table[1][1] = 1;
  for (let r = 1; r <= m; r++) {
    for (let c = 1; c <= n; c++) {
      table[r][c] = table[r][c] + table[r][c - 1] + table[r - 1][c];
    }
  }
  return table[m][n];
}

console.log(gridTraveller(3, 3)); // Output: 6
console.log(gridTraveller(0, 0)); // Output: 0
console.log(gridTraveller(0, 1)); // Output: 0
console.log(gridTraveller(8, 0)); // Output: 0
console.log(gridTraveller(1, 1)); // Output: 1
console.log(gridTraveller(2, 3)); // Output: 3
console.log(gridTraveller(3, 2)); // Output: 3
console.log(gridTraveller(18, 18)); // Output: 2333606220

//  0 0 0 0
//  0 1 1 1
//  0 1 2 3
//  0 1 3 6

//  0
//  0
//  0

// 0 0 0
// 0 1 1
// 0 1 2
// 0 1 3

// 0 0 0 0
// 0 1 1 1
// 0 1 2 3
