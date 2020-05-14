class Node {
  value = null;
  left = null;
  right = null;

  constructor(data) {
    this.value = data;
  }
}

class BST {
  root = null;

  insert(value) {
    const newNode = new Node(value);

    const recursiveInsert = (node, rootNode) => {
      if (!rootNode) {
        return node;
      }

      if (node.value < rootNode.value) {
        rootNode.left = recursiveInsert(node, rootNode.left);
      } else if (node.value > rootNode.value) {
        rootNode.right = recursiveInsert(node, rootNode.right);
      }

      return rootNode;
    };

    this.root = recursiveInsert(newNode, this.root);
  }

  insertIterative(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;

      return this;
    }

    let currentNode = this.root;

    while (true) {
      if (newNode.value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;

          return this;
        }

        currentNode = currentNode.left;
      } else if (newNode.value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = newNode;

          return this;
        }

        currentNode = currentNode.right;
      } else if (newNode.value === currentNode.value) {
        return this;
      }
    }
  }

  getInOrderArray() {
    const BSTarray = [];
    const pushToArrayRecursively = (rootNode) => {
      if (rootNode) {
        pushToArrayRecursively(rootNode.left);
        BSTarray.push(rootNode.value);
        pushToArrayRecursively(rootNode.right);
      }
    };

    pushToArrayRecursively(this.root);

    return BSTarray;
  }
}

export default BST;
