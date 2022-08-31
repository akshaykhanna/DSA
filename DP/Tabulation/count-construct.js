function countConstruct(targetString, words) {
  // create & intailize table with default values
  const targetStrLen = targetString.length;
  const table = new Array(targetStrLen + 1).fill(0);
  // seed value: can construct empty string in 1 way
  table[0] = 1;
  for(let i=0; i<=targetStrLen; i++) {
    if(table[i] > 0) {
      for(let word of words) {
        const wordLen = word.length;
        if(targetString.substr(i, wordLen) === word) {
          table[i+wordLen] = table[i+wordLen] + table[i];
        }
      }
    }
  }
  return table[targetStrLen];
}

console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // 1
console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); // 2
console.log(
  countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); // 0
console.log(countConstruct("", ["cat", "dog", "mouse"])); // 1
// after memoization it will work instanly
console.log(
  countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
  ])
); // 0

// Time: O(m*n*m) = O(nm^2)
// Space: O(m)
// where: 
// m: targetString.length
// n: words.length
