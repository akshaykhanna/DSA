function canConstruct(targetString, words) {
  const targetStringLen = targetString.length;
  // intialize table with default values
  const table = new Array(targetStringLen + 1).fill(false);
  // seed trival result: i.e. can always construct empty string (table[0])
  table[0] = true;
  // iterate
  for (let i = 0; i < targetStringLen; i++) {
    if (table[i]) {
      for (let word of words) {
        const wordLen = word.length;
        if (targetString.substr(i, wordLen) === word) {
          table[i + wordLen] = true;
        }
      }
    }
  }
  // returning final result from table
  return table[targetStringLen];
}

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
console.log(
  canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); // false
console.log(canConstruct("", ["cat", "dog", "mouse"])); // true
// after DP it works instanlty
console.log(
  canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
  ])
); // false
console.log(
  canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeeef",
  ])
); // true
