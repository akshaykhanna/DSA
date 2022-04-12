class Heap {
  constructor(comparator = (a, b) => a > b) {
    this.heap = [];
    this.compFunc = comparator;
  }
  compare(i, j) {
    return i < this.size() && j < this.size() && this.compFunc(this.heap[i], this.heap[j]);
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
    while (this.compare(this._leftChild(index), index) || this.compare(this._rightChild(index), index)) {
      const [leftChildInd , rightChildInd ] = [this._leftChild(index), this._rightChild(index)];
      const swapChildInd = this.compare(leftChildInd, rightChildInd) ? leftChildInd : rightChildInd;
      this._swap(swapChildInd, index);
      index = swapChildInd;
    }
    return removedElement;
  }
}

let input1 = [3,1,2,5,6]
const maxHeap = new Heap((a,b) => a > b);
input1.forEach(p => maxHeap.add(p))
const minHeap = new Heap((a,b) => a < b);
input1.forEach(p => minHeap.add(p))
function popAndPrintHeap(heap) {
  var out = [];
  while(heap.size()) {
    out.push(heap.pop());
  }
  console.log(out);
}
console.log('maxHeap: '+ maxHeap.heap);
popAndPrintHeap(maxHeap);
console.log('minHeap: '+ minHeap.heap);
popAndPrintHeap(minHeap);
