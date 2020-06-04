class MinHeap {
  values = [];
  size = 0;

  insert(value) {
    this.values.push(value);

    let childIdx = this.values.length - 1;
    let parentIdx = this.parentIdx(childIdx);

    while (this.values[parentIdx] > this.values[childIdx]) {
      this.swap(parentIdx, childIdx);

      childIdx = parentIdx;
      parentIdx = this.parentIdx(childIdx);
    }
  }

  /**
   * Removes the root off the heap and min-heapifies the tree
   * @returns {number}
   */
  extractMin() {
    const root = this.values[0];

    if (this.values.length === 0) {
      return null;
    }

    if (this.values.length === 1) {
      return this.values.pop();
    }

    this.values[0] = this.values[this.values.length - 1];
    this.values.pop();
    this.minHeapify();

    return root;
  }

  minHeapify(root = 0) {
    let smallest = root;
    let leftChild = smallest * 2 + 1;
    let rightChild = smallest * 2 + 2;

    if (
      leftChild < this.values.length &&
      this.values[smallest] > this.values[leftChild]
    ) {
      smallest = leftChild;
    }

    if (
      rightChild < this.values.length &&
      this.values[smallest] > this.values[rightChild]
    ) {
      smallest = rightChild;
    }

    if (smallest !== root) {
      this.swap(smallest, root);
      this.minHeapify(smallest);
    }
  }

  /**
   * Swap two elements in `this.values` by their indecis
   * @param {number} idx1
   * @param {number} idx2
   */
  swap(idx1, idx2) {
    const backup = this.values[idx1];

    this.values[idx1] = this.values[idx2];
    this.values[idx2] = backup;
  }

  /**
   * Returns the index of the parent node of a child given by index
   * @param {number} childIdx
   * @returns {number}
   */
  parentIdx(childIdx) {
    return Math.floor((childIdx - 1) / 2);
  }
}

export default MinHeap;
