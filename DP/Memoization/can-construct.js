function canConstruct(targetString, words, memo = {}) {
  if (targetString in memo) return memo[targetString];
  if (targetString === "") return true;
  for (let word of words) {
    if (targetString.substr(0, word.length) === word) {
      if (canConstruct(targetString.substr(word.length), words, memo)) {
        memo[targetString] = true;
        return true;
      }
    }
  }
  memo[targetString] = false;
  return false;
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

//          abcdef
//    cdef(ab)     def(abc)
//  ef(cd)      def('') -> true

// n ^ (m * m);
