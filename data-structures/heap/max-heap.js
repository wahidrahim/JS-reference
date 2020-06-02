class MaxHeap {
  values = [];

  insert(value) {
    this.values.push(value);

    let childIdx = this.values.length - 1;
    let parentIdx = Math.floor((childIdx - 1) / 2);
    let child = this.values[childIdx];
    let parent = this.values[parentIdx];

    while (parent < child) {
      // Swap parent and child
      this.values[parentIdx] = this.values[childIdx];
      this.values[childIdx] = parent;

      childIdx = parentIdx;
      parentIdx = Math.floor((childIdx - 1) / 2);
      child = this.values[childIdx];
      parent = this.values[parentIdx];
    }

    return this.values;
  }

  extractMax() {
    const max = this.values[0];

    this.values[0] = this.values.pop();

    let parentIdx = 0;
    let leftChildIdx = parentIdx * 2 + 1;
    let rightChildIdx = parentIdx * 2 + 2;
    let parent = this.values[parentIdx];
    let leftChild = this.values[leftChildIdx];
    let rightChild = this.values[rightChildIdx];

    while (leftChild > parent || rightChild > parent) {
      if (rightChild > leftChild) {
        this.values[leftChildIdx] = this.values[parentIdx];
        this.values[parentIdx] = leftChild;
        parentIdx = leftChildIdx;
      } else {
        this.values[rightChildIdx] = this.values[parentIdx];
        this.values[parentIdx] = rightChild;
        parentIdx = rightChildIdx;
      }

      leftChildIdx = parentIdx * 2 + 1;
      rightChildIdx = parentIdx * 2 + 2;
      parent = this.values[parentIdx];
      leftChild = this.values[leftChildIdx];
      rightChild = this.values[rightChildIdx];
    }

    return max;
  }
}

export default MaxHeap;
