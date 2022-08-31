function countConstruct(targetString, words, memo = {}) {
  if (targetString in memo) return memo[targetString];
  if (targetString === "") return 1;
  let count = 0;
  for (let word of words) {
    if (targetString.substr(0, word.length) === word) {
      count += countConstruct(targetString.substr(word.length), words, memo);
    }
  }
  memo[targetString] = count;
  return count;
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
