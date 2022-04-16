/* 
The main idea of a “disjoint set” is to have all connected vertices have the same parent node or root node, whether directly or indirectly connected. 
To check if two vertices are connected, we only need to check if they have the same root node.

The two most important functions for the “disjoint set” data structure are the find function and the union function. 
The find function locates the root node of a given vertex. The union function connects two previously unconnected vertices by giving them 
the same root node. There is another important function named connected, which checks the “connectivity” of two vertices. 
The find and union functions are essential for any question that uses the “disjoint set” data structure.
*/
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
        this.root[rootY] = rootX;
      } else if (this.rank[rootX] < this.rank[rootY]) {
        this.root[rootX] = rootY;
      } else {
        this.root[rootY] = rootX;
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
