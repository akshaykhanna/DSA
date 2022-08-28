function bestSum(targetSum, numbers) {
  // intialisze with default values
  const table = new Array(targetSum + 1).fill(null);
  // seed trivial result
  table[0] = [];
  // iterate
  for (let i = 0; i < targetSum; i++) {
    if (table[i]) {
      for (let n of numbers) {
        const nextInd = n + i;
        if (
          nextInd <= targetSum &&
          (!table[nextInd] || table[i].length + 1 < table[nextInd].length)
        ) {
          // update value if conditions mets
          table[nextInd] = [...table[i], n];
        }
      }
    }
  }
  // returning result
  return table[targetSum];
}

console.log(bestSum(7, [5, 3, 4, 7])); // Output: [ 7 ]
console.log(bestSum(7, [2, 3, 7])); // Output: [ 7]
console.log(bestSum(8, [2, 3, 5])); // Output: [ 5, 3 ]
console.log(bestSum(8, [1, 4, 5])); // Output: [ 4, 4 ]
console.log(bestSum(100, [1, 2, 5, 25])); // Output: [ 25, 25, 25, 25 ]

//    0    1     2     3     4     5      6     7
// [ [], null, null , [3],  [4],  [5],  null,  [7]]

//    0    1     2     3     4     5      6        7
// [ [], null,  [2] , [3],  [2,2], [2,3], [3,3],  [7]]
