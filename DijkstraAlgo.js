/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
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
  isEmpty() {
      return this.heap.length === 0;
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

var networkDelayTime = function(times, n, k) {
    let distances = new Array(n).fill(Infinity);
    const adjList = distances.map(() => []);
    const minHeap = new Heap((a,b) => distances[a]<distances[b]);
    for(let elem of times) {
        const [src, dest, time] = elem;
        // console.log(src, dest, time);
        adjList[src-1].push([dest-1, time]);
    }
    minHeap.add(k-1);
    distances[k-1] = 0;
    while(!minHeap.isEmpty()) {
        const currVertex = minHeap.pop();
        const adjVertices = adjList[currVertex];
        for(let i=0; adjVertices && i<adjVertices.length; i++) {
            const [adjVertex, time] = adjVertices[i];
            if(distances[adjVertex] > distances[currVertex]+time) {
               distances[adjVertex] =  distances[currVertex]+time;
               minHeap.add(adjVertex);
            }
        }
    }
    const out = Math.max(...distances);
    return out === Infinity ? - 1 : out;
};
