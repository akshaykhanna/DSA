function howSum(targetSum, numbers) {
  const table = new Array(targetSum + 1).fill(null);
  table[0] = [];
  for (let i = 0; i <= targetSum; i++) {
    if(table[i]) {
      for(let n of numbers) {
        if(i+n <= targetSum) {
          table[i+n] = [...table[i], n];
        }
      }
    }
  }
  return table[targetSum];
}

console.log(howSum(7, [5, 3, 4, 7])); // [3,4] or [7]
console.log(howSum(7, [2, 3])); // [2,2,3]
console.log(howSum(7, [2, 4])); // null
console.log(howSum(8, [2, 3, 5])); // [2,2,2,2]
console.log(howSum(300, [7, 14])); // null (With DP it also gives instant output)
console.log(howSum(300, [7, 2])); // null (With DP it also gives instant output)

//    0    1     2     3     4     5      6     7
// [ [], null, null , [3],  [4],  [5],  null,  [7]]

//    0    1     2     3     4     5      6        7
// [ [], null,  [2] , [3],  [2,2], [2,3], [3,3],  [2,2,3]]
