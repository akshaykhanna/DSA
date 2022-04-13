class Trie {
  constructor() {
    this.keys = {};
    this.isEnd = false;
  }
  insert(word) {
    if (word.length === 0) {
      this.isEnd = true;
      return;
    }
    const ch = word[0];
    if (!(ch in this.keys)) {
      this.keys[ch] = new Trie();
    }
    return this.keys[ch].insert(word.substr(1));
  }
  search(word) {
    if (word.length === 0)
      return this.isEnd;
    const ch = word[0];
    if (!(ch in this.keys))
      return false;
    return this.keys[ch].search(word.substr(1));
  }
  startsWith(prefix) {
    if (prefix.length === 0)
      return true;
    const ch = prefix[0];
    if (!(ch in this.keys))
      return false;
    return this.keys[ch].startsWith(prefix.substr(1));
  }
}
const trie = new Trie();
console.log(trie);
console.log('Inserting apple')
trie.insert("apple");
console.log('Search apple: ' + trie.search('apple')); // true
console.log('Search app: ' + trie.search('app')); // false
console.log('StartsWith app: ' + trie.startsWith('app')); // true
console.log('Inserting app')
trie.insert("app");
console.log('Search app: ' + trie.search('app')); // true
