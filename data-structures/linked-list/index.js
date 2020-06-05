class Node {
  value;
  next = null;

  constructor(value) {
    this.value = value;
  }
}

class LinkedList {
  head = null;
  tail = null;
  size = 0;

  push(value) {
    const newNode = new Node(value);

    if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }

    return ++this.size;
  }

  reverse() {
    let prev = null;
    let curr = this.head;
    let next = null;

    this.head = this.tail;
    this.tail = curr;

    while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
  }

  toArray() {
    let currentNode = this.head;
    const result = [];

    while (currentNode) {
      result.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return result;
  }
}
