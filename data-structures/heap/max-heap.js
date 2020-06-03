class MaxHeap {
  values = [];

  /**
   * Inserts a number onto the heap
   * @param {number} value
   * @returns {number} - the size of the heap array
   */
  insert(value) {
    this.values.push(value);

    let childIdx = this.values.length - 1;
    let parentIdx = this.parentIdxOf(childIdx);

    while (this.values[parentIdx] < this.values[childIdx]) {
      this.swap(parentIdx, childIdx);

      childIdx = this.parentIdxOf(childIdx);
      parentIdx = this.parentIdxOf(childIdx);
    }

    return this.values.size;
  }

  /**
   * @returns {number} - the maximum number in the heap (root)
   */
  extractMax() {
    if (this.values.size === 0) {
      return null;
    }

    if (this.values.size === 1) {
      return this.values.pop();
    }

    const root = this.values[0];

    this.values[0] = this.values[this.values.length - 1];
    this.values.pop();
    this.maxHeapify();

    return root;
  }

  /**
   * Recursive function to heapify (bubble down) a max heap
   * @param {number} idx - index of root node
   */
  maxHeapify(idx = 0) {
    let largestValueIdx = idx;
    let leftChildIdx = idx * 2 + 1;
    let rightChildIdx = idx * 2 + 2;

    if (
      leftChildIdx < this.values.length &&
      this.values[largestValueIdx] < this.values[leftChildIdx]
    ) {
      largestValueIdx = leftChildIdx;
    }

    if (
      rightChildIdx < this.values.length &&
      this.values[largestValueIdx] < this.values[rightChildIdx]
    ) {
      largestValueIdx = rightChildIdx;
    }

    if (largestValueIdx !== idx) {
      this.swap(idx, largestValueIdx);
      this.maxHeapify(largestValueIdx);
    }
  }

  /**
   * Utility function to get the index of the parent of a child node
   * @param {number} idx - index of an element
   */
  parentIdxOf(idx) {
    return Math.floor((idx - 1) / 2);
  }

  /**
   * Utility method to swap to elements' positions in `this.values`
   * @param {number} idx1 - index of element 1
   * @param {number} idx2 - index of element 2
   */
  swap(idx1, idx2) {
    const backup = this.values[idx1];

    this.values[idx1] = this.values[idx2];
    this.values[idx2] = backup;
  }
}

export default MaxHeap;
