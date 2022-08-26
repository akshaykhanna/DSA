function canSum(targetSum, numbers) {
  // create table & intialse with default values
  const table = new Array(targetSum + 1).fill(false);
  // seed trivial solution in table
  table[0] = true;
  // iterate & update current value based on previous
  for (let i = 0; i <= targetSum; i++) {
    if (table[i]) {
      for (let n of numbers) {
        if (n + i <= targetSum) table[n + i] = true;
      }
    }
  }
  return table[targetSum];
}

console.log(canSum(7, [5, 3, 4, 7])); // true
console.log(canSum(7, [2, 3])); // true
console.log(canSum(7, [2, 4])); // false
console.log(canSum(8, [2, 3, 5])); // true
// this will run fast with DP
console.log(canSum(300, [7, 14])); // false

//  0 1 2 3 4 5 6 7
// [T,F,F,F,F,F,F,F]
