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
