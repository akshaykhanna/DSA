function howSum(targetSum, numbers, memo = {}) {
  if(targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  for (let n of numbers) {
    const remainderSum = targetSum - n;
    const comb = howSum(remainderSum, numbers, memo);
    if (comb != null) {
      memo[targetSum] = [...comb, n];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return null;
 }
 
 console.log(howSum(7, [5, 3, 4, 7])); // [3,4] or [7]
 console.log(howSum(7, [2, 3])); // [2,2,3]
 console.log(howSum(7, [2, 4])); // null
 console.log(howSum(8, [2, 3, 5])); // [2,2,2,2]
 console.log(howSum(300, [7, 14])); // null (With DP it also gives instant output)
 console.log(howSum(300, [7, 2])); 
//  Output: [
//   2, 2, 2, 7, 7, 7, 7, 7, 7, 7, 7,
//   7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
//   7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
//   7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
//   7
// ]
 