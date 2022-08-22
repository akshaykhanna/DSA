function allConstruct(targetString, words, memo = {}) {
  if (targetString in memo) return memo[targetString];
  if (targetString === "") return [[]];
  let allCombinations = [];
  for (let word of words) {
    if (targetString.slice(0, word.length) === word) {
      const combinations = allConstruct(
        targetString.slice(word.length),
        words,
        memo
      );
      allCombinations.push(...combinations.map((comb) => [word, ...comb]));
    }
  }
  memo[targetString] = allCombinations;
  return allCombinations;
}

console.log(x
  allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
); //  [[ ab, cd, ef ], [ ab, c, def ],[ abc, def ],[ abed, ef]]
console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); // [[ purp, le ], [p, ur, p, le]]
console.log(
  allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); // []
console.log(allConstruct("", ["cat", "dog", "mouse"])); // [[]]
// After memoization below statement will run bit fast
console.log(allConstruct("eeeeeeeeeeeeeeeeee", ["e", "ee", "eee", "eeee"])); // Very large ouput (arround 3958 lines)
