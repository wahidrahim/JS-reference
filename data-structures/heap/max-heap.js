class MaxHeap {
  values = [];

  insert(value) {
    this.values.push(value);

    let childIdx = this.values.length - 1;
    let parentIdx = this.parentIdxOf(childIdx);

    while (this.values[parentIdx] < this.values[childIdx]) {
      this.swap(parentIdx, childIdx);

      childIdx = this.parentIdxOf(childIdx);
      parentIdx = this.parentIdxOf(childIdx);
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
