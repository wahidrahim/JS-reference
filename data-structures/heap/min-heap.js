class MinHeap {
  values = [];
  length = 0;

  insert(value) {
    this.values.push(value);

    let index = this.values.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);
    let child = this.values[index];
    let parent = this.values[parentIndex];

    while (parent > child) {
      this.values[parentIndex] = this.values[index];
      this.values[index] = parent;

      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
      child = this.values[index];
      parent = this.values[parentIndex];
    }

    return this.values;
  }
}

export default MinHeap;
