class UnionFind {
  constructor(size) {
    // would be storing parent
    this.root = new Array(size).fill(0);
    this.root = this.root.map((root, index) => index);
    this.rank = new Array(size).fill(1);
  }
  find(ind) {
    while (ind !== this.root[ind]) {
      ind = this.root[ind];
    }
    return ind;
  }
  findPathCompression(ind) {
    if (ind === this.root[ind])
      return ind;
    return this.root[ind] = this.findPathCompression(this.root[ind]);
  }
  union(x, y) {
    const [rootX, rootY] = [this.find(x), this.find(y)];
    if (rootX !== rootY) {
      this.root[rootY] = rootX;
    }
  }
  unionByRank(x, y) {
    const [rootX, rootY] = [this.findPathCompression(x), this.findPathCompression(y)];
    if (rootX !== rootY) {
      if (this.rank[rootX] > this.rank[rootY]) {
        this.root[rootY] = this.root[rootX];
      } else if (this.rank[rootX] < this.rank[rootY]) {
        this.root[rootX] = this.root[rootY];
      } else {
        this.root[rootY] = this.root[rootX];
        this.rank[rootX] += 1;
      }
    }
  }
  connected(x, y) {
    return this.find(x) === this.find(y);
  }
}
const unionFind = new UnionFind(10);
unionFind.unionByRank(1, 2);
unionFind.unionByRank(2, 5);
unionFind.unionByRank(5, 6);
unionFind.unionByRank(6, 7);
unionFind.unionByRank(3, 8);
unionFind.unionByRank(8, 9);
console.log(unionFind.root);
console.log(unionFind.connected(1, 5));
console.log(unionFind.connected(5, 7));
console.log(unionFind.connected(4, 9));
unionFind.unionByRank(4, 9);
console.log(unionFind.connected(4, 9));
