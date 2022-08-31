function allConstruct(targetString, words) {
  const targetStrLen = targetString.length;
  const table = new Array(targetStrLen + 1).fill(0).map(p => new Array());
  // seed intial value/result
  table[0] = [[]];
  for (let i = 0; i < targetStrLen; i++) {
    if (table[i].length > 0) {
      for(let word of words) {
        const wordLen = word.length;
        if(targetString.substr(i, wordLen) === word) {
          const newWaysToConstruct = table[i].map(p => [...p, word]);
          table[i+wordLen].push(...newWaysToConstruct);
        }
      }
    }
  }
  return table[targetStrLen];
}

console.log(
  allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
); //  [[ ab, cd, ef ], [ ab, c, def ],[ abc, def ],[ abed, ef]]
console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); // [[ purp, le ], [p, ur, p, le]]
console.log(
  allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); // []
console.log(allConstruct("", ["cat", "dog", "mouse"])); // [[]]
// After tabulation below statement will run fast
console.log(allConstruct("eeeeeeeeeeeeeeeeee", ["e", "ee", "eee", "eeee"])); // Very large ouput (arround 3958 lines)

//  012345
// "abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]

// i=0,
//   0   1      2          3                    4             5         6
// [[], null, [[ab]]; [[abc], [ab,c]]; [[abcd], [ab, cd]];  null;  [[abc, def], [ab,c, def], [abcd, ef], [ab, cd, ef]] ]

// Time: O(n^m) (Exponential Complexity)
// Space: O(n^m) (Exponential Complexity)
// where: 
// m: targetString.length
// n: words.length
