class Graph {
  adjList = {};

  addVertex(value) {
    if (!this.adjList[value]) {
      this.adjList[value] = [];
    }
  }

  addEdge(node1, node2) {
    this.adjList[node1] = [...this.adjList[node1], node2];
    this.adjList[node2] = [...this.adjList[node2], node1];
  }

  DFS() {
    const result = [];
    const visited = {};

    const recursiveDFS = (node) => {
      result.push(node);
      visited[node] = true;

      this.adjList[node].forEach((child) => {
        if (!visited[child]) {
          recursiveDFS(child);
        }
      });
    };

    recursiveDFS(Object.keys(this.adjList)[0]);

    return result;
  }

  BFS() {
    const result = [];
    const visited = {};
    const queue = [];
    const firstNode = Object.keys(this.adjList)[0];

    visited[firstNode] = true;
    queue.push(firstNode);

    while (queue.length) {
      const node = queue.shift();

      result.push(node);

      this.adjList[node].forEach((child) => {
        if (!visited[child]) {
          visited[child] = true;
          queue.push(child);
        }
      });
    }

    return result;
  }
}

export default Graph;
