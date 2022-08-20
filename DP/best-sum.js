function bestSum(targetSum, numbers, memo = {}) {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  let shortestComb = null;
  for (let n of numbers) {
    const remainingSum = targetSum - n;
    const remainderComb = bestSum(remainingSum, numbers, memo);
    if (remainderComb) {
      const comb = [...remainderComb, n];
      if (!shortestComb || comb.length < shortestComb.length) {
        shortestComb = comb;
      }
    }
  }
  memo[targetSum] = shortestComb;
  return shortestComb;
}

console.log(bestSum(7, [5, 3, 4, 7])); // [ 7 ]
console.log(bestSum(8, [2, 3, 5])); // [ 5, 3 ]
console.log(bestSum(8, [1, 4, 5])); // [ 4, 4 ]
console.log(bestSum(100, [1, 2, 5, 25])); // after memo it will work fast

//        7[3,4], [4,3], [7] = [3,4] = [7] , 0,[]
// 5(2)      3(4)  4(3)  7(0)
//         4(0)
