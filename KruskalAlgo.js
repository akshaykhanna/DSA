/**
 * @param {number[][]} points
 * @return {number}
 */
class Heap {
  constructor(comparator = (a, b) => a > b) {
    this.heap = [];
    this.compFunc = comparator;
  }
  compare(i, j) {
    return i < this.size() && j < this.size() ? this.compFunc(this.heap[i], this.heap[j]) : i < this.size();
  }
  peek() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }
  size() {
    return this.heap.length;
  }
  _swap(i, j) {
    if (i < this.size() && j < this.size()) {
      const temp = this.heap[i];
      this.heap[i] = this.heap[j];
      this.heap[j] = temp;
    }
  }
  _parent(i) {
    return Math.floor((i - 1) / 2);
  }
  _leftChild(i) {
    return 2 * i + 1;
  }
  _rightChild(i) {
    return 2 * i + 2;
  }
  add(elem) {
    this.heap.push(elem);
    // shiftUp
    let lastInd = this.size() - 1;
    let parent = this._parent(lastInd);
    while (lastInd > 0 && this.compare(lastInd, parent)) {
      this._swap(lastInd, parent);
      lastInd = parent;
      parent = this._parent(lastInd);
    }
  }
  pop() {
    const l = this.size();
    if (l === 0)
      return null;
    if (l === 1)
      return this.heap.pop();
    let index = 0;
    this._swap(l - 1, index);
    const removedElement = this.heap.pop();
    // shiftDown
    while (this.compare(this._leftChild(index), index)
      || this.compare(this._rightChild(index), index)) {
      const [leftChildInd, rightChildInd] = [
        this._leftChild(index), this._rightChild(index)
      ];
      const swapChildInd = this.compare(leftChildInd, rightChildInd)
        ? leftChildInd : rightChildInd;
      this._swap(swapChildInd, index);
      index = swapChildInd;
    }
    return removedElement;
  }
}
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
var minCostConnectPoints = function(points) {
    // Kruskal's Algorithm
    let [edges, n, out, minHeap] = [
        [], points.length, 0, new Heap((a,b) => a[2]<b[2])
    ];
    let [count, uf] = [n-1, new UnionFind(n)];
    for(let i=0; i<n-1; i++) {
        const cordinate1 = points[i];
        for(let j=i+1; j<n; j++) { 
            const cordinate2 = points[j]; 
            const cost = Math.abs(cordinate2[0]-cordinate1[0])
             + Math.abs(cordinate2[1]-cordinate1[1]);
            const edge = [i,j,+cost];
            minHeap.add(edge);     
        }
    }
    while(minHeap.size() > 0 && count > 0) {
        const [v1, v2, cost] = minHeap.pop();
        if(!uf.connected(v1,v2)) {
            uf.unionByRank(v1,v2);
            out += cost; 
            count --;
        }
    }
    return out;
};
