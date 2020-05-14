class Node {
  data = null;
  next = null;

  constructor(data) {
    this.data = data;
  }
}

class Queue {
  first = null;
  last = null;
  size = 0;

  enqueue(data) {
    const newNode = new Node(data);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    ++this.size;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }

    const dequeuedNode = this.first;

    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }

    --this.size;

    return dequeuedNode.data;
  }
}

export default Queue;
