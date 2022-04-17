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
var minCostConnectPoints = function(points) {
    // Prims's Algorithm
    let [edges, n, out, minHeap] = [
        [], points.length, 0, new Heap((a,b) => a[2]<b[2])
    ];
    let [count, coordinate1, visited] = [n-1, points[0], new Array(n).fill(false)];
    for(let j=1; j<n; j++) {
        const coordinate2 = points[j];
        const cost = Math.abs(coordinate2[0] - coordinate1[0]) +  Math.abs(coordinate2[1] - coordinate1[1]);
        minHeap.add([0,j,cost]);
    }
    visited[0] = true; 
    while(minHeap.size() > 0 && count > 0) {
        const [point1, point2, cost] = minHeap.pop();
        if(!visited[point2]) {
            out += cost;
            count --;
            visited[point2] = true;
            coordinate1 = points[point2];
            for(let j=0; j<n; j++) {
                if(!visited[j]) {
                    const coordinate2 = points[j];
                    const cost = Math.abs(coordinate2[0] - coordinate1[0]) +  Math.abs(coordinate2[1] - coordinate1[1]);
                    minHeap.add([point2,j,cost]);
                }
            }
        }
    }
    return out;
};
